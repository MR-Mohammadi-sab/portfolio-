const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-wbqz.vercel.app";

export default function sitemap() {
  const routes = ["", "/about", "/projects", "/resume", "/contact"];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
