// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { SwirlIconSize } from "../swirl-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../swirl-icon.css",
  tag: "swirl-icon-delete",
})
export class SwirlIconDelete {
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
              d="M5.66668 2.66667H4.16668C3.70644 2.66667 3.33334 3.03976 3.33334 3.5C3.33334 3.96024 3.70644 4.33333 4.16668 4.33333H11.8333C12.2936 4.33333 12.6667 3.96024 12.6667 3.5C12.6667 3.03976 12.2936 2.66667 11.8333 2.66667H10.3333L9.86194 2.19526C9.73691 2.07024 9.56734 2 9.39053 2H6.60949C6.43267 2 6.26311 2.07024 6.13808 2.19526L5.66668 2.66667Z"
              fill="currentColor"
            />
            <path
              d="M5.33334 5.33333H10.6667C11.4031 5.33333 12 5.93029 12 6.66667V12.6667C12 13.403 11.4031 14 10.6667 14H5.33334C4.59696 14 4.00001 13.403 4.00001 12.6667V6.66667C4.00001 5.93029 4.59696 5.33333 5.33334 5.33333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M8.5 4H6.25C5.55964 4 5 4.55964 5 5.25C5 5.94036 5.55964 6.5 6.25 6.5H17.75C18.4404 6.5 19 5.94036 19 5.25C19 4.55964 18.4404 4 17.75 4H15.5L14.7929 3.29289C14.6054 3.10536 14.351 3 14.0858 3H9.91421C9.649 3 9.39464 3.10536 9.20711 3.29289L8.5 4Z"
              fill="currentColor"
            />
            <path
              d="M8 8H16C17.1046 8 18 8.89543 18 10V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V10C6 8.89543 6.89543 8 8 8Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M9.91668 4.66667H7.29168C6.48626 4.66667 5.83334 5.31958 5.83334 6.125C5.83334 6.93042 6.48626 7.58333 7.29168 7.58333H20.7083C21.5138 7.58333 22.1667 6.93042 22.1667 6.125C22.1667 5.31958 21.5138 4.66667 20.7083 4.66667H18.0833L17.2584 3.84171C17.0396 3.62292 16.7428 3.5 16.4334 3.5H11.5666C11.2572 3.5 10.9604 3.62292 10.7416 3.84171L9.91668 4.66667Z"
              fill="currentColor"
            />
            <path
              d="M9.33334 9.33333H18.6667C19.9553 9.33333 21 10.378 21 11.6667V22.1667C21 23.4553 19.9553 24.5 18.6667 24.5H9.33334C8.04468 24.5 7.00001 23.4553 7.00001 22.1667V11.6667C7.00001 10.378 8.04468 9.33333 9.33334 9.33333Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}