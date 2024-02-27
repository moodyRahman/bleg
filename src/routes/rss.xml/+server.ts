interface Attributes {
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	tags: string[];
}

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
                <description>${x.publishedAt}</description>
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
