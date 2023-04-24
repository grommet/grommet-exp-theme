export declare const button: import("@vanilla-extract/recipes").RuntimeFn<{
    kind: {
        default: {
            borderStyle: "none";
            ":hover": {
                backgroundColor: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
                color: undefined;
            };
        };
        secondary: {
            borderStyle: "solid";
        };
        primary: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            border: "none";
            color: "#FFF";
        };
    };
    size: {
        xsmall: {
            paddingLeft: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingRight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingTop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingBottom: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        small: {
            paddingLeft: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingRight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingTop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingBottom: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        medium: {
            paddingLeft: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingRight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingTop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingBottom: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: "19px";
            lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        large: {
            paddingLeft: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingRight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingTop: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            paddingBottom: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            fontSize: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHeight: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    iconOnly: {
        true: {
            padding: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            lineHeight: number;
        };
    };
    active: {
        true: {
            background: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
}>;
