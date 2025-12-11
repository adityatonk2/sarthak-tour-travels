export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    slug: string;
    image?: string;
}

export interface ItineraryDay {
    day: number;
    title: string;
    details: string;
}

export interface Package {
    slug: string;
    title: string;
    price: string;
    duration: string;
    image: string;
    description: string;
    itinerary: ItineraryDay[];
    inclusions: string[];
    exclusions: string[];
    featured: boolean;
}

export interface Testimonial {
    id: number;
    name: string;
    location: string;
    quote: string;
    rating: number;
    image?: string;
}

export interface CompanyInfo {
    name: string;
    tagline: string;
    description: string;
    contact: {
        phone: string;
        email: string;
        address: string;
    };
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
    };
    usps: {
        id: number;
        title: string;
        icon: string;
    }[];
}
