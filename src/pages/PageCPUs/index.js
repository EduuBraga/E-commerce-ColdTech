import React from "react"
import { Data } from "../../Services/Data"

import { Footer } from "../../Components/Footer"
import { NavShop } from "../../Components/NavShop"
import { CardCPU, Container } from "./styles"

import CPUimgURL from '../../assets/images/CPUOffers.png'
import { ButtonGlobal } from "../../Components/Button/styles"

export function PageCPUs() {
  return (
    <>
      <NavShop />

      <Container>
        {Data.cpus.map(cpu =>
          <CardCPU key={cpu.id}>
            <h4>{cpu.name}</h4>
            <img src={CPUimgURL}/>
            <h4>O melhor no quesito desempenho</h4>
            <p>{cpu.valor}</p>

            <div key={cpu.id}>
              <li>{cpu.description.nota1}</li>
              <li>{cpu.description.nota2}</li>
              <li>{cpu.description.nota3}</li>
              <li>{cpu.description.nota4}</li>
            </div>
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardCPU>
        )}
      </Container>

      <Footer/>
    </>
  )
}