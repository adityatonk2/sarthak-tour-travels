import { notFound } from "next/navigation";
import packagesData from "@/data/packages.json";
import companyData from "@/data/company.json";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Check, Clock, Phone } from "lucide-react";
import Link from "next/link";
import { Package } from "@/types";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return packagesData.map((pkg) => ({
        slug: pkg.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const pkg = packagesData.find((p) => p.slug === slug);
    if (!pkg) return { title: "Package Not Found" };

    return {
        title: `${pkg.title} - Sarthak Travels`,
        description: pkg.description,
    };
}

export default async function PackagePage({ params }: PageProps) {
    const { slug } = await params;
    const pkg = (packagesData as Package[]).find((p) => p.slug === slug);

    if (!pkg) {
        notFound();
    }

    return (
        <main className="flex-1 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Image Gallery (Placeholder) */}
                    <div className="space-y-4">
                        <div className="aspect-[4/3] bg-slate-200 rounded-xl overflow-hidden flex items-center justify-center text-slate-400 text-lg font-medium">
                            {pkg.title} Image
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[...Array(4)].map((_, i) => (
                                <div key={i} className="aspect-square bg-slate-100 rounded-lg overflow-hidden flex items-center justify-center text-xs text-slate-300">
                                    Thumb {i + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">{pkg.title}</h1>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <div className="flex items-center gap-1">
                                    <Clock className="h-4 w-4" />
                                    <span>{pkg.duration}</span>
                                </div>
                                <div className="font-bold text-lg text-secondary">
                                    {pkg.price}
                                </div>
                            </div>
                        </div>

                        <p className="text-lg leading-relaxed text-muted-foreground">
                            {pkg.description}
                        </p>

                        <div className="flex gap-4">
                            <Button size="lg" asChild className="flex-1 max-w-[200px]">
                                <Link href={`https://wa.me/${companyData.contact.phone}?text=I am interested in ${pkg.title} package`} target="_blank">
                                    Book Now
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" asChild className="flex-1 max-w-[200px]">
                                <Link href={`tel:${companyData.contact.phone}`}>
                                    <Phone className="mr-2 h-4 w-4" /> Call to Book
                                </Link>
                            </Button>
                        </div>

                        <div className="border-t pt-8">
                            <h3 className="text-xl font-bold mb-4">Itinerary</h3>
                            {pkg.itinerary && pkg.itinerary.length > 0 ? (
                                <div className="space-y-6 border-l-2 border-primary/20 ml-3 pl-6 relative">
                                    {pkg.itinerary.map((day) => (
                                        <div key={day.day} className="relative">
                                            <div className="absolute -left-[31px] top-1 h-4 w-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                                            <h4 className="font-bold text-lg mb-1">Day {day.day}: {day.title}</h4>
                                            <p className="text-muted-foreground">{day.details}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-muted-foreground italic">Detailed itinerary available on request.</p>
                            )}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8 border-t pt-8">
                            <div>
                                <h3 className="font-bold mb-4">Inclusions</h3>
                                <ul className="space-y-2">
                                    {pkg.inclusions.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                            <Check className="h-4 w-4 text-green-500 shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-bold mb-4">Exclusions</h3>
                                <ul className="space-y-2">
                                    {pkg.exclusions.map((item, i) => (
                                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                                            <span className="h-4 w-4 flex items-center justify-center text-red-500 font-bold text-xs">✕</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
