import styled from "styled-components";
import Main from "./Main";
import Experience from "./Experience";

const MainWrapper = styled.div`
  overflow: hidden;
`;

function App() {
  return (
    <>
      <MainWrapper>
        <Main />
      </MainWrapper>
      <Experience />
    </>
  );
}

export default App;
