import silhouette from './superhero-silhouette.png';

const noImageSuffix = 'image_not_available';

export const imageOptions = {
	type: 'landscape',
	dimensions: {
		size: 'incredible',
		width: '464',
		height: '261',
	},
};

export const getImageUrl = (skeleton, character) => {
	if (skeleton) {
		return silhouette;
	}
	const { thumbnail } = character;
	const { path, extension } = thumbnail;

	if (path.endsWith(noImageSuffix)) {
		return null;
	}

	const {
		type,
		dimensions: { size },
	} = imageOptions;

	return `${path}/${type}_${size}.${extension}`;
};

export const infoLabel = (label, count) =>
	`${label}${count !== 1 ? 's' : ''}`;

export const handleWikiClick = urls => () => {
	const [wikiUrl] = urls.filter(url => url.type === 'wiki');
	if (wikiUrl) {
		window.open(wikiUrl.url, '_blank');
	}
};
