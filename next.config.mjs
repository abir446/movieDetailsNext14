/** @type {import('next').NextC
 * onfig} */
const nextConfig = {
      images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        port: '',
      },
    ],
}
};


export default nextConfig;
