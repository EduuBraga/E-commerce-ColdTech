import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding-left:10px ;
  padding-right: 10px;
`

export const WrapperPage = styled.section`
  position: relative;
`

export const SectionOne = styled.div`
  margin: 0 auto;
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;

  @media screen and (max-width: 490px){
    flex-direction: column-reverse;
  }

  div{
    margin-right:10px ;

    img{
      width: 500px;

      @media screen and (max-width: 768px){
        width: 250px;
      }

      @media screen and (max-width: 425px){
        /* width: 20px; */
      }
    }
  }
`

export const Description = styled.div`
  margin-left:10px ;
  
  strong{
    font-size: 18px;
  }

  h1{
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 15px;
  }

  p{
    margin-bottom: 15px;
  }
`

