export interface Empty {
    products: Product[];
    total:    number;
}

export interface Product {
    id:            string;
    created_at:    Date;
    updated_at:    Date;
    title:         string;
    description:   string;
    image:         string;
    price:         number;
    salePrice:     number | null;
    category_name: CategoryName;
}

export enum CategoryName {
    TheᲛობილურები = "მობილურები",
}