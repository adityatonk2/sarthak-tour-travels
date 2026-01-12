import { Hero } from "@/components/sections/hero";
import { CategoryCarousel } from "@/components/sections/category-carousel";
import { DestinationsCarousel } from "@/components/sections/destinations-carousel";
import { CorporateCabsSection } from "@/components/sections/corporate-cabs-section";
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
      <section className="py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Welcome to Sarthak Travels"
            subtitle="Your trusted partner for exploring the divine land of Uttarakhand"
          />
          <p className="text-center max-w-4xl mx-auto text-lg md:text-xl text-slate-600 leading-relaxed font-medium mb-16">
            {companyData.description}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {companyData.usps.map((usp, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-100">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center text-primary mb-4 shadow-sm">
                  <CheckCircle className="h-8 w-8" />
                </div>
                <h3 className="font-bold text-slate-900">{usp.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white" id="services">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive travel solutions tailored for you"
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Cab Services Section */}
      <CorporateCabsSection />

      {/* Packages Section */}
      <section className="py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50">
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
