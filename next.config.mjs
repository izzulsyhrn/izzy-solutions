/** @type {import('next').NextConfig} */
const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || 'izzy-solutions'; // Auto ambik nama repo dari GitHub Actions, atau hardcode nama repo kau (contoh: 'vfl-valorant')

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // Wajib untuk GitHub Pages / static hosting
  output: 'export',  // Ini buat static HTML export → folder 'out/'

  // Untuk subpath GitHub Pages 
  basePath: isProd ? `/${izzy-solutions}` : '',          // Kosongkan masa dev (localhost)
  assetPrefix: isProd ? `/${izzy-solutions}/` : '',      // Tambah trailing slash penting!

  // Images: Wajib unoptimized sebab GitHub Pages tak support Next Image optimization
  images: {
    unoptimized: true,
  },

  // Optional: Ignore TS errors kalau project kau ada issue (tapi baik fix TS error sebenar)
  typescript: {
    ignoreBuildErrors: true,
  },

  // Optional: Kalau kau guna trailing slash (recommended untuk static export)
  trailingSlash: true,
};

export default nextConfig;
