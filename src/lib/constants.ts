export const __prod__ = process.env.NODE_ENV === "production";
export const __baseUrl__ = __prod__
	? "https://pentropy.vercel.app"
	: "http://localhost:3000";
