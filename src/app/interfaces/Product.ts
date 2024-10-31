export interface Product {
    id?: number;
    name: string;
    category: string;
    price: number;
    currency: string;
    image: { src: string, alt: string};
    bestseller: boolean;
    featured: boolean;
    description: string;
    people_also_buy: Product[];
}