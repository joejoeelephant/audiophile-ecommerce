import { ResponsiveImageProps } from "@/lib/type"
export type ProductCategoryItem= {
    id: number; 
    new: boolean;
    name: string;
    category: string;
    previewImageData: ResponsiveImageProps; 
    description: string
}