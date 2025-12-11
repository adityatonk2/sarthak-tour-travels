import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
    const images = [
        "/images/uploads/glimpse-1.jpeg",
        "/images/uploads/glimpse-2.jpeg",
        "/images/uploads/glimpse-3.jpeg",
        "/images/uploads/glimpse-4.jpeg",
        "/images/uploads/glimpse-5.jpeg",
        "/images/uploads/glimpse-6.jpeg"
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
                <div key={i} className="rounded-lg overflow-hidden h-48 bg-gray-200 relative group cursor-pointer hover:opacity-90 transition-opacity">
                    <img
                        src={src}
                        alt={`Glimpse of Uttarakhand ${i + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            ))}
            <div className="col-span-2 md:col-span-3 flex justify-center mt-6">
                <Button variant="outline" asChild>
                    <Link href="/gallery">
                        View All Photos <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    );
}
