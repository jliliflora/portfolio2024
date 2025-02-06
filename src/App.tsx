import styled from "styled-components";
import Main from "./Main";
import Experience from "./Experience";
import { Helmet } from "react-helmet";

const MainWrapper = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <>
      <Helmet>
        <title>2025 SY's PortFolio</title>
      </Helmet>
      <MainWrapper>
        <Main />
      </MainWrapper>
      <Experience />
    </>
  );
}

export default App;
