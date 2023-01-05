import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { Data } from "../../Services/Data"

export const CartContext = createContext();

export function ProductsCartProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [allPrice, setAllPrice] = useState(0);
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  const IncQtyProductInCart = id => {
    const copyProductsInCart = [...productsInCart];
    const product = copyProductsInCart.find(({ _id }) => _id === id);

    product.qty += 1;
    setProductsInCart(copyProductsInCart);
  };

  const addProductCart = async (id, type) => {
    const url_product = `https://api-coldtech.up.railway.app/${type}/${id}`;
    const productInTheCart = productsInCart.find(({ _id }) => _id === id);

    if (productInTheCart) {
      IncQtyProductInCart(productInTheCart._id);
      return;
    }

    const productClicked = await axios.get(url_product)
      .then(res => res.data);

    productClicked.qty = 1;
    setProductsInCart([...productsInCart, productClicked]);
  };

  const DecQtyProductInCart = id => {
    const copyProductsInCart = [...productsInCart];
    const product = copyProductsInCart.find(({ _id }) => _id === id);

    if (product.qty > 1) {
      product.qty -= 1;
      setProductsInCart(copyProductsInCart);
    } else {
      const productsFiltered = copyProductsInCart
        .filter(({ _id }) => _id !== id);

      setProductsInCart(productsFiltered);
    }
  };

  const removeProductCart = id => {
    const productsFiltered = productsInCart.filter(({ _id }) => _id !== id);
    const productClicked = productsInCart.find(({ _id }) => _id === id);

    productClicked.qty = 0;
    setProductsInCart(productsFiltered);
  }

  const formatNumber = number => number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
    minimumFractionDigits: 2
  });

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
      DecQtyProductInCart,
      removeProductCart,
      addProductCart,
      formatNumber,
      RemoveAllProducts,
      totalProductsCart,
      setTotalProductsCart
    }} >
      {children}
    </CartContext.Provider >
  )
}