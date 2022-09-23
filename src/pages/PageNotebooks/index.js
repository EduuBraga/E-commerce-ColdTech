import React from "react"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer/index"

import { Nav } from "../../Components/Nav/index"
import { Data } from "../../Services/Data"

import { Container, CardNotebook } from "./styles"

export function PageNotebook() {
  return (
    <>
      <Nav />

      <Container>
        {Data.notebooks.map(notebook =>
          <CardNotebook key={notebook.id}>
            <h4>{notebook.name}</h4>
            <img src={notebook.src} />

            <h4>{notebook.description.msg}</h4>
            <p>A partir de R$ {notebook.valor}</p>
            <div key={notebook.id}>
              <li>{notebook.description.nota1}</li>
              <li>{notebook.description.nota2}</li>
              <li>{notebook.description.nota3}</li>
            </div>
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardNotebook>
        )}
      </Container>
      <Footer/>
    </>
  )
}