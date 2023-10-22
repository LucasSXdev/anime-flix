import styled from "styled-components";

const StyledFooter = styled.footer`
  color: var(--text-color-dark); /* Corrigindo o nome da variável */
  background-color: var(--background-dark); /* Corrigindo o nome da variável */
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Feito com React e React Router Dom</p>
    </StyledFooter>
  );
}
