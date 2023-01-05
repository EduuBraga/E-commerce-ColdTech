import { createContext, useState, useEffect } from "react";
import axios from 'axios';

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
  };

  const formatNumber = number => number.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2
  });

  const RemoveAllProducts = () => {
    const CopyProducts = [...productsInCart];
    CopyProducts.map(({ qty }) => qty = 0);

    setProductsInCart([CopyProducts]);
    setProductsInCart([]);
  }

  useEffect(() => {
    // === Resgatando produtos no carrinho salvos na memória ===
    let productsSaves = JSON.parse(localStorage.getItem('products'));

    productsSaves ? setProductsInCart(productsSaves) : null
  }, []);

  useEffect(() => {
    // === Salvando produtos no carrinho na memória ===
    localStorage.setItem('products', JSON.stringify(productsInCart))

    // === Total de produtos no carrinho ===
    const TotalProducts = productsInCart
      .reduce((total, { qty }) => total + qty, 0);

    setTotalProductsCart(TotalProducts)

    // === Total dos preços ===
    const totalAllPrices = productsInCart
      .reduce((total, {qty, value}) => total + (qty * value), 0)

    const formatTotalPrices = formatNumber(totalAllPrices)
    setAllPrice(formatTotalPrices)
  }, [productsInCart])

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