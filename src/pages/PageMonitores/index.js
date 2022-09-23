import React from "react"
import { Data } from "../../Services/Data"

import { Footer } from "../../Components/Footer"
import { Nav } from "../../Components/Nav"
import { CardMonitor, Container } from "./styles"
import { ButtonGlobal } from "../../Components/Button/styles"

export function PageMonitores() {
  return (
    <>
      <Nav />

      <Container>
        {Data.monitores.map(monitor =>
          <CardMonitor key={monitor.id}>
            <h4>{monitor.name}</h4>
            <img src={monitor.src} alt='Monitor gamer'/>
            <h4>{monitor.description.msg}</h4>
            <p>A partir de R$ {monitor.valor}</p>

            <div key={monitor.id}>
              <li>{monitor.description.nota1}</li>
              <li>{monitor.description.nota2}</li>
              <li>{monitor.description.nota3}</li>
              <li>{monitor.description.nota4}</li>
            </div>
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardMonitor>
        )}
      </Container>

      <Footer/>
    </>
  )
}