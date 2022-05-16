/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['raw.githubusercontent.com'] //agregamos esta comando para las imagenes asi no solo permita el rendering static de archivos que se guardan dentro del proyecto
  }
}

module.exports = nextConfig
