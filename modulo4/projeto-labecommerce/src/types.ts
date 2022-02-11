export type User = {
  id: string,
  name: string,
  email: string,
  password: string
}

export type Product = {
  id: string,
  name: string,
  price: number,
  image_url?: string
}

export type Purchase = {
  id: string,
  user_id: string,
  total_price: number
}

export type ItemPurchased = {
  purchase_id: string,
  product_id: string,
  quantity: string
}