// url=https://www.figma.com/design/yK9C4lG2WLZTR80QQcl7hW?node-id=3-68

const figma = require("figma");
const instance = figma.selectedInstance;

let children = "";
instance.findLayers((node) => {
  if (
    node.name === "button" && 
    node.type === "INSTANCE" && 
    node.hasCodeConnect()
  ) {
    const { example } = node.executeTemplate();
    if (example[0].type === "CODE") 
      children = example[0].code;
  }
}, {});

export default { 
  example: figma.tsx`${children}`,
  id: "button",
  metadata: { nestable: true }
}