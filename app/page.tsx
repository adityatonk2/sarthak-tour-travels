import { Hero } from "@/components/sections/hero";
import { CategoryCarousel } from "@/components/sections/category-carousel";
import { DestinationsCarousel } from "@/components/sections/destinations-carousel";
import { CorporateCabsSection } from "@/components/sections/corporate-cabs-section";
import { CtaSection } from "@/components/sections/cta-section";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { PackageCard } from "@/components/ui/package-card";
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
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
      <Hero
        title={companyData.tagline}
        subtitle="Experience the magic of the Himalayas with our premium tour packages and rental fleet."
        backgroundImage="/final-hero-page.jpg"
      />

      <CategoryCarousel />

      <CorporateCabsSection />

      <Section variant="white">
        <Container>
          <SectionHeading
            title="Welcome to Sarthak Travels"
            subtitle="Your trusted partner for exploring the divine land of Uttarakhand"
          />
          <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-slate-600 leading-relaxed mb-12 md:mb-16">
            {companyData.description}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {companyData.usps.map((usp, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-5 md:p-6 bg-white rounded-2xl border border-slate-200 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-14 w-14 md:h-16 md:w-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <CheckCircle className="h-7 w-7 md:h-8 md:w-8" aria-hidden />
                </div>
                <h3 className="font-semibold text-slate-900 text-sm md:text-base">{usp.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted" id="services">
        <Container>
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive travel solutions tailored for you"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {servicesData.filter((s) => s.featured).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <SectionHeading
            title="Featured Tour Packages"
            subtitle="Curated experiences for your perfect vacation"
          />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packagesData
              .filter((p) => p.featured)
              .map((pkg) => (
                <PackageCard key={pkg.slug} pkg={pkg} />
              ))}
          </div>
        </Container>
      </Section>

      <Section variant="muted">
        <Container>
          <SectionHeading title="Glimpses of Uttarakhand" centered />
          <GalleryPreview />
        </Container>
      </Section>

      <Section variant="white">
        <Container>
          <SectionHeading title="What Our Guests Say" centered />
          <TestimonialCarousel testimonials={testimonialsData} />
        </Container>
      </Section>

      <CtaSection />
    </main>
  );
}
