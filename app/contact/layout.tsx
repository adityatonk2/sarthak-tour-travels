import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Sarthak Travels & Holidays. Book your taxi, tour package, or vintage car rental. Call us or message on WhatsApp for instant booking.",
    openGraph: {
        title: "Contact Us | Sarthak Travels & Holidays",
        description: "Get in touch with Sarthak Travels & Holidays. Book your taxi, tour package, or vintage car rental.",
    },
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

