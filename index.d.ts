interface Unite {
    /** Configuration parameters specified in your UniteJS build configurations*/
    config: { [id: string]: any };
    /** The name of the configuration. */
    configName: string;
    /** The packageVersion of the app. */
    packageVersion: string;
    /** Is the build bundled. */
    bundle: string;
    /** Is the build minified. */
    minify: string;
    /** UniteJS framework version */
    uniteVersion: string;
}

interface Window {
    unite: Unite;
}