import styled from "styled-components";

const ToggleCntBox = styled.div`
  margin-bottom: 5px;
  text-align: left;
`;
const ToggleCnt = styled.div`
  display: flex;
  justify-content: space-between;
  color: #2e2e2e;
  /* padding: 1em; */
  font-size: 1rem;
  /* border: 1px solid black; */
`;
const WriteButton = styled.button`
  background-color: #202020;
  color: #fff;
  border: none;
  padding: 7px 10px;
  font-size: 14px;
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  font-family: "neue_montreallight";
  border: 0.5px solid #202020;
  box-sizing: border-box;

  &:hover {
    background-color: #fff;
    color: #202020;
  }
`;
const CopyButton = styled.button`
  background-color: white;
  border: none;
  padding: 7px 10px;
  font-size: 14px;
  margin: 0.2rem;
  cursor: pointer;
  border-radius: 20px;
  font-family: "neue_montreallight";
  border: 0.5px solid #fff;
  box-sizing: border-box;

  &:hover {
    background-color: #202020;
    color: #ffffff;
  }
`;

function ToggleMenu() {
  return (
    <div>
      <ToggleCntBox>
        <ToggleCnt style={{ padding: "0.2rem 0rem 1rem 0.5rem" }}>
          <span
            style={{
              fontSize: "1.3rem",
              fontFamily: "neue_montrealmedium",
              padding: "0",
              marginTop: "7px",
            }}
          >
            Email
          </span>
          <WriteButton>Write</WriteButton>
        </ToggleCnt>
        <ToggleCnt
          style={{
            backgroundColor: "#eeeeee",
            borderRadius: "22px",
          }}
        >
          <span style={{ padding: "0", margin: "8px 0 0 12px" }}>
            syon704@gmail.com
          </span>
          <CopyButton>copy</CopyButton>
        </ToggleCnt>
      </ToggleCntBox>
    </div>
  );
}

export default ToggleMenu;
