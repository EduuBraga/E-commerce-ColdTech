import styled, {keyframes} from "styled-components"

const AnimationBlur = keyframes`
  0%{
    opacity: 0.1;
  }100%{
    opacity: 1;
  }
`

export const Container = styled.section`
  border: 1px solid #404040;
  margin-left: 10px;
  margin-right: 10px;
  width: 91%;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #404040;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #777777;

    :hover{
      background: #686868;
    }
  }
`

export const CardProduct = styled.div`
  animation: ${AnimationBlur} 0.5s ease;
  padding: 12px 16px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  border-bottom: 1px solid #404040;
  height: 110px;
`

export const ContentProduct = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  img{
    width:90px;
    padding: 4px;
    filter: drop-shadow(#404040 0px 0px 8px);
  }
`

export const ContainerDescriptionProduct = styled.div`
  text-align: left;

  h4{
    font-size: 15px;
    padding-bottom: 5px;
  }
  p{
    padding-bottom: 5px;
  }
`

export const ContainerIncAndDec = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  border: 1px solid #404040;
  width: 70px;

  button{
    cursor: pointer;
    color: var(--color-secondary);
    font-weight: 600;
    font-size: 18px;
    border: none;
    background-color: #262626;
    padding: 0px 4px;
  }
`

export const ContainerDeleteItem = styled.div`
  align-self: center;

  img{
    width: 20px;
    cursor: pointer;

    &:active{
      transform:scale(0.90);
    }
  }
`