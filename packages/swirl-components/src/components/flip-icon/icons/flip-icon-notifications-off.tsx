// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-notifications-off",
})
export class FlipIconNotificationsOff {
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
              d="M7.53667 14.5C8.27001 14.5 8.87001 13.9 8.87001 13.1667H6.20334C6.20334 13.9 6.79667 14.5 7.53667 14.5ZM11.5367 7.16667C11.5367 5.12 10.4433 3.40667 8.53667 2.95333V2.5C8.53667 1.94667 8.09001 1.5 7.53667 1.5C6.98334 1.5 6.53667 1.94667 6.53667 2.5V2.95333C6.37667 2.99333 6.22334 3.05333 6.07667 3.10667L11.5367 8.56667V7.16667ZM3.14334 2.06667L2.20334 3.00667L4.07667 4.88C3.73001 5.54667 3.53667 6.32 3.53667 7.16667V10.5L2.67667 11.36C2.25667 11.78 2.55001 12.5 3.14334 12.5H11.6967L12.8567 13.66L13.7967 12.72L3.14334 2.06667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M11.305 21.75C12.405 21.75 13.305 20.85 13.305 19.75H9.30499C9.30499 20.85 10.195 21.75 11.305 21.75ZM17.305 10.75C17.305 7.68 15.665 5.11 12.805 4.43V3.75C12.805 2.92 12.135 2.25 11.305 2.25C10.475 2.25 9.80499 2.92 9.80499 3.75V4.43C9.56499 4.49 9.33499 4.58 9.11499 4.66L17.305 12.85V10.75ZM4.71499 3.1L3.30499 4.51L6.11499 7.32C5.59499 8.32 5.30499 9.48 5.30499 10.75V15.75L4.01499 17.04C3.38499 17.67 3.82499 18.75 4.71499 18.75H17.545L19.285 20.49L20.695 19.08L4.71499 3.1Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M13.1892 25.375C14.4725 25.375 15.5225 24.325 15.5225 23.0417H10.8558C10.8558 24.325 11.8942 25.375 13.1892 25.375ZM20.1892 12.5417C20.1892 8.96 18.2758 5.96167 14.9392 5.16833V4.375C14.9392 3.40667 14.1575 2.625 13.1892 2.625C12.2208 2.625 11.4392 3.40667 11.4392 4.375V5.16833C11.1592 5.23833 10.8908 5.34333 10.6342 5.43667L20.1892 14.9917V12.5417ZM5.50083 3.61667L3.85583 5.26167L7.13417 8.54C6.5275 9.70667 6.18917 11.06 6.18917 12.5417V18.375L4.68417 19.88C3.94917 20.615 4.4625 21.875 5.50083 21.875H20.4692L22.4992 23.905L24.1442 22.26L5.50083 3.61667Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
