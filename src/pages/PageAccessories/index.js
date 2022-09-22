import React from "react";
import { Data } from "../../Services/Data";

import { NavShop } from "../../Components/NavShop";
import { Footer } from "../../Components/Footer";
import { Container, CardAccessories } from "./styles";

export function PageAccessories(){
  return(
    <>
      <NavShop/>

      <Container>
        {Data.acessorios.map(accessory=>
          <CardAccessories>
            <h4>{}</h4>
          </CardAccessories>
        )}
        
      </Container>

      <Footer/>
    </>
  )
}