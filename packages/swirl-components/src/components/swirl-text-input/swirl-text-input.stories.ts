import { generateStoryElement } from "../../utils";
import Docs from "./swirl-text-input.mdx";

export default {
  component: "swirl-text-input",
  parameters: {
    docs: {
      page: Docs,
    },
  },
  title: "Components/SwirlTextInput",
};

const Template = (args) => {
  const formControl = document.createElement("swirl-form-control");
  const element = generateStoryElement("swirl-text-input", args);

  formControl.setAttribute("label", "Input");
  formControl.append("\n  ", element, "\n");

  return formControl;
};

export const SwirlTextInput = Template.bind({});

SwirlTextInput.args = {
  value: "Value",
};
