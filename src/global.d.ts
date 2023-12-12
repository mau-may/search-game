declare module "*.scss" {
    const content: { [className: string]: string };
    export = content;
}
declare module '*.svg' {
	import React = require('react');
    export const ReactComponent: REact.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}