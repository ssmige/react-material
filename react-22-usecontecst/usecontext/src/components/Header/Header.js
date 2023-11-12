import React, { useContext } from "react";
import { userContext } from "../../App";

export default function Header() {
  const data = useContext(userContext);
  console.log(data);
  return <div>Header</div>;
}
// neveikia (undefined) useContex, sis komponentas yra neapskliaustas "useContex.Provider"
