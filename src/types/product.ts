// Enum cho Product
export enum ProductType {
    PRICE = 'PIECE',
    SET = 'SET'
}

// Enum cho thuộc tính
export enum Attribute {
    STRENGTH = 'STRENGTH',
    INTELLIGENCE = 'INTELLIGENCE',
    AGILITY = 'AGILITY'
}

// Enum cho action
export enum ActionType {
    PRODUCT = 'PRODUCT'
}

// Interface cho character
export interface Character {
    id: number;
    name: string;
    attribute: Attribute;
}

// Interface cho hình ảnh product
export interface Image {
    id: number;
    actionId: number;
    actionType: ActionType;
    filePath: string;
    primary: boolean;
}

// Interface cho từng product
export interface ProductItem {
    id: number;
    name: string;
    price: number;
    character: Character;
    productType: ProductType;
    image: Image;
}

// Interface phân trang list product
export interface ListProduct {
    page: number;
    size: number;
    total: number;
    items: ProductItem[];
    hasNext: boolean;
    hasPrevious: boolean;
}