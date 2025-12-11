import { MetadataRoute } from 'next'
import packagesData from "@/data/packages.json";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://sarthaktravels.com';

    const staticRoutes = [
        '',
        '/about',
        '/services',
        '/packages',
        '/contact',
        '/gallery',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }));

    const packageRoutes = packagesData.map((pkg) => ({
        url: `${baseUrl}/packages/${pkg.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.9,
    }));

    return [...staticRoutes, ...packageRoutes];
}
