import { BridgeOptions } from "./types";

export * from "./types";
export * from "./messaging/messaging.types";

export * from "./events";
export * from "./i18n";
export * from "./navigation";
export * from "./theming";

declare global {
  interface Window {
    flipBridgeOptions: BridgeOptions;
  }
}

export function initFlipBridge(options: BridgeOptions) {
  if (window.flipBridgeOptions) {
    console.warn(`'initFlipBridge' has already been called.`);
    return;
  }

  window.flipBridgeOptions = options;
}
