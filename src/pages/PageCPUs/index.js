import React from "react"
import { Data } from "../../Services/Data"

import { Footer } from "../../Components/Footer"
import { Nav } from "../../Components/Nav"
import { CardCPU, Container } from "./styles"
import { ButtonGlobal } from "../../Components/Button/styles"

export function PageCPUs() {
  return (
    <>
      <Nav />

      <Container>
        {Data.cpus.map(cpu =>
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
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardCPU>
        )}
      </Container>

      <Footer/>
    </>
  )
}