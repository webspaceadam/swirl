// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-mail",
})
export class FlipIconMail {
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
              d="M13.3333 2.66669H2.66668C1.93334 2.66669 1.33334 3.26669 1.33334 4.00002V12C1.33334 12.7334 1.93334 13.3334 2.66668 13.3334H13.3333C14.0667 13.3334 14.6667 12.7334 14.6667 12V4.00002C14.6667 3.26669 14.0667 2.66669 13.3333 2.66669ZM13.0667 5.50002L8.70668 8.22669C8.27334 8.50002 7.72668 8.50002 7.29334 8.22669L2.93334 5.50002C2.76668 5.39335 2.66668 5.21335 2.66668 5.02002C2.66668 4.57335 3.15334 4.30669 3.53334 4.54002L8.00001 7.33335L12.4667 4.54002C12.8467 4.30669 13.3333 4.57335 13.3333 5.02002C13.3333 5.21335 13.2333 5.39335 13.0667 5.50002Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM19.6 8.25L13.06 12.34C12.41 12.75 11.59 12.75 10.94 12.34L4.4 8.25C4.15 8.09 4 7.82 4 7.53C4 6.86 4.73 6.46 5.3 6.81L12 11L18.7 6.81C19.27 6.46 20 6.86 20 7.53C20 7.82 19.85 8.09 19.6 8.25Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M23.3333 4.66669H4.66668C3.38334 4.66669 2.33334 5.71669 2.33334 7.00002V21C2.33334 22.2834 3.38334 23.3334 4.66668 23.3334H23.3333C24.6167 23.3334 25.6667 22.2834 25.6667 21V7.00002C25.6667 5.71669 24.6167 4.66669 23.3333 4.66669ZM22.8667 9.62502L15.2367 14.3967C14.4783 14.875 13.5217 14.875 12.7633 14.3967L5.13334 9.62502C4.84168 9.43835 4.66668 9.12335 4.66668 8.78502C4.66668 8.00335 5.51834 7.53669 6.18334 7.94502L14 12.8334L21.8167 7.94502C22.4817 7.53669 23.3333 8.00335 23.3333 8.78502C23.3333 9.12335 23.1583 9.43835 22.8667 9.62502Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
