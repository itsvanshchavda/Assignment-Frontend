

export type User = {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string | number;
}

export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: [];
    images: []; 
}