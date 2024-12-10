export interface Product {
  id: number;
  brand_id: number;
  name: string;
  price: number;
  rate: number | null;
  images: string[];
  createdAt: string;
  lastUpdateAt: string;
}
