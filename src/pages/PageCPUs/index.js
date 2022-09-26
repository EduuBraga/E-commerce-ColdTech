import React, { useContext } from "react"
import { CartContext } from "../../Provider/StatesProvider"
import { Data } from "../../Services/Data"

import { Nav } from "../../Components/Nav"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer"

import { CardCPU, Container } from "./styles"

export function PageCPUs() {
  const cpus = Data.filter((product) => product.tittle === 'cpus')
  const { AddProductCart} = useContext(CartContext)

  return (
    <>
      <Nav />

      <Container>
        {cpus.map(cpu =>
          <CardCPU key={cpu.id}>
            <h4>{cpu.name}</h4>
            <img src={cpu.src} alt='CPU gamer'/>
            <h4>{cpu.description.msg}</h4>
            <p>A partir de R$ {cpu.valor}</p>

            <div key={cpu.id}>
              <li>{cpu.description.nota1}</li>
              <li>{cpu.description.nota2}</li>
              <li>{cpu.description.nota3}</li>
              <li>{cpu.description.nota4}</li>
            </div>
            <ButtonGlobal onClick={()=>{AddProductCart(cpu.id)}}>Adicionar no Carrinho</ButtonGlobal>
          </CardCPU>
        )}
      </Container>

      <Footer/>
    </>
  )
}