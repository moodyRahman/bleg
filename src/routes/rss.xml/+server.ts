interface Attributes {
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	tags: string[];
}

/**

item>
<title>Running Phoenix (elixir) Apps on Kubernetes</title>
<link>https://jaronoff.com/posts/2021-03-02-elixir-kube/</link>
<pubDate>Tue, 02 Mar 2021 00:00:00 +0000</pubDate>
<guid>https://jaronoff.com/posts/2021-03-02-elixir-kube/</guid>
<description>
I&rsquo;m currently working on a side project for a friend (on the hush hush right now), and I&rsquo;ve had the pleasure of writing it in elixir using Phoenix. Having avoided touching react for a while, being able to write some pretty simple HTML on top of an elixir backend is a wonderful experience. Local development is simple, but how one goes about preparing and deploying their Phoenix app for Kubernetes is a whole other process.
</description>
</item>
 */

export async function GET({ fetch }) {
	const req = await fetch('/api');
	const raw_data = await req.json();
	const posts: Attributes[] = raw_data.data;

	console.log(posts);

	return new Response(
		`
        <?xml version="1.0" encoding="UTF-8" ?>
        <rss version="2.0">

        <channel>
        <title>moody's head hurts</title>
        <link>https://bleg.moodyrahman.com/</link>
        <description>moody's stream of conscious, coming to you hot in fresh in under 30 minutes</description>

        ${posts
					.map(
						(x) => `
            <item>
                <title>${x.title}</title>
                <link>https://bleg.moodyrahman.com/${x.slug}</link>
				<guid>https://bleg.moodyrahman.com/${x.slug}</guid>
				<description>${x.content.substring(0, 150)}...</description>
				<author> moody </author>
				<pubDate>${x.publishedAt}</pubDate>
            </item>
        `
					)
					.join('\n')}

        </channel>
        </rss> `.trim(),
		{
			headers: {
				'Content-Type': 'application/xml'
			}
		}
	);
}

export const prerender = true;
