export type Product = {
  product_name: string;
  average_rating: number;
  total_ratings: number;
  final_price: number;
  discountedPrice: number;
  product_id: string;
  product_images: string[];
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
