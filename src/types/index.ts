export type Mountain = {
    id: number;
    name: string;
    image: string;
    description: string;
    price: number;
  };

  export type CartItem = Pick<Mountain, "id" | "name" | "price"> & {
    quantity: number;
  }

  export type MountainId = Mountain["id"];