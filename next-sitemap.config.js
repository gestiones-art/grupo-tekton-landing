/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://estudiotekton.com',
  generateRobotsTxt: true,
  exclude: [
    '/tramites/electromecanica-ascensor', // excluye este trámite del SEO principal
  ],
  priority: null,
  changefreq: 'monthly',
};
