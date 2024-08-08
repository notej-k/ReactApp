export interface OrderItem {
    id?: number;
    "product-id": string;
    quantity: string;
    "unit-price": string;
    total: string;
    description?: string;
  }
  
  export interface Order {
    id: string;
    "customer-id": string;
    items: OrderItem[];
    total: string;
  }