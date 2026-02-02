import { SectionHeading } from "@/components/ui/section-heading";
import { Container } from "@/components/ui/container";
import companyData from "@/data/company.json";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about Sarthak Travels, our mission, vision, and team. Established travel experts serving Uttarakhand with reliable taxi services, tour packages, and vintage car rentals.",
  openGraph: {
    title: "About Us | Sarthak Travels & Holidays",
  description: "Learn more about Sarthak Travels, our mission, vision, and team.",
  },
};

export default function AboutPage() {
  return (
    <main className="flex-1 py-12 md:py-20">
      <Container className="py-12 md:py-16">
        <SectionHeading title="About Sarthak Travels" subtitle="Our Journey & Mission" />

        <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900">Explore Uttarakhand With Trusted Experts</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">{companyData.description}</p>
            <p className="text-muted-foreground leading-relaxed">
              Established with a passion for tourism and hospitality, we have been serving travelers from across the
              globe, ensuring their journey through the celestial lands of Uttarakhand is nothing short of magical. From
              the holy Char Dham Yatra to adventurous trekking, and from luxury vintage car rides to comfortable daily
              commutes, we handle it all with professionalism and care.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {companyData.usps.map((usp, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span className="font-medium">{usp.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative h-[420px] lg:h-[480px] rounded-2xl overflow-hidden bg-slate-50 border shadow-lg group">
            <Image
              src="/images/uploads/about-section.png"
              alt="Sarthak Tour & Travels - Your Journey, Our Commitment"
              fill
              className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="p-8 bg-slate-50 rounded-xl border">
            <h3 className="text-xl font-bold mb-4 text-primary">Our Mission</h3>
            <p className="text-muted-foreground">
              To provide safe, reliable, and memorable travel experiences that connect people with the natural beauty
              and spiritual heritage of Uttarakhand, while maintaining the highest standards of service and
              sustainability.
            </p>
          </div>
          <div className="p-8 bg-slate-50 rounded-xl border">
            <h3 className="text-xl font-bold mb-4 text-primary">Our Vision</h3>
            <p className="text-muted-foreground">
              To be the most preferred and trusted travel partner in North India, known for our integrity,
              customer-centric approach, and innovative travel solutions including our exclusive vintage car fleet.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
