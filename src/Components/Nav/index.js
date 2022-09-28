import React, { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"
import { CartContext } from "../../Provider/ProductsCartProvider"

import profileImgURL from '../../assets/images/icons/profile-white.png'
import exploreImgURL from '../../assets/images/icons/explore-white.png'
import contactImgURL from '../../assets/images/icons/contact-white.png'
import cartImgURL from '../../assets/images/icons/cart-white.png'
import logoImgURL from '../../assets/images/icons/logo.png'

import { ModalCart } from "../ModalCart"

import { Container, NavBar, ContainerLogo, } from "./styles"

export function Nav() {
  const [visibleModal, setVisibleModal] = useState(false)
  const [display, setDisplay] = useState(false)
  const { pathname } = useLocation()

  const {totalProductsCart, setTotalProductsCart, productsCart} = useContext(CartContext)

  useEffect(() => {
    if (pathname.includes('/contact')) {
      document.title = 'ColdTech | Fale Conosco'
      setDisplay(true)
    }
    else if (pathname.includes('/notebooks')) {
      document.title = 'ColdTech | Explorar - Notebooks'
      setDisplay(false)
    }
    else if (pathname.includes('/cpus')) {
      document.title = 'ColdTech | Explorar - CPUs'
      setDisplay(false)
    }
    else if (pathname.includes('/monitores')) {
      document.title = 'ColdTech | Explorar - Monitores'
      setDisplay(false)
    }
    else if (pathname.includes('/accessories')) {
      document.title = 'ColdTech | Explorar - Acessórios'
      setDisplay(false)
    }
    else if (pathname.includes('/explorar')) {
      document.title = 'ColdTech | Explorar'
      setDisplay(false)
    }
    else if (pathname.includes('/checkout')) {
      document.title = 'ColdTech | Checkout'
      setDisplay(false)
    }
    else {
      document.title = 'ColdTech'
      setDisplay(true)
    }
  })

  useEffect(()=>{
    function getTotal(total, product) {
      return total + product.qty  
    }
    const TotalProducts = productsCart.reduce(getTotal, 0)

    setTotalProductsCart(TotalProducts)
  }, [productsCart])

  return (
    <Container >
      <ContainerLogo>
        <Link to='/'><img src={logoImgURL} alt="Logo da cold tech" /><span>ColdTech</span></Link>
      </ContainerLogo>

      <NavBar displayIsOn={display}>
        <div>
          <Link to='/explorar'><img src={exploreImgURL} alt="Shop" />Explorar</Link>
        </div>
        <div>
          <Link to='/contact'><img src={contactImgURL} alt="Contato" />Fale Conosco</Link>
        </div>
        <div>
          <img src={profileImgURL} alt="Search" />
          <p><span>Entrar</span> ou <br />se <span>Cadastrar</span></p>
        </div>

        <div onClick={() => { setVisibleModal(true) }}>
          <img src={cartImgURL} alt="Search" />
          <span>{totalProductsCart}</span>
        </div>
      </NavBar>

      {visibleModal && <ModalCart setVisibleModal={setVisibleModal} />}
    </Container>
  )
}