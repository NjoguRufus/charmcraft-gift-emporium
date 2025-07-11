export interface Product {
  id: string;
  title: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  stock: number;
  isCustomizable: boolean;
  occasion?: string;
  rating?: number;
  reviews?: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
  customizations?: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  address?: Address;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  shippingAddress: Address;
  createdAt: Date;
  paymentStatus: 'pending' | 'paid' | 'failed';
}