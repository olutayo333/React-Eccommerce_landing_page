export interface TopMenuProps{
    cartCount:number
    searchQuery:string
    setSearchQuery:(arg:string)=>void
}

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
    addToCart:(arg:ProductProps)=>void
}

export interface ProductDetailsProps{
    productDetails:ProductProps | null
    handleCloseProductDetails:()=>void
    addToCart:(arg:ProductProps)=>void
}