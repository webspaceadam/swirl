import { generateStoryElement } from "../../utils";
import Docs from "./swirl-resource-list.mdx";

export default {
  component: "swirl-resource-list",
  parameters: {
    docs: {
      page: Docs,
    },
  },
  title: "Components/SwirlResourceList",
};

const Template = (args) => {
  const element = generateStoryElement("swirl-resource-list", args);

  element.innerHTML = `
    <swirl-resource-list-item
      description="With a description"
      label="This is a resource item"
      media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/433/144/144&quot;></swirl-avatar>"
    ></swirl-resource-list-item>
    <swirl-resource-list-item
      description="With a description"
      label="This is a resource item"
      media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/103/144/144&quot;></swirl-avatar>"
    ></swirl-resource-list-item>
    <swirl-resource-list-item
      description="With a description"
      label="This is a resource item"
      media="<swirl-avatar label=&quot;John Doe&quot; src=&quot;https://picsum.photos/id/1027/144/144&quot;></swirl-avatar>"
    ></swirl-resource-list-item>
  `;

  return element;
};

export const SwirlResourceList = Template.bind({});

SwirlResourceList.args = {
  label: "A resource list",
};
