export declare interface StrapiRequest {
	data: Datum[];
	meta: Meta;
}

export declare interface Datum {
	id: number;
	attributes: Attributes;
}

export declare interface Attributes {
	title: string;
	slug: string;
	content: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	tags: string[];
}

export declare interface Meta {
	pagination: Pagination;
}

export declare interface Pagination {
	page: number;
	pageSize: number;
	pageCount: number;
	total: number;
}
