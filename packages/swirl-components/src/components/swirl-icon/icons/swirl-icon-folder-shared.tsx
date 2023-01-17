// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-folder-shared",
})
export class SwirlIconFolderShared {
  @Prop() size: SwirlIconSize = 24;

  render() {
    const viewBoxSize = this.size === 20 ? 24 : this.size;

    const className = classnames("swirl-icon", `swirl-icon--size-${this.size}`);

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
              d="M13.3333 3.99996H8.00001L7.06001 3.05996C6.80668 2.80663 6.46668 2.66663 6.11334 2.66663H2.66668C1.93334 2.66663 1.34001 3.26663 1.34001 3.99996L1.33334 12C1.33334 12.7333 1.93334 13.3333 2.66668 13.3333H13.3333C14.0667 13.3333 14.6667 12.7333 14.6667 12V5.33329C14.6667 4.59996 14.0667 3.99996 13.3333 3.99996ZM10 5.99996C10.7333 5.99996 11.3333 6.59996 11.3333 7.33329C11.3333 8.06663 10.7333 8.66663 10 8.66663C9.26668 8.66663 8.66668 8.06663 8.66668 7.33329C8.66668 6.59996 9.26668 5.99996 10 5.99996ZM12.6667 11.3333H7.33334V10.6666C7.33334 9.77996 9.11334 9.33329 10 9.33329C10.8867 9.33329 12.6667 9.77996 12.6667 10.6666V11.3333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M20 6H12L10.59 4.59C10.21 4.21 9.7 4 9.17 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V8C22 6.9 21.1 6 20 6ZM15 9C16.1 9 17 9.9 17 11C17 12.1 16.1 13 15 13C13.9 13 13 12.1 13 11C13 9.9 13.9 9 15 9ZM19 17H11V16C11 14.67 13.67 14 15 14C16.33 14 19 14.67 19 16V17Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M23.3333 6.99996H14L12.355 5.35496C11.9117 4.91163 11.3167 4.66663 10.6983 4.66663H4.66668C3.38334 4.66663 2.34501 5.71663 2.34501 6.99996L2.33334 21C2.33334 22.2833 3.38334 23.3333 4.66668 23.3333H23.3333C24.6167 23.3333 25.6667 22.2833 25.6667 21V9.33329C25.6667 8.04996 24.6167 6.99996 23.3333 6.99996ZM17.5 10.5C18.7833 10.5 19.8333 11.55 19.8333 12.8333C19.8333 14.1166 18.7833 15.1666 17.5 15.1666C16.2167 15.1666 15.1667 14.1166 15.1667 12.8333C15.1667 11.55 16.2167 10.5 17.5 10.5ZM22.1667 19.8333H12.8333V18.6666C12.8333 17.115 15.9483 16.3333 17.5 16.3333C19.0517 16.3333 22.1667 17.115 22.1667 18.6666V19.8333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}