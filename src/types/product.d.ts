export interface Product {
  id: number
  name: string
  code?: string
  price: {
    old_price: number
    current_price: number
  }
  image: {
    url: string
  }
  material: number
}

export interface Material {
  id: number
  name: string
}
