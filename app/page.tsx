import { Hero } from "@/components/sections/hero";
import { CategoryCarousel } from "@/components/sections/category-carousel";
import { DestinationsCarousel } from "@/components/sections/destinations-carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { PackageCard } from "@/components/ui/package-card";
import { GalleryPreview } from "@/components/sections/gallery-preview";
import { TestimonialCarousel } from "@/components/sections/testimonial-carousel";
import servicesData from "@/data/services.json";
import packagesData from "@/data/packages.json";
import testimonialsData from "@/data/testimonials.json";
import companyData from "@/data/company.json";
import { CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <Hero
        title={companyData.tagline}
        subtitle="Experience the magic of the Himalayas with our premium tour packages and rental fleet."
        backgroundImage="/images/uploads/hero-landing-image.png"
      />

      {/* Tour Categories Carousel - New Reference Section */}
      <CategoryCarousel />

      {/* Popular Destinations - 3D Carousel Reference */}
      <DestinationsCarousel />

      {/* Intro Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Welcome to Sarthak Travels"
            subtitle="Your trusted partner for exploring the divine land of Uttarakhand"
          />
          <p className="text-center max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {companyData.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {companyData.usps.map((usp, index) => (
              <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <CheckCircle className="h-6 w-6" />
                </div>
                <h3 className="font-semibold">{usp.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive travel solutions tailored for you"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Featured Tour Packages"
            subtitle="Curated experiences for your perfect vacation"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {packagesData.filter(p => p.featured).map((pkg) => (
              <PackageCard key={pkg.slug} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="Glimpses of Uttarakhand" centered />
          <GalleryPreview />
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading title="What Our Guests Say" centered />
          <TestimonialCarousel testimonials={testimonialsData} />
        </div>
      </section>
    </main>
  );
}
