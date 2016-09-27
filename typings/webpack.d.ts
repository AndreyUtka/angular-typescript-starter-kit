type Entry = Array<string> | Object;

interface IWebpackConfig {
    cache?: boolean;
    context?: string;
    target?: string;
    devtool?: string;
    entry: Entry;
    output: any;
    stats?: any;
    module?: {
      preLoaders?: Array<any>;
      loaders?: Array<any>;
      postLoaders?: Array<any>
    };
    plugins?: Array<any>;
    resolve?: {
        unsafeCache?: boolean | Array<string>;
        root?: string;
        extensions?: Array<string>;
    };
    devServer?: {
        staticOptions?: any;
        setup?: (app: any, fs?: any) => any;
        compress?: boolean;
        quiet?: boolean,
        contentBase?: string;
        port?: number;
        historyApiFallback?: boolean;
        hot?: boolean;
        inline?: boolean;
        host?: string;
        https?: boolean;
    };
    node?: {
        process?: boolean;
        global?: boolean | string;
        Buffer?: boolean;
        crypto?: string | boolean;
        module?: boolean;
        clearImmediate?: boolean;
        setImmediate?: boolean
        clearTimeout?: boolean;
        setTimeout?: boolean
    };
}

declare module "html-webpack-plugin" {
    interface Options {
        template: string;
        inject: string;
        minify: boolean;
    }

    class HtmlWebpackPlugin{
        constructor(opts: Options)
    }

    export = HtmlWebpackPlugin;
}
