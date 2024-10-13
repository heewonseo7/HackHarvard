declare module "*.jpg" {
    const src: string;
    export default src;
}

declare module "*.jpeg" {
    const src: string;
    export default src;
}

declare module "*.png" {
    const src: string;
    export default src;
}

declare function require(context: string): any;

declare namespace NodeJS {
    interface Global {
        require: NodeRequire;
    }
}
