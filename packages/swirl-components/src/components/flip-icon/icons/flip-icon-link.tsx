// DO NOT EDIT. THIS FILE GETS GENERATED VIA "yarn generate".

import { Component, Fragment, h, Prop } from "@stencil/core";
import { FlipIconSize } from "../flip-icon.types";
import classnames from "classnames";

@Component({
  shadow: true,
  styleUrl: "../flip-icon.css",
  tag: "flip-icon-link",
})
export class FlipIconLink {
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
              d="M8.09414 12.8082C7.41846 13.4838 6.60136 13.8217 5.64283 13.8217C4.68431 13.8217 3.86721 13.4838 3.19153 12.8082C2.51585 12.1325 2.17801 11.3154 2.17801 10.3568C2.17801 9.39832 2.51585 8.58122 3.19153 7.90554L4.49968 6.5974C4.64895 6.44812 4.82573 6.37348 5.03001 6.37348C5.23428 6.37348 5.41106 6.44812 5.56034 6.5974C5.71747 6.75453 5.79604 6.93524 5.79604 7.13951C5.79604 7.34379 5.7214 7.52056 5.57212 7.66984L4.26397 8.97799C3.87899 9.36297 3.6865 9.82259 3.6865 10.3568C3.6865 10.8911 3.87899 11.3507 4.26397 11.7357C4.64895 12.1207 5.10857 12.3132 5.64283 12.3132C6.17709 12.3132 6.63671 12.1207 7.02169 11.7357L8.32984 10.4276C8.47912 10.2783 8.65589 10.2036 8.86017 10.2036C9.06444 10.2036 9.24515 10.2822 9.40228 10.4393C9.55156 10.5886 9.6262 10.7654 9.6262 10.9697C9.6262 11.1739 9.55156 11.3507 9.40228 11.5L8.09414 12.8082ZM7.03348 9.95615C6.89991 10.0897 6.7368 10.1585 6.54416 10.1626C6.35182 10.1664 6.18495 10.0976 6.04353 9.95615C5.9021 9.81473 5.83328 9.64786 5.83705 9.45552C5.84114 9.26287 5.90996 9.09977 6.04353 8.9662L8.96623 6.0435C9.0998 5.90993 9.2629 5.84111 9.45555 5.83702C9.64789 5.83325 9.81476 5.90207 9.95618 6.0435C10.0976 6.18492 10.1664 6.35179 10.1627 6.54413C10.1586 6.73677 10.0897 6.89988 9.95618 7.03345L7.03348 9.95615ZM11.5 9.40225C11.3508 9.55153 11.174 9.62617 10.9697 9.62617C10.7654 9.62617 10.5887 9.55153 10.4394 9.40225C10.2822 9.24512 10.2037 9.06441 10.2037 8.86014C10.2037 8.65586 10.2783 8.47909 10.4276 8.32981L11.7357 7.02166C12.1207 6.63668 12.3132 6.17706 12.3132 5.6428C12.3132 5.10854 12.1207 4.64892 11.7357 4.26394C11.3508 3.87896 10.8911 3.68647 10.3569 3.68647C9.82262 3.68647 9.363 3.87896 8.97802 4.26394L7.66987 5.57209C7.52059 5.72137 7.34382 5.79601 7.13954 5.79601C6.93527 5.79601 6.75456 5.71744 6.59743 5.56031C6.44815 5.41103 6.37351 5.23425 6.37351 5.02998C6.37351 4.8257 6.44815 4.64892 6.59743 4.49965L7.90557 3.1915C8.58125 2.51582 9.39835 2.17798 10.3569 2.17798C11.3154 2.17798 12.1325 2.51582 12.8082 3.1915C13.4839 3.86718 13.8217 4.68428 13.8217 5.6428C13.8217 6.60132 13.4839 7.41843 12.8082 8.09411L11.5 9.40225Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {(this.size === 20 || this.size === 24) && (
          <Fragment>
            <path
              d="M12.1412 19.2123C11.1277 20.2259 9.90205 20.7326 8.46426 20.7326C7.02648 20.7326 5.80083 20.2259 4.78731 19.2123C3.77379 18.1988 3.26703 16.9732 3.26703 15.5354C3.26703 14.0976 3.77379 12.872 4.78731 11.8584L6.74953 9.89622C6.97345 9.6723 7.23861 9.56034 7.54502 9.56034C7.85144 9.56034 8.1166 9.6723 8.34052 9.89622C8.57622 10.1319 8.69407 10.403 8.69407 10.7094C8.69407 11.0158 8.58211 11.281 8.3582 11.5049L6.39598 13.4671C5.81851 14.0446 5.52977 14.734 5.52977 15.5354C5.52977 16.3368 5.81851 17.0262 6.39598 17.6037C6.97345 18.1812 7.66288 18.4699 8.46426 18.4699C9.26565 18.4699 9.95508 18.1812 10.5326 17.6037L12.4948 15.6415C12.7187 15.4175 12.9839 15.3056 13.2903 15.3056C13.5967 15.3056 13.8677 15.4234 14.1034 15.6591C14.3274 15.8831 14.4393 16.1482 14.4393 16.4546C14.4393 16.761 14.3274 17.0262 14.1034 17.2501L12.1412 19.2123ZM10.5502 14.9344C10.3499 15.1347 10.1052 15.2379 9.81625 15.2441C9.52775 15.2497 9.27744 15.1465 9.0653 14.9344C8.85317 14.7222 8.74993 14.4719 8.75559 14.1834C8.76172 13.8944 8.86496 13.6498 9.0653 13.4494L13.4494 9.06537C13.6497 8.86502 13.8944 8.76178 14.1833 8.75565C14.4718 8.75 14.7222 8.85323 14.9343 9.06537C15.1464 9.2775 15.2497 9.52781 15.244 9.81631C15.2379 10.1053 15.1346 10.3499 14.9343 10.5503L10.5502 14.9344ZM17.2501 14.1035C17.0261 14.3274 16.761 14.4394 16.4546 14.4394C16.1482 14.4394 15.883 14.3274 15.6591 14.1035C15.4234 13.8678 15.3055 13.5967 15.3055 13.2903C15.3055 12.9839 15.4175 12.7188 15.6414 12.4948L17.6036 10.5326C18.1811 9.95514 18.4698 9.26571 18.4698 8.46432C18.4698 7.66294 18.1811 6.97351 17.6036 6.39604C17.0261 5.81857 16.3367 5.52983 15.5353 5.52983C14.7339 5.52983 14.0445 5.81857 13.467 6.39604L11.5048 8.35826C11.2809 8.58218 11.0157 8.69413 10.7093 8.69413C10.4029 8.69413 10.1319 8.57628 9.89615 8.34058C9.67224 8.11666 9.56028 7.8515 9.56028 7.54509C9.56028 7.23867 9.67224 6.97351 9.89615 6.74959L11.8584 4.78737C12.8719 3.77385 14.0975 3.26709 15.5353 3.26709C16.9731 3.26709 18.1988 3.77385 19.2123 4.78737C20.2258 5.80089 20.7326 7.02654 20.7326 8.46432C20.7326 9.90211 20.2258 11.1278 19.2123 12.1413L17.2501 14.1035Z"
              fill="currentColor"
            />
          </Fragment>
        )}
        {this.size === 28 && (
          <Fragment>
            <path
              d="M14.1648 22.4143C12.9823 23.5968 11.5524 24.188 9.87499 24.188C8.19758 24.188 6.76765 23.5968 5.58521 22.4143C4.40277 21.2319 3.81155 19.802 3.81155 18.1245C3.81155 16.4471 4.40277 15.0172 5.58521 13.8348L7.87447 11.5455C8.13571 11.2843 8.44507 11.1536 8.80255 11.1536C9.16003 11.1536 9.46939 11.2843 9.73063 11.5455C10.0056 11.8205 10.1431 12.1367 10.1431 12.4942C10.1431 12.8517 10.0125 13.161 9.75125 13.4223L7.46199 15.7115C6.78828 16.3853 6.45142 17.1896 6.45142 18.1245C6.45142 19.0595 6.78828 19.8638 7.46199 20.5375C8.13571 21.2113 8.94004 21.5481 9.87499 21.5481C10.8099 21.5481 11.6143 21.2113 12.288 20.5375L14.5773 18.2483C14.8385 17.987 15.1478 17.8564 15.5053 17.8564C15.8628 17.8564 16.179 17.9939 16.454 18.2689C16.7153 18.5301 16.8459 18.8395 16.8459 19.197C16.8459 19.5545 16.7153 19.8638 16.454 20.1251L14.1648 22.4143ZM12.3086 17.4233C12.0749 17.6571 11.7894 17.7775 11.4523 17.7847C11.1157 17.7913 10.8237 17.6708 10.5762 17.4233C10.3287 17.1758 10.2083 16.8838 10.2149 16.5472C10.222 16.2101 10.3425 15.9247 10.5762 15.6909L15.6909 10.5762C15.9247 10.3424 16.2101 10.222 16.5473 10.2148C16.8838 10.2082 17.1759 10.3287 17.4234 10.5762C17.6708 10.8237 17.7913 11.1157 17.7847 11.4523C17.7775 11.7894 17.6571 12.0749 17.4234 12.3086L12.3086 17.4233ZM20.1251 16.454C19.8639 16.7152 19.5545 16.8459 19.197 16.8459C18.8395 16.8459 18.5302 16.7152 18.2689 16.454C17.994 16.179 17.8565 15.8628 17.8565 15.5053C17.8565 15.1478 17.9871 14.8385 18.2483 14.5772L20.5376 12.288C21.2113 11.6143 21.5481 10.8099 21.5481 9.87496C21.5481 8.94001 21.2113 8.13568 20.5376 7.46196C19.8639 6.78825 19.0595 6.45139 18.1246 6.45139C17.1896 6.45139 16.3853 6.78825 15.7116 7.46196L13.4223 9.75122C13.1611 10.0125 12.8517 10.1431 12.4942 10.1431C12.1368 10.1431 11.8205 10.0056 11.5455 9.7306C11.2843 9.46936 11.1537 9.16 11.1537 8.80252C11.1537 8.44504 11.2843 8.13568 11.5455 7.87444L13.8348 5.58518C15.0172 4.40274 16.4472 3.81152 18.1246 3.81152C19.802 3.81152 21.2319 4.40274 22.4144 5.58518C23.5968 6.76762 24.188 8.19755 24.188 9.87496C24.188 11.5524 23.5968 12.9823 22.4144 14.1647L20.1251 16.454Z"
              fill="currentColor"
            />
          </Fragment>
        )}
      </svg>
    );
  }
}
