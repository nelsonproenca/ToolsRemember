import React from "react";

import Tool from "../components/Tool";

const ToolsList = props => {
  const tools = props.tools;

  if (!tools) return <></>;

  const listTools = tools.map((tool, index) => (
    <Tool key={index} tool={tool} index={index} />
  ));

  return <>{listTools}</>;
};

export default ToolsList;
