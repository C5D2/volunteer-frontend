import Article from "@components/ui/Aticle/Aticle";
import styled from 'styled-components'
export const Aticle = styled(Article)`
width: 100%;
`

export const ActiveBox = styled.ul`
  display: flex;
  width: 100%;
  height: 218px;
  margin-top: 24px;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  border-radius: 16px;
`