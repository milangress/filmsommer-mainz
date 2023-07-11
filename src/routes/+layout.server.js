// get vercel env from process.env
const VERCEL_ENV = process.env.VERCEL_ENV;

function noIndexOnVercel() {
	if (VERCEL_ENV === 'preview' || VERCEL_ENV === 'development') {
		return 'noindex';
	} else {
		return 'index, follow';
	}
}

export function load() {
	return {
		noIndexOnVercel: noIndexOnVercel()
	};
}
