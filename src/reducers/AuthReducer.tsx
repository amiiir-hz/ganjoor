import React, { useContext } from "react";
import Cookies from "js-cookie";

export const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      action.id && Cookies.set("token", action.id);
      console.log(action.id);
      return true;
    case "LOGOUT":
      Cookies.remove("token");
      return false;
    default:
      return false;
  }
};
