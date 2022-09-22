import React from "react"
import notebookURL from '../../assets/images/NotebookPage.png'
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer/index"

import { NavShop } from "../../Components/NavShop/index"
import { Data } from "../../Services/Data"

import { Container, CardNotebook } from "./styles"

export function PageNotebook() {
  return (
    <>
      <NavShop />

      <Container>
        {Data.notebooks.map(notebook =>
          <CardNotebook key={notebook.id}>
            <h4>{notebook.name}</h4>
            <img src={notebookURL} />

            <h4>Perfeito para você jogar</h4>
            <p>A partir de {notebook.valor}</p>
            <div key={notebook.id}>
              <li>{notebook.description.nota1}</li>
              <li>{notebook.description.nota2}</li>
            </div>
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardNotebook>
        )}
      </Container>
      <Footer/>
    </>
  )
}