/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface VizHeader {
        "primaryText": string;
    }
    interface VizLogo {
    }
}
declare global {
    interface HTMLVizHeaderElement extends Components.VizHeader, HTMLStencilElement {
    }
    var HTMLVizHeaderElement: {
        prototype: HTMLVizHeaderElement;
        new (): HTMLVizHeaderElement;
    };
    interface HTMLVizLogoElement extends Components.VizLogo, HTMLStencilElement {
    }
    var HTMLVizLogoElement: {
        prototype: HTMLVizLogoElement;
        new (): HTMLVizLogoElement;
    };
    interface HTMLElementTagNameMap {
        "viz-header": HTMLVizHeaderElement;
        "viz-logo": HTMLVizLogoElement;
    }
}
declare namespace LocalJSX {
    interface VizHeader {
        "primaryText"?: string;
    }
    interface VizLogo {
    }
    interface IntrinsicElements {
        "viz-header": VizHeader;
        "viz-logo": VizLogo;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "viz-header": LocalJSX.VizHeader & JSXBase.HTMLAttributes<HTMLVizHeaderElement>;
            "viz-logo": LocalJSX.VizLogo & JSXBase.HTMLAttributes<HTMLVizLogoElement>;
        }
    }
}
