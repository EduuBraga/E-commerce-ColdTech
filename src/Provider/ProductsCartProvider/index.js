import { createContext, useState, useEffect } from "react"
import { Data } from "../../Services/Data"

export const CartContext = createContext()

export function ProductsCartProvider({ children }) {
  const [productsCart, setProductsCart] = useState([])
  const [allPrice, setAllPrice] = useState(0)
  const [totalProductsCart, setTotalProductsCart] = useState(0)

  function AddAProductToCart(id) {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find(product => product.id === id)

    if (!item.qty) {
      item.qty = 1
    } else {
      item.qty = item.qty + 1
    }

    setProductsCart(copyProductsCart)
  }

  function removeAProductToCart(id) {
    const copyProductsCart = [...productsCart]

    const item = copyProductsCart.find(product => product.id === id)

    if (item.qty > 1) {
      item.qty = item.qty - 1
      setProductsCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter((product) => product.id !== id)
      setProductsCart(arrayFiltered)
    }
  }

  function AddProductCart(id) {
    const Product = Data.find((product) => product.id === id)
    const ProductInCart = productsCart.find(product => product.id === id)

    if (ProductInCart) {
      AddAProductToCart(ProductInCart.id)
    } else {
      setProductsCart([...productsCart, Product])
    }
  }

  function removeProductCart(id) {
    const arrayFiltered = productsCart.filter((product) => product.id !== id)
    const itemRemoved = productsCart.find((product) => product.id === id)

    itemRemoved.qty = 1
    setProductsCart(arrayFiltered)
  }

  function brokenNumber(number) {
    return number.toLocaleString('pt-BR')
  }

  function RemoveAllProducts() {
    setProductsCart([])
  }

  useEffect(() => {
    let ProductsSaves = JSON.parse(localStorage.getItem('products'))

    if (ProductsSaves) {
      setProductsCart(ProductsSaves)
    }
  }, [])

  useEffect(()=>{
    console.log(allPrice)
    // === Salvando produtos na memória ===
    localStorage.setItem('products', JSON.stringify(productsCart))
  }, [productsCart])

  useEffect(() => {
    // === Total de produtos no carrinho ===
    function getTotalProducts(total, product) {
      return total + product.qty
    }
    const TotalProducts = productsCart.reduce(getTotalProducts, 0)

    setTotalProductsCart(TotalProducts)


    // === Total dos preços ===
    function getTotalPrice(total, product) {
      return total + (product.qty * product.valor)
    }
    const totalAllPrices = productsCart.reduce(getTotalPrice, 0).toLocaleString('pt-BR')

    setAllPrice(totalAllPrices)
  }, [productsCart])

  return (
    <CartContext.Provider value={{
      allPrice,
      setAllPrice,
      productsCart,
      setProductsCart,
      AddAProductToCart,
      removeAProductToCart,
      removeProductCart,
      AddProductCart,
      brokenNumber,
      RemoveAllProducts,
      totalProductsCart,
      setTotalProductsCart
    }} >
      {children}
    </CartContext.Provider >
  )
}