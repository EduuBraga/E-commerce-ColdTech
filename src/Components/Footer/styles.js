import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  background-color: #262626;
  padding:0px 15px ;
  margin-top: 100px;
  color: white;

  & img{
    width: 50px;
  }

  a{
    display: block;
    font-size: 16px;
    padding-bottom: 15px;
    cursor: pointer;
    text-decoration: none;
    color: #909090;
    transition: all 0.2s;

    &:hover, &:focus,&:active{
      color:  var(--color-secondary);
    }
  }
`

export const ContainerCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 490px){
    gap:10px;
    flex-direction: column;
  }
`

export const CardColdTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px;
  width: 250px;
  height: 200px;

  @media screen and (max-width: 490px){
    align-items: center;
    width: 90vw;
  }

  & div{
    display: flex;
    align-items: flex-end;
    padding-bottom: 12px;

    h4{
      color: var(--color-secondary);
      padding-bottom: 8px;
    }
  }
`

export const CardLinks = styled.div`
  width: 250px;
  height: 200px;
  padding: 5px;

  @media screen and (max-width: 490px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
  }

  h4{
    font-size: 18px;
    padding: 20px 0px;
  }
`

export const Media = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  & img{
    width: 27px;
    cursor: pointer;
  }
`

export const Copyright = styled.p`
  text-align: center;
  color: var(--text-secondary);
  margin-bottom: 5px;
`