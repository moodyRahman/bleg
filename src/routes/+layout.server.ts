import { STRAPI_TOKEN } from '$env/static/private';

export const prerender = true;

export async function load() {
	const req = await fetch('https://strapi.moodyrahman.com/api/blogposts', {
		headers: { Authorization: `bearer ${STRAPI_TOKEN}` }
	});

	const data = await req.json();

	console.log(JSON.stringify(data, null, 2));

	return {
		data: [
			{
				title: 'moody',
				content: 'lalala',
				slug: 1
			},
			{
				title: 'moody',
				content: 'lalala',
				slug: 2
			},
			{
				title: 'moody',
				content: 'lalala',
				slug: 3
			}
		]
	};
}
