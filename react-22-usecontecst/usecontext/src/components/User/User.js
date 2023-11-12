import React, { useContext } from "react";
import Address from "../Address/Address";
import Company from "../Company/Company";
import { userContext } from "../../App";

export default function User() {
  const user = useContext(userContext);
  return (
    <div>
      <Address address={user.address} />
      <Company company={user.company} />
    </div>
  );
}
