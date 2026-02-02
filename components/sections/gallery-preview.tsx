import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function GalleryPreview() {
    const images = [
        "/images/uploads/001.jpg",
        "/images/uploads/002.jpeg",
        "/images/uploads/003.jpg",
        "/images/uploads/004.jpg",
        "/images/uploads/005.jpg",
        "/images/uploads/006.jpeg"
    ];

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden h-48 bg-gray-200 relative group cursor-pointer hover:opacity-90 transition-all duration-300 hover:shadow-xl">
                    <Image
                        src={src}
                        alt={`Glimpse of Uttarakhand ${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
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
