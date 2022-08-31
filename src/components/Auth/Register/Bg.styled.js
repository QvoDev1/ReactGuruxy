import styled from "styled-components";
import { BackBodys } from "../../../resources/images";

const BgImg = styled.div`
  background-image: url(${BackBodys});
  height: 900px;
  background-repeat: none;
  background-size: 100%;
  background-repeat: no-repeat;
  /* height: 100vh;
  background-size: contain; */
`;

export { BgImg };
