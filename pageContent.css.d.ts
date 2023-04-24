export declare const pageContent: import("@vanilla-extract/recipes").RuntimeFn<{
    background: {
        default: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        back: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        front: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        contrast: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
    };
    kind: {
        wide: {
            minWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            maxWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        narrow: {
            maxWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
        };
        full: {
            minWidth: `var(--${string})` | `var(--${string}, ${string})` | `var(--${string}, ${number})`;
            maxWidth: "100%";
        };
    };
}>;
