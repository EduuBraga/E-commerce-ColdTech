import React, { useContext } from "react"
import { CartContext } from "../../Provider/StatesProvider"
import { Data } from "../../Services/Data"

import { Nav } from "../../Components/Nav/index"
import { ButtonGlobal } from "../../Components/Button/styles"
import { Footer } from "../../Components/Footer/index"

import { Container, CardNotebook } from "./styles"

export function PageNotebook() {
  const Notebooks = Data.filter((product) => product.tittle === 'notebooks')
  const { AddProductCart} = useContext(CartContext)

  return (
    <>
      <Nav />

      <Container>
        {Notebooks.map((notebook) =>
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
            <ButtonGlobal onClick={() => { AddProductCart(notebook.id) }}>Comprar</ButtonGlobal>
          </CardNotebook>
        )}
      </Container>
      <Footer />
    </>
  )
}