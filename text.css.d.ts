export declare const text: import("@vanilla-extract/recipes").RuntimeFn<{
    color: {
        strong: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        weak: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        xweak: {
            color: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    size: {
        xlarge: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        large: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        medium: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        small: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        xsmall: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
    };
    level: {
        1: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        2: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
        3: ({
            "@media": {
                "only screen and (min-width: 768px)": object;
                "only screen and (min-width: 1536px)": object;
            };
        } | {
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        })[];
    };
    textAlign: {
        start: {
            textAlign: "left";
        };
        center: {
            textAlign: "center";
        };
        end: {
            textAlign: "right";
        };
    };
    weight: {
        light: {
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        regular: {
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        medium: {
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        semibold: {
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        bold: {
            fontWeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
}>;
