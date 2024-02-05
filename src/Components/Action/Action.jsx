import React,{useState} from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import "./Action.css";

function Action() {

    
  return (
    <div>
      <table className="action-model card">
        <tr class="type-details ">
          <td>
            <button className="type-icon">
              <VisibilityIcon />
            </button>
          </td>
          <td className="type-name">View</td>
        </tr>
        <tr class="type-details  ">
          <td>
            <button className="type-icon">
              <CheckCircleOutlineIcon />
            </button>
          </td>
          <td className="type-name">Deactivate</td>
        </tr>
        <tr class="type-details  ">
          <td>
            <button className="type-icon">
              <DeleteForeverIcon />
            </button>
          </td>
          <td className="type-name">Delete</td>
        </tr>
      </table>
    </div>
  );
}
export default Action;
