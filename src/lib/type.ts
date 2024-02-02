export type NavItem = {
    icon: string;
    title: string;
    href: string;
}

export type ImageProps = {
    src: string;
    width: number;
    height: number;
}

export type ResponsiveImageProps = {
    alt: string;
    mobile: ImageProps;
    tablet: ImageProps;
    desktop: ImageProps
}

export type ProductBoxItem = {
    name: string, count: number
}

export type Category = 'headphones' | 'earphones' | 'speakers';

export type Product = {
    id: number;
    new: boolean;
    category: Category;
    name: string;
    description: string;
    price: number;
    cartImage: string;
    productImageData: ResponsiveImageProps;
    previewImageData: ResponsiveImageProps;
    sharedImageData?: ResponsiveImageProps;
    features: string;
    boxItems: ProductBoxItem[],
    galleries: ResponsiveImageProps[]
}

export type CartItem = {
    productId: number;
    name: string;
    cartImage: string;
    price: number;
    quantity: number;
};