# Sarthak Travels & Holidays

A modern, high-performance travel agency website built with Next.js 14+, TypeScript, and Tailwind CSS.
Designed for speed, SEO, and WhatsApp conversions.

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17 or later
- npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/sarthak-travels.git
    cd sarthak-travels
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    yarn install
    ```

3.  Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 customization

### 1. Company Information & Contact Details
To update phone numbers, emails, address, or social links:
- Edit `data/company.json`
- The WhatsApp button and contact pages automatically pull from this file.
- **Current Numbers**: +91 93894 77123 (Main)

### 2. Branding (Colors & Fonts)
- **Colors**: Edit `app/globals.css`.
  - `--color-primary`: Main brand color (Deep Blue).
  - `--color-secondary`: Accent color (Orange).
- **Fonts**: Configured in `app/layout.tsx`. Implementation uses `Inter` from Google Fonts.

### 3. Content Management
Manage website content via JSON files in the `data/` folder:
- `data/services.json`: Add/Edit services displayed on Home and Services page.
- `data/packages.json`: Manage tour packages (slug, price, itinerary).
- `data/testimonials.json`: Update customer reviews.
- `data/company.json`: Global company strings and USPs.

### 4. Images
- Place images in `public/images/`.
- Update references in `data/packages.json` or components.
- Currently using placeholders. **Action Required**: Replace `/images/hero-bg-placeholder.jpg` with a real high-quality hero image.

## 🚢 Deployment

### Deploy on Vercel (Recommended)
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1.  Push code to GitHub.
2.  Import project in Vercel.
3.  Deploy.

The build command is `next build`.
Output directory is `.next`.

## 📁 Project Structure

- `app/`: Next.js App Router pages and layouts.
- `components/`: React components.
  - `ui/`: Reusable primitives (Button, Card).
  - `sections/`: Page sections (Hero, Testimonials).
  - `layout/`: Global layout (Header, Footer).
- `data/`: JSON content.
- `types/`: TypeScript definitions.
- `lib/`: Utilities.

## ⚡ Performance & SEO

- **Static Site Generation (SSG)**: All pages including package details are pre-rendered at build time for maximum speed.
- **Microdata**: Basic meta tags configured in `app/layout.tsx` and individual pages.
- **Sitemap**: Automatically generated at `sarthaktravels.com/sitemap.xml`.

## 📞 Support

For development support, contact [Your Name/Agency].
