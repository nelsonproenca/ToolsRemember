import React from "react";

import Tool from "../components/Tool";

import { store } from "../reducerTools/store";

const ToolsList = () => {
  const tools = store.getState().tools;

  if (!tools) return <></>;

  const listTools = tools.map((tool, index) => (
    <Tool key={index} tool={tool} index={index} />
  ));

  return <>{listTools}</>;
};

export default ToolsList;
