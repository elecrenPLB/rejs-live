import styled from "styled-components"
import { BackTitle } from "../components/BackTitle"

const StyledButton = styled.button`
  border: none;
  background-color: purple;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
`

function Button() {
  return <StyledButton>Cliquez ici</StyledButton>
}

export function CssInJs() {
  return (
    <div>
      <BackTitle title="CSS in JS" />
      <br />
      <Button />
    </div>
  )
}
