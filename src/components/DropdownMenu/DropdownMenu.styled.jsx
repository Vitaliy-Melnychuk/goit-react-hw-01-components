import styled from "@emotion/styled";
import {
  MenuButton as ReachMenuButton,
  MenuItem as ReachMenuItem,
} from "@reach/menu-button";

export const MenuButton = styled(ReachMenuButton)`
  background-color: tomato;

  &[aria-expanded="true"] {
    background-color: blue;
  }
`;

export const MenuItem = styled(ReachMenuItem)`
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-gap: 5px;
  align-items: center;

  &[data-selected] {
    background-color: orange;
  }
`;
