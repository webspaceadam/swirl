// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-send",
})
export class FlipIconSend {
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
              d="M2.93333 12.95C2.71111 13.0389 2.5 13.0193 2.3 12.8913C2.1 12.7638 2 12.5778 2 12.3333V9.85C2 9.69444 2.04444 9.55555 2.13333 9.43333C2.22222 9.31111 2.34444 9.23333 2.5 9.2L7.33333 8L2.5 6.8C2.34444 6.76666 2.22222 6.68889 2.13333 6.56666C2.04444 6.44444 2 6.30555 2 6.15V3.66666C2 3.42222 2.1 3.236 2.3 3.108C2.5 2.98044 2.71111 2.96111 2.93333 3.05L13.2 7.38333C13.4778 7.50555 13.6167 7.71111 13.6167 8C13.6167 8.28889 13.4778 8.49444 13.2 8.61666L2.93333 12.95Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M4.4 19.425C4.06667 19.5583 3.75 19.529 3.45 19.337C3.15 19.1457 3 18.8667 3 18.5V14.775C3 14.5417 3.06667 14.3333 3.2 14.15C3.33333 13.9667 3.51667 13.85 3.75 13.8L11 12L3.75 10.2C3.51667 10.15 3.33333 10.0333 3.2 9.84999C3.06667 9.66666 3 9.45833 3 9.22499V5.49999C3 5.13333 3.15 4.85399 3.45 4.66199C3.75 4.47066 4.06667 4.44166 4.4 4.57499L19.8 11.075C20.2167 11.2583 20.425 11.5667 20.425 12C20.425 12.4333 20.2167 12.7417 19.8 12.925L4.4 19.425Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M5.13333 22.6625C4.74444 22.818 4.375 22.7838 4.025 22.5598C3.675 22.3366 3.5 22.0111 3.5 21.5833V17.2375C3.5 16.9653 3.57778 16.7222 3.73333 16.5083C3.88889 16.2944 4.10278 16.1583 4.375 16.1L12.8333 14L4.375 11.9C4.10278 11.8417 3.88889 11.7055 3.73333 11.4917C3.57778 11.2778 3.5 11.0347 3.5 10.7625V6.41666C3.5 5.98888 3.675 5.66299 4.025 5.43899C4.375 5.21577 4.74444 5.18194 5.13333 5.33749L23.1 12.9208C23.5861 13.1347 23.8292 13.4944 23.8292 14C23.8292 14.5055 23.5861 14.8653 23.1 15.0792L5.13333 22.6625Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
