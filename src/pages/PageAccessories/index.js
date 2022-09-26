import React, { useContext } from "react"
import { CartContext } from "../../Provider/ProductsCartProvider"
import { Data } from "../../Services/Data"

import { Nav } from "../../Components/Nav"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer"

import { Container, CardAccessories } from "./styles"

export function PageAccessories(){
  const acessories = Data.filter((product) => product.tittle === 'acessorios')
  const { AddProductCart} = useContext(CartContext)

  return(
    <>
      <Nav/>

      <Container>
        {acessories.map(accessory=>
          <CardAccessories key={accessory.id}>
            <h4>{accessory.name}</h4>
            <img src={accessory.src} alt="HeadSet" />
            <h4>{accessory.description.msg}</h4>
            <p>A partir de R$ {accessory.valor}</p>

            <div key={accessory.id}>
              <li>{accessory.description.nota1}</li>
              <li>{accessory.description.nota2}</li>
              <li>{accessory.description.nota3}</li>
            </div>
            <ButtonGlobal onClick={()=>{AddProductCart(accessory.id)}}>Adicionar no Carrinho</ButtonGlobal>
          </CardAccessories>
        )}
        
      </Container>

      <Footer/>
    </>
  )
}