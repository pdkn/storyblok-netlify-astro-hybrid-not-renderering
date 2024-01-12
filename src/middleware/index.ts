import type { MiddlewareHandler } from "astro";

export const onRequest: MiddlewareHandler = async (context, next) => {
	const url = new URL(context.request.url)
	if (url.pathname === '/ssr' || url.pathname.startsWith('/ssr/')) {
		// Add Auth here
	}
	const page = await next();
	// console.log("context.request", context.request);
	// console.log("page", page);
	return page
};
