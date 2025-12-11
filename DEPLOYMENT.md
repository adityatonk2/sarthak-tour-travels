# Production Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Optimizations
- [x] Removed `unoptimized` flags from images (enabled Next.js image optimization)
- [x] Updated all images to use Next.js `Image` component
- [x] Added proper image sizes and formats (AVIF, WebP)
- [x] Enabled compression and React strict mode
- [x] Removed `poweredByHeader` for security

### ✅ SEO & Metadata
- [x] Added comprehensive Open Graph metadata
- [x] Added Twitter Card metadata
- [x] Updated structured data (JSON-LD) with proper URLs
- [x] Enhanced sitemap with all routes
- [x] Updated robots.txt with proper sitemap URL
- [x] Added proper metadata to all pages

### ✅ Performance
- [x] Optimized image loading with proper `sizes` attributes
- [x] Added priority loading for above-the-fold images
- [x] Enabled AVIF and WebP image formats
- [x] Configured proper cache TTL

## Environment Variables

Create a `.env.local` file (or set in your hosting platform):

```bash
# Site URL - Replace with your actual domain
NEXT_PUBLIC_SITE_URL=https://sarthaktravels.com

# Google Analytics ID (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## Deployment Steps

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Production ready deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables:
     - `NEXT_PUBLIC_SITE_URL` = your domain
     - `NEXT_PUBLIC_GA_ID` = your Google Analytics ID (optional)
   - Click Deploy

3. **Custom Domain**
   - Add your custom domain in Vercel settings
   - Update DNS records as instructed
   - Update `NEXT_PUBLIC_SITE_URL` with your custom domain

### Option 2: Other Platforms

#### Netlify
- Connect your repository
- Build command: `npm run build`
- Publish directory: `.next`
- Add environment variables

#### Self-Hosted
```bash
npm run build
npm start
```

## Post-Deployment Checklist

### Immediate
- [ ] Verify site loads correctly
- [ ] Check all pages are accessible
- [ ] Test mobile responsiveness
- [ ] Verify images load correctly
- [ ] Test WhatsApp links
- [ ] Check contact forms (if any)

### SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify robots.txt is accessible
- [ ] Check structured data with Google Rich Results Test
- [ ] Test Open Graph tags with Facebook Debugger
- [ ] Verify Twitter Card preview

### Performance
- [ ] Run Lighthouse audit (target: 90+ on all metrics)
- [ ] Check Core Web Vitals
- [ ] Verify image optimization is working
- [ ] Test page load speeds

### Analytics
- [ ] Set up Google Analytics (if using)
- [ ] Verify tracking code is working
- [ ] Set up conversion tracking

### Security
- [ ] Enable HTTPS (should be automatic on Vercel)
- [ ] Verify security headers
- [ ] Check for any console errors
- [ ] Review and update dependencies

## Important URLs

After deployment, update these in your codebase:
- `app/layout.tsx` - Structured data URL
- `app/sitemap.ts` - Base URL (uses env variable)
- `app/robots.ts` - Sitemap URL (uses env variable)

## Monitoring

1. **Error Tracking**: Consider adding Sentry or similar
2. **Performance Monitoring**: Use Vercel Analytics or similar
3. **Uptime Monitoring**: Set up UptimeRobot or similar
4. **Backup**: Ensure regular backups of your data

## Maintenance

- Regularly update dependencies: `npm update`
- Monitor for security vulnerabilities
- Update content regularly for better SEO
- Review and update images as needed
- Monitor Google Search Console for issues

## Troubleshooting

### Images not loading
- Verify all image paths are correct
- Check if images exist in `public/images/`
- Ensure image optimization is enabled

### Build errors
- Check Node.js version (18.17+)
- Clear `.next` folder and rebuild
- Check for TypeScript errors: `npm run lint`

### Performance issues
- Check image sizes (should be optimized)
- Verify lazy loading is working
- Review bundle size

## Support

For issues or questions, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Documentation: https://vercel.com/docs

