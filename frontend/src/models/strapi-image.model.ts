export interface StrapiImage {
	data?: StrapiImageData;
}

export interface StrapiImageData {
	id: number;
	attributes: ImageData;
}

export interface ImageData {
	name: string;
	alternativeText: any;
	caption: any;
	width: number;
	height: number;
	formats: Formats;
	hash: string;
	ext: string;
	mime: string;
	size: number;
	url: string;
	previewUrl: any;
	provider: string;
	provider_metadata: any;
	createdAt: string;
	updatedAt: string;
}

export interface Formats {
	thumbnail: Thumbnail;
	small: Small;
	large: Large;
	medium: Medium;
}

export interface Thumbnail {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Small {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Large {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface Medium {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	path: any;
	width: number;
	height: number;
	size: number;
	url: string;
}
