import { FaTrash } from "react-icons/fa";
import { DropdownMenu } from "./DropdownMenu";
// import {DropdownMenuItem} from './DropdownMenuItem';
import { MenuItem } from "./DropdownMenu.styled";

export const MyApp = () => {
  return (
    <div>
      <DropdownMenu>
        <MenuItem onSelect={() => alert("Delete")}>
          <FaTrash size={16} color="blue" />
          Delete
        </MenuItem>
        <MenuItem onSelect={() => alert("Edit")}>Edit</MenuItem>
      </DropdownMenu>
    </div>
  );
};
