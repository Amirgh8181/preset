/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        domains:[
            "img-prod-cms-rt-microsoft-com.akamaized.net",
            "moviesapi.ir"
        ]
    }
}

module.exports = nextConfig
