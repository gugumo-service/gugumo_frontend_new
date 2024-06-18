/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode : true,
    webpack(config){
        config.module.rules.push({
            test : /\.svg$/,
            use : ["@svgr/webpack"]
        })
        return config;
    },
    async rewrites(){
        return [
            {
                source: '/back/:path*',
                destination: `${process.env.API_URL}/:path*`,
            },
        ]
    }
};

export default nextConfig;
