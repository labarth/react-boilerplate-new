import styled from 'styled-components';

export const StyledPage = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 50px 1fr 60px;
  background-color: #f3f3f3;
  height: 100vh;
  width: 100%;
  grid-template-areas: 
    "header"
    "main"
    "footer";
`;

export const StyledHeader = styled.header`
  grid-area: header;
`;

export const StyledContent = styled.main`
  grid-area: main;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: auto;
`;

export const StyledFooter = styled.footer`
  grid-area: footer;
  display: flex;
  align-items: center;
`;

export const StyledSection = styled.section`
  overflow: auto;
`;