
export interface responseBaseRowProducts {
    count: number;
    next: string;
    previous: string;
    results: any[]
}

export interface ProductInterface {
    id: number;
    order: string;
    name: string;
    priceRetail: string;
    priceHigher: string;
    date: string;
    count: string;
    image: string;
    isStuffed: string;
    isNew: string;
    isDiscount: string;
    categorySlug: string;
    category: string;
    isSpent: string;
    nameBrand: string;
    detail: string;
    availableShirt: string;
}