export default function reducer(state, action) {
  if (action.type === "ADD_TOOL") {
    return {
      tools: state.tools.concat(action.tool)
    };
  } else if (action.type === "DELETE_TOOL") {
    return {
      messages: [
        ...state.tools.slice(0, action.index),
        ...state.tools.slice(action.index + 1)
      ]
    };
  } else if (action.type === "SEARCH_TOOL") {
    let newTools = [];

    if (action.searchInTags) {
      newTools = state.tools.filter(tool => {
        return tool.Tags.search(action.criteria) !== -1;
      });
    } else {
      newTools = state.tools.filter(tool => {
        return (
          tool.Tags.search(action.criteria) !== -1 ||
          tool.Name.search(action.criteria) !== -1 ||
          tool.Link.search(action.criteria) !== -1 ||
          tool.Description.search(action.criteria) !== -1
        );
      });
    }

    return {
      tools: newTools
    };
  } else {
    return state;
  }
}
