export interface Service {
    id: string;
    icon: string;
    title: string;
    description: string;
    price: string;
}

export interface Testimonial {
    id: string;
    quote: string;
    name: string;
    image: string;
    rating: number;
}

export interface GalleryItem {
    id: string;
    image: string;
    alt: string;
}

export interface SocialLink {
    id: string;
    platform: string;
    icon: string;
    url: string;
}
