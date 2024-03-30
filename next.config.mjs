/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "source.unsplash.com",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "anisurdev.info",
				port: "",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "assets.pokemon.com",
				port: "",
				pathname: "/**",
			}
		]
	},
};

export default nextConfig;
