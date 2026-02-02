import Link from "next/link";
import { Container } from "@/components/ui/container";
import companyData from "@/data/company.json";
import servicesData from "@/data/services.json";
import { Mail, MapPin, Phone, MessageCircle, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

function getWhatsAppUrl() {
  const phone = companyData.contact.phone.split("|")[0].trim().replace(/\D/g, "");
  return `https://wa.me/${phone}`;
}

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="border-b border-slate-700/80 bg-slate-800/50">
        <Container as="div" className="py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-slate-200 font-medium text-center sm:text-left">
              Book taxis, tours & hotels — 24×7 on WhatsApp
            </p>
            <Button
              size="lg"
              className="w-full sm:w-auto bg-[#22c55e] hover:bg-[#16a34a] text-white rounded-xl shadow-lg"
              asChild
            >
              <Link
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <MessageCircle className="h-5 w-5" aria-hidden />
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </Container>
      </div>

      <Container as="div" className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded-lg"
              aria-label={`${companyData.name} – Home`}
            >
              <img
                src="/images/sarthak-logo.png"
                alt=""
                className="h-20 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-4 max-w-xs">
              {companyData.description}
            </p>
            <div className="flex gap-4">
              <Link
                href={companyData.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href={companyData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 rounded"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Our services
            </h3>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" aria-hidden />
                <span className="text-slate-400">{companyData.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary shrink-0" aria-hidden />
                <a
                  href={`tel:${companyData.contact.phone.split("|")[0].trim()}`}
                  className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded"
                >
                  {companyData.contact.phone.split("|")[0].trim()}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary shrink-0" aria-hidden />
                <a
                  href={`mailto:${companyData.contact.email}`}
                  className="text-slate-400 hover:text-white transition-colors focus-visible:underline rounded"
                >
                  {companyData.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/80 text-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
