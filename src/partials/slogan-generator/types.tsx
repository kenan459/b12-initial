export type TIndustry = { id: Number; name: string }
export type TFormInfo = {
  customerInput?: string
  product_name?: string
  product_description?: string
  industry: TIndustry | null
  location: string
  city: string
  region: string
  country: string
  firstName: string
  lastName: string
  email: string
}
