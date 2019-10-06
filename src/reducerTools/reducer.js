import ToolsService from "../services/ToolsService";

export default function reducer(state, action) {
  if (action.type === "ADD_TOOL") {
    let newTools = state.tools.concat(action.tool);

    ToolsService.save(newTools);

    return {
      tools: newTools
    };
  } else if (action.type === "DELETE_TOOL") {
    let newTools = [
      ...state.tools.slice(0, action.index),
      ...state.tools.slice(action.index + 1)
    ];

    ToolsService.save(newTools);

    return {
      tools: newTools
    };
  } else if (action.type === "SEARCH_TOOL") {
    let newTools = [];

    ToolsService.load().then(tools => {
      if (action.searchInTags) {
        newTools = tools.filter(tool => {
          return tool.Tags.search(action.criteria) !== -1;
        });
      } else if (!action.searchInTags && action.criteria !== "") {
        newTools = tools.filter(tool => {
          return (
            tool.Tags.search(action.criteria) !== -1 ||
            tool.Name.search(action.criteria) !== -1 ||
            tool.Link.search(action.criteria) !== -1 ||
            tool.Description.search(action.criteria) !== -1
          );
        });
      } else if (action.criteria === "") {
        newTools = tools;
      }
    });

    return {
      tools: newTools
    };
  } else {
    return state;
  }
}
