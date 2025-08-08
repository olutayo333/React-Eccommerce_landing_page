export interface ProductProps{
    name:string,
    description:string,
    price:string,
    image:any
    id:number
}

export interface MainBodyProps{
    electronicsProducts : ProductProps[]
    kidsProducts:ProductProps[]
    toolsHardwareProducts:ProductProps[]
    beautyProducts:ProductProps[]
    homeLivingProducts:ProductProps[]
    fashionProducts:ProductProps[]
}