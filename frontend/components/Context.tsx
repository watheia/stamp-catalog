import { AppContext } from "@/interfaces";
import React from "react";

const Context = React.createContext<AppContext>({
  user: null,
});

export default Context;
