export type User = {
  id: string,
  name: string,
  email: string,
  password: string
}

export type UserItemsPurchased = {
  product_name: string,
  quantity: string,
  price: string
}

export type UsersPurchases = {
  user: User,
  itemsPurchased: UserItemsPurchased[]
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