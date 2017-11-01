interface Unite {
    /** Configuration parameters specified in your UniteJS build configurations */
    config: { [id: string]: any };
    /** The name of the configuration. */
    configName: string;
    /** The packageVersion of the app. */
    packageVersion: string;
    /** Is the build bundled. */
    bundle: boolean;
    /** Is the build minified. */
    minify: boolean;
    /** Is the build pwa. */
    pwa: boolean;
    /** UniteJS framework version */
    uniteVersion: string;
}

interface Window {
    unite: Unite;
}