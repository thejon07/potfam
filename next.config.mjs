/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['static.nike.com',"testrunnercom.b-cdn.net","sneakfitters.com","cdn.mos.cms.futurecdn.net","img.businessoffashion.com","assets.adidas.com","www.hellokpop.com"], // <-- add the domain here
  },
}

export default nextConfig;