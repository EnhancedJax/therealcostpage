import styled from "styled-components";

export const BrowserContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: whitesmoke;
  height: 100%;
  position: relative;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.color === "red"
      ? "#EE5E58"
      : props.color === "green"
      ? "#54C840"
      : "#F5BB2E"};
  margin: 0 4px;
`;

export const DotRow = styled.div`
  display: flex;
  margin: 8px;
`;

export const BrowserRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: 12px;
  gap: 8px;
  border-bottom: 1px solid #ccc;
`;

export const SearchBar = styled.div`
  margin: 8px 60px 8px 8px;
  padding: 4px 10px;
  background-color: #efeded;
  border-radius: 1000px;
  width: 100%;
`;
