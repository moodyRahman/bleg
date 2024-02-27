export const prerender = true;
export const trailingSlash = 'always';

export interface Attributes {
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	tags: string[];
}

export async function load({ fetch }): Promise<{ posts: Attributes[] }> {
	const req = await fetch('/api', {
		method: 'GET'
	});

	const raw_data = await req.json();
	const data: Attributes[] = raw_data.data;

	return {
		posts: data
	};
}
