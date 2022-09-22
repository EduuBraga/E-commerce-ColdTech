import React from "react";
import { Data } from "../../Services/Data";

import { NavShop } from "../../Components/NavShop";
import { Footer } from "../../Components/Footer";
import { Container, CardAccessories } from "./styles";
import { ButtonGlobal } from "../../Components/Button/styles";

export function PageAccessories(){
  return(
    <>
      <NavShop/>

      <Container>
        {Data.acessorios.map(accessory=>
          <CardAccessories key={accessory.id}>
            <h4>{accessory.name}</h4>
            <img src={accessory.src} alt="HeadSet" />
            <h4>{accessory.description.msg}</h4>
            <p>{accessory.valor}</p>

            <div key={accessory.id}>
              <li>{accessory.description.nota1}</li>
              <li>{accessory.description.nota2}</li>
              <li>{accessory.description.nota3}</li>
            </div>
            <ButtonGlobal>Comprar</ButtonGlobal>
          </CardAccessories>
        )}
        
      </Container>

      <Footer/>
    </>
  )
}