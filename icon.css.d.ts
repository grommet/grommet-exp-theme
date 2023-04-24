export declare const icon: import("@vanilla-extract/recipes").RuntimeFn<{
    size: {
        small: {
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        medium: {
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        large: {
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        xlarge: {
            height: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
    };
    height: {
        small: {
            paddingTop: `calc((${number} - ${string}) / 2)px`;
            paddingBottom: `calc((${number} - ${string}) / 2)px`;
        };
        medium: {
            paddingTop: `calc((${number} - ${string}) / 2)px`;
            paddingBottom: `calc((${number} - ${string}) / 2)px`;
        };
        large: {
            paddingTop: `calc((${number} - ${string}) / 2)px`;
            paddingBottom: `calc((${number} - ${string}) / 2)px`;
        };
    };
}>;
