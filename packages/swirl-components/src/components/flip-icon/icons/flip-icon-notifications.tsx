// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-notifications",
})
export class FlipIconNotifications {
  @Prop() size: FlipIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("flip-icon", `flip-icon--size-${this.size}`);

    return (
      <svg
        class={className}
        fill="none"
        height={this.size}
        part="icon"
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
        width={this.size}
        xmlns="http://www.w3.org/2000/svg"
      >
        {this.size === 16 && (
          <Fragment>
            <path
              d="M8.00083 14.5C8.73416 14.5 9.33416 13.9 9.33416 13.1667H6.66749C6.66749 13.9 7.26083 14.5 8.00083 14.5ZM12.0008 10.5V7.16667C12.0008 5.12 10.9075 3.40667 9.00083 2.95333V2.5C9.00083 1.94667 8.55416 1.5 8.00083 1.5C7.44749 1.5 7.00083 1.94667 7.00083 2.5V2.95333C5.08749 3.40667 4.00083 5.11333 4.00083 7.16667V10.5L3.14083 11.36C2.72083 11.78 3.01416 12.5 3.60749 12.5H12.3875C12.9808 12.5 13.2808 11.78 12.8608 11.36L12.0008 10.5Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12.0012 21.75C13.1012 21.75 14.0012 20.85 14.0012 19.75H10.0012C10.0012 20.85 10.8912 21.75 12.0012 21.75ZM18.0012 15.75V10.75C18.0012 7.68 16.3612 5.11 13.5012 4.43V3.75C13.5012 2.92 12.8312 2.25 12.0012 2.25C11.1712 2.25 10.5012 2.92 10.5012 3.75V4.43C7.63124 5.11 6.00124 7.67 6.00124 10.75V15.75L4.71124 17.04C4.08124 17.67 4.52124 18.75 5.41124 18.75H18.5812C19.4712 18.75 19.9212 17.67 19.2912 17.04L18.0012 15.75Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14.0014 25.375C15.2848 25.375 16.3348 24.325 16.3348 23.0417H11.6681C11.6681 24.325 12.7064 25.375 14.0014 25.375ZM21.0014 18.375V12.5417C21.0014 8.96 19.0881 5.96167 15.7514 5.16833V4.375C15.7514 3.40667 14.9698 2.625 14.0014 2.625C13.0331 2.625 12.2514 3.40667 12.2514 4.375V5.16833C8.9031 5.96167 7.00143 8.94833 7.00143 12.5417V18.375L5.49643 19.88C4.76143 20.615 5.27477 21.875 6.3131 21.875H21.6781C22.7164 21.875 23.2414 20.615 22.5064 19.88L21.0014 18.375Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
