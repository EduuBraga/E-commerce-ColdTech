import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { Data } from "../../Services/Data"

export const CartContext = createContext();

export function ProductsCartProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  const IncQtyProductInCart = product => {
    const notQtyProductCart = !product.qty;

    notQtyProductCart ? product.qty = 1 : product.qty = product.qty + 1;
  }

  function removeAProductToCart(id) {
    const copyProductsCart = [...productsInCart]

    const item = copyProductsCart.find(product => product.id === id)

    if (item.qty > 1) {
      item.qty = item.qty - 1
      setProductsInCart(copyProductsCart)
    } else {
      const arrayFiltered = copyProductsCart.filter((product) => product.id !== id)
      setProductsInCart(arrayFiltered)
    }
  }

  const addProductCart = async (id, type) => {
    const url_product = `https://api-coldtech.up.railway.app/${type}/${id}`;
    const productInTheCart = productsInCart.find(({ _id }) => _id === id);

    if (productInTheCart) {
      IncQtyProductInCart(productInTheCart);
      return;
    }

    const productClicked = await axios.get(url_product)
      .then(res => res.data);

    IncQtyProductInCart(productClicked);
    setProductsInCart([...productsInCart, productClicked]);
  }

  function removeProductCart(id) {
    const arrayFiltered = productsInCart.filter((product) => product.id !== id)
    const itemRemoved = productsInCart.find((product) => product.id === id)

    itemRemoved.qty = 1
    setProductsInCart(arrayFiltered)
  }

  function brokenNumber(number) {
    return number.toLocaleString('pt-BR')
  }

  function RemoveAllProducts() {
    const CopyProducts = [...productsInCart]

    CopyProducts.map((product) => product.qty = 1)

    setProductsInCart([CopyProducts])
    setProductsInCart([])
  }

  useEffect(() => {
    console.log(productsInCart)
  }, [productsInCart])

  // useEffect(() => {
  //   let ProductsSaves = JSON.parse(localStorage.getItem('products'))

  //   if (ProductsSaves) {
  //     setProductsInCart(ProductsSaves)
  //   }
  // }, [])

  // useEffect(() => {
  //   // === Salvando produtos na memória ===
  //   localStorage.setItem('products', JSON.stringify(productsInCart))
  // }, [productsInCart])

  // useEffect(() => {
  //   // === Total de produtos no carrinho ===
  //   function getTotalProducts(total, product) {
  //     return total + product.qty
  //   }
  //   const TotalProducts = productsInCart.reduce(getTotalProducts, 0)

  //   setTotalProductsCart(TotalProducts)


  //   // === Total dos preços ===
  //   function getTotalPrice(total, product) {
  //     return total + (product.qty * product.valor)
  //   }
  //   const totalAllPrices = productsInCart.reduce(getTotalPrice, 0).toLocaleString('pt-BR')

  //   setAllPrice(totalAllPrices)
  // }, [productsInCart])

  return (
    <CartContext.Provider value={{
      allPrice,
      setAllPrice,
      productsInCart,
      setProductsInCart,
      IncQtyProductInCart,
      removeAProductToCart,
      removeProductCart,
      addProductCart,
      brokenNumber,
      RemoveAllProducts,
      totalProductsCart,
      setTotalProductsCart
    }} >
      {children}
    </CartContext.Provider >
  )
}