import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  gap: 20px;
  border-top: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  padding:0px 15px ;
  margin-bottom: 10px;
  margin-top: 100px;

  & img{
    width: 50px;
  }

  a{
    display: block;
    font-size: 16px;
    padding-bottom: 15px;
    cursor: pointer;
    text-decoration: none;
    color: var(--text-secondary);
    transition: all 0.2s;

    &:hover, &:focus{
      color: var(--color-secondary);
    }
    &:active{
      color: var(--color-secondary);
    }
  }
`

export const CardColdTech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  height: 200px;
  background-color: #f3f4f6;

  & div{
    display: flex;
    align-items: flex-end;
    padding-bottom: 12px;

    h4{
      color: var(--color-secondary);
      padding-bottom: 8px;
    }
  }
  
  p{
    color: var(--text-secondary);
    font: 10px;
    padding-bottom: 15px;
  }
`

export const CardLinks = styled.div`
  width: 250px;
  height: 200px;
  padding: 5px;

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