class ToolsService {
  static load() {
    return new Promise(resolve => {
      const tools = window.localStorage.getItem("tools");
      resolve(tools ? JSON.parse(tools) : []);
    });
  }

  static save(notes) {
    return new Promise(resolve => {
      window.localStorage.setItem("tools", JSON.stringify(notes));
      resolve();
    });
  }
}

export default ToolsService;
