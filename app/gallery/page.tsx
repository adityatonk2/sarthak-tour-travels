import { SectionHeading } from "@/components/ui/section-heading";
import galleryData from "@/data/gallery.json";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Gallery",
    description: "Glimpses of beautiful locations in Uttarakhand and our diverse fleet. Explore stunning destinations like Mussoorie, Nainital, Char Dham, and more.",
    openGraph: {
        title: "Gallery | Sarthak Travels & Holidays",
        description: "Glimpses of beautiful locations in Uttarakhand and our diverse fleet.",
    },
};

export default function GalleryPage() {
    return (
        <main className="flex-1 py-12 md:py-20">
            <div className="container mx-auto px-4 md:px-6">
                <SectionHeading title="Our Gallery" subtitle="Memories from the mountains and our happy travelers" centered />

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {galleryData.map((item) => (
                        <div key={item.id} className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="bg-white/90 text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                                    View
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-white text-sm font-medium">{item.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
