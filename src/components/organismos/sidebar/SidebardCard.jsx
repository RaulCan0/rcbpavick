import styled from "styled-components";
import {Btnsave } from "../../../index";
export function SidebarCard() {
  
  return (
    <Container>
      <div className="cardContent">
        <div className="contentBtn">
          <Btnsave titulo="Cerrar sesión" bgcolor="#d4fadd"  />
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  padding: 1rem;
  text-align: center;
  position: relative;

  .icon {
    position: absolute;
    font-size: 3rem;
    border-radius: 50%;
    top: -8px;
    right: 50%;
    transform: translate(50%);
    z-index: 100;
  }
  .cardContent {
    position: relative;
    padding: 1rem;
    background: ${(props) => props.theme.fg};
    border-radius: 10px;
    overflow: hidden;

    .contentBtn {
      position:relative;
      margin-left:-8px;
    }
  }
`;