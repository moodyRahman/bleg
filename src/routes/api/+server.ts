import { STRAPI_TOKEN } from '$env/static/private';
import { type StrapiRequest } from '$lib/ambient';

export async function GET() {
	const req = await fetch('https://strapi.moodyrahman.com/api/blogposts', {
		headers: { Authorization: `bearer ${STRAPI_TOKEN}` }
	});

	const raw_data: StrapiRequest = await req.json();

	const data = raw_data.data
		.map((x) => x.attributes)
		.sort((x, y) => (x.createdAt < y.createdAt ? 1 : -1));

	const res = new Response(
		JSON.stringify({
			data: data
		}),
		{
			headers: {
				'content-type': 'application/json'
			}
		}
	);

	return res;
}

export const prerender = true;
