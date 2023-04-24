'use strict';

var css = require('@vanilla-extract/css');
var hpeDesignTokens = require('hpe-design-tokens');
var recipes = require('@vanilla-extract/recipes');

const vars = css.createThemeContract(hpeDesignTokens.structuredTokens);
const theme = css.createTheme(vars, hpeDesignTokens.structuredTokens);
// export const darkTheme = createTheme(vars, structuredTokensDark);

const anchor = css.style({
    color: vars.text.color.strong,
});

const contentSizeVariants = {
    height: {
        xxsmall: { height: vars.content.xxsmall },
        xsmall: { height: vars.content.xsmall },
        small: { height: vars.content.small },
        medium: { height: vars.content.medium },
        large: { height: vars.content.large },
        xlarge: { height: vars.content.xlarge },
        none: { height: "initial" },
    },
    width: {
        xxsmall: { width: vars.content.xxsmall },
        xsmall: { width: vars.content.xsmall },
        small: { width: vars.content.small },
        medium: { width: vars.content.medium },
        large: { width: vars.content.large },
        xlarge: { width: vars.content.xlarge },
        none: { width: "initial" },
    },
};
const gapVariants = {
    gap: {
        xxsmall: { gap: vars.spacing.xxsmall.desktop },
        xsmall: { gap: vars.spacing.xsmall.desktop },
        small: { gap: vars.spacing.small.desktop },
        medium: { gap: vars.spacing.medium.desktop },
        large: { gap: vars.spacing.large.desktop },
        xlarge: { gap: vars.spacing.xlarge.desktop },
        none: { gap: 0 },
    },
};
const marginVariants = {
    margin: {
        xxsmall: { margin: vars.spacing.xxsmall.desktop },
        xsmall: { margin: vars.spacing.xsmall.desktop },
        small: { margin: vars.spacing.small.desktop },
        medium: { margin: vars.spacing.medium.desktop },
        large: { margin: vars.spacing.large.desktop },
        xlarge: { margin: vars.spacing.xlarge.desktop },
        none: { margin: 0 },
    },
    marginHorizontal: {
        xxsmall: {
            marginInlineStart: vars.spacing.xxsmall.desktop,
            marginInlineEnd: vars.spacing.xxsmall.desktop,
        },
        xsmall: {
            marginInlineStart: vars.spacing.xsmall.desktop,
            marginInlineEnd: vars.spacing.xsmall.desktop,
        },
        small: {
            marginInlineStart: vars.spacing.small.desktop,
            marginInlineEnd: vars.spacing.small.desktop,
        },
        medium: {
            marginInlineStart: vars.spacing.medium.desktop,
            marginInlineEnd: vars.spacing.medium.desktop,
        },
        large: {
            marginInlineStart: vars.spacing.large.desktop,
            marginInlineEnd: vars.spacing.large.desktop,
        },
        xlarge: {
            marginInlineStart: vars.spacing.xlarge.desktop,
            marginInlineEnd: vars.spacing.xlarge.desktop,
        },
        none: { marginInlineStart: 0, marginInlineEnd: 0 },
    },
    marginVertical: {
        xxsmall: {
            marginTop: vars.spacing.xxsmall.desktop,
            marginBottom: vars.spacing.xxsmall.desktop,
        },
        xsmall: {
            marginTop: vars.spacing.xsmall.desktop,
            marginBottom: vars.spacing.xsmall.desktop,
        },
        small: {
            marginTop: vars.spacing.small.desktop,
            marginBottom: vars.spacing.small.desktop,
        },
        medium: {
            marginTop: vars.spacing.medium.desktop,
            marginBottom: vars.spacing.medium.desktop,
        },
        large: {
            marginTop: vars.spacing.large.desktop,
            marginBottom: vars.spacing.large.desktop,
        },
        xlarge: {
            marginTop: vars.spacing.xlarge.desktop,
            marginBottom: vars.spacing.xlarge.desktop,
        },
        none: { marginTop: 0, marginBottom: 0 },
    },
    marginTop: {
        xxsmall: { marginTop: vars.spacing.xxsmall.desktop },
        xsmall: { marginTop: vars.spacing.xsmall.desktop },
        small: { marginTop: vars.spacing.small.desktop },
        medium: { marginTop: vars.spacing.medium.desktop },
        large: { marginTop: vars.spacing.large.desktop },
        xlarge: { marginTop: vars.spacing.xlarge.desktop },
        none: { marginTop: 0 },
    },
    marginBottom: {
        xxsmall: { marginBottom: vars.spacing.xxsmall.desktop },
        xsmall: { marginBottom: vars.spacing.xsmall.desktop },
        small: { marginBottom: vars.spacing.small.desktop },
        medium: { marginBottom: vars.spacing.medium.desktop },
        large: { marginBottom: vars.spacing.large.desktop },
        xlarge: { marginBottom: vars.spacing.xlarge.desktop },
        none: { marginBottom: 0 },
    },
    marginStart: {
        xxsmall: { marginInlineStart: vars.spacing.xxsmall.desktop },
        xsmall: { marginInlineStart: vars.spacing.xsmall.desktop },
        small: { marginInlineStart: vars.spacing.small.desktop },
        medium: { marginInlineStart: vars.spacing.medium.desktop },
        large: { marginInlineStart: vars.spacing.large.desktop },
        xlarge: { marginInlineStart: vars.spacing.xlarge.desktop },
        none: { marginInlineStart: 0 },
    },
    marginEnd: {
        xxsmall: { marginInlineEnd: vars.spacing.xxsmall.desktop },
        xsmall: { marginInlineEnd: vars.spacing.xsmall.desktop },
        small: { marginInlineEnd: vars.spacing.small.desktop },
        medium: { marginInlineEnd: vars.spacing.medium.desktop },
        large: { marginInlineEnd: vars.spacing.large.desktop },
        xlarge: { marginInlineEnd: vars.spacing.xlarge.desktop },
        none: { marginInlineEnd: 0 },
    },
};
const padVariants = {
    pad: {
        xxsmall: { padding: vars.spacing.xxsmall.desktop },
        xsmall: { padding: vars.spacing.xsmall.desktop },
        small: { padding: vars.spacing.small.desktop },
        medium: { padding: vars.spacing.medium.desktop },
        large: { padding: vars.spacing.large.desktop },
        xlarge: { padding: vars.spacing.xlarge.desktop },
        none: { padding: 0 },
    },
    padHorizontal: {
        xxsmall: {
            paddingInlineStart: vars.spacing.xxsmall.desktop,
            paddingInlineEnd: vars.spacing.xxsmall.desktop,
        },
        xsmall: {
            paddingInlineStart: vars.spacing.xsmall.desktop,
            paddingInlineEnd: vars.spacing.xsmall.desktop,
        },
        small: {
            paddingInlineStart: vars.spacing.small.desktop,
            paddingInlineEnd: vars.spacing.small.desktop,
        },
        medium: {
            paddingInlineStart: vars.spacing.medium.desktop,
            paddingInlineEnd: vars.spacing.medium.desktop,
        },
        large: {
            paddingInlineStart: vars.spacing.large.desktop,
            paddingInlineEnd: vars.spacing.large.desktop,
        },
        xlarge: {
            paddingInlineStart: vars.spacing.xlarge.desktop,
            paddingInlineEnd: vars.spacing.xlarge.desktop,
        },
        none: { paddingInlineStart: 0, paddingInlineEnd: 0 },
    },
    padVertical: {
        xxsmall: {
            paddingTop: vars.spacing.xxsmall.desktop,
            paddingBottom: vars.spacing.xxsmall.desktop,
        },
        xsmall: {
            paddingTop: vars.spacing.xsmall.desktop,
            paddingBottom: vars.spacing.xsmall.desktop,
        },
        small: {
            paddingTop: vars.spacing.small.desktop,
            paddingBottom: vars.spacing.small.desktop,
        },
        medium: {
            paddingTop: vars.spacing.medium.desktop,
            paddingBottom: vars.spacing.medium.desktop,
        },
        large: {
            paddingTop: vars.spacing.large.desktop,
            paddingBottom: vars.spacing.large.desktop,
        },
        xlarge: {
            paddingTop: vars.spacing.xlarge.desktop,
            paddingBottom: vars.spacing.xlarge.desktop,
        },
        none: { paddingTop: 0, paddingBottom: 0 },
    },
    padTop: {
        xxsmall: { paddingTop: vars.spacing.xxsmall.desktop },
        xsmall: { paddingTop: vars.spacing.xsmall.desktop },
        small: { paddingTop: vars.spacing.small.desktop },
        medium: { paddingTop: vars.spacing.medium.desktop },
        large: { paddingTop: vars.spacing.large.desktop },
        xlarge: { paddingTop: vars.spacing.xlarge.desktop },
        none: { paddingTop: 0 },
    },
    padBottom: {
        xxsmall: { paddingBottom: vars.spacing.xxsmall.desktop },
        xsmall: { paddingBottom: vars.spacing.xsmall.desktop },
        small: { paddingBottom: vars.spacing.small.desktop },
        medium: { paddingBottom: vars.spacing.medium.desktop },
        large: { paddingBottom: vars.spacing.large.desktop },
        xlarge: { paddingBottom: vars.spacing.xlarge.desktop },
        none: { paddingBottom: 0 },
    },
    padStart: {
        xxsmall: { paddingInlineStart: vars.spacing.xxsmall.desktop },
        xsmall: { paddingInlineStart: vars.spacing.xsmall.desktop },
        small: { paddingInlineStart: vars.spacing.small.desktop },
        medium: { paddingInlineStart: vars.spacing.medium.desktop },
        large: { paddingInlineStart: vars.spacing.large.desktop },
        xlarge: { paddingInlineStart: vars.spacing.xlarge.desktop },
        none: { paddingInlineStart: 0 },
    },
    padEnd: {
        xxsmall: { paddingInlineEnd: vars.spacing.xxsmall.desktop },
        xsmall: { paddingInlineEnd: vars.spacing.xsmall.desktop },
        small: { paddingInlineEnd: vars.spacing.small.desktop },
        medium: { paddingInlineEnd: vars.spacing.medium.desktop },
        large: { paddingInlineEnd: vars.spacing.large.desktop },
        xlarge: { paddingInlineEnd: vars.spacing.xlarge.desktop },
        none: { paddingInlineEnd: 0 },
    },
};
const box = recipes.recipe({
    base: {
        display: "flex",
        boxSizing: "border-box",
    },
    variants: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ align: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            stretch: { alignItems: "stretch" },
            end: { alignItems: "flex-end" },
        }, background: {
            default: { backgroundColor: vars.color.background.default },
            back: { backgroundColor: vars.color.background.back },
            front: { backgroundColor: vars.color.background.front },
            contrast: { backgroundColor: vars.color.background.contrast },
        }, border: {
            true: {
                border: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
            },
            false: { border: "none" },
            top: {
                borderTop: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
            },
            bottom: {
                borderBottom: `${vars.border.medium.desktop.width} solid ${vars.color.border}`,
            },
        }, direction: {
            column: { flexDirection: "column" },
            row: { flexDirection: "row" },
        }, elevation: {
            small: { boxShadow: vars.elevation.small.boxShadow },
            medium: { boxShadow: vars.elevation.medium.boxShadow },
            large: { boxShadow: vars.elevation.large.boxShadow },
            none: { boxShadow: "none" },
        }, flex: {
            true: { flex: "1 1 auto" },
            false: { flex: "0 0 auto" },
            grow: { flexGrow: "1 0 auto" },
            shrink: { flexShrink: "0 1 auto" },
        } }, gapVariants), contentSizeVariants), { justify: {
            around: { justifyContent: "space-around" },
            between: { justifyContent: "space-between" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
            evenly: { justifyContent: "space-evenly" },
            start: { justifyContent: "flex-start" },
        } }), marginVariants), padVariants), { round: {
            xsmall: { borderRadius: vars.radius.xsmall },
            small: { borderRadius: vars.radius.small },
            medium: { borderRadius: vars.radius.medium },
            large: { borderRadius: vars.radius.large },
            xlarge: { borderRadius: vars.radius.xlarge },
            full: { borderRadius: "2em" },
            none: { padding: 0 },
        }, wrap: {
            true: { flexWrap: "wrap" },
            false: { flexWrap: "nowrap" },
        } }),
    defaultVariants: {
        align: "stretch",
        direction: "column",
        justify: "start",
    },
});

const button = recipes.recipe({
    base: {
        background: "none",
        borderRadius: "2em",
        boxSizing: "border-box",
        color: vars.text.color.strong,
        fontFamily: vars.font.fontFamily,
        fontWeight: vars.font.bold.fontWeight,
        selectors: {
            [`&:hover`]: {
                cursor: `pointer`,
            },
        },
    },
    variants: {
        kind: {
            default: {
                borderStyle: "none",
                ":hover": {
                    backgroundColor: vars.color.background.contrast,
                    color: undefined,
                },
            },
            secondary: {
                // borderWidth: vars.stroke.small,
                // borderColor: vars.color.brand,
                borderStyle: `solid`,
            },
            primary: {
                background: vars.color.brand,
                border: `none`,
                color: `#FFF`,
            },
        },
        size: {
            xsmall: {
                paddingLeft: vars.spacing.small.desktop,
                paddingRight: vars.spacing.small.desktop,
                paddingTop: vars.spacing.xsmall.desktop,
                paddingBottom: vars.spacing.xsmall.desktop,
                fontSize: vars.text.xsmall.desktop.fontSize,
                lineHeight: vars.text.lineHeight,
            },
            small: {
                paddingLeft: vars.spacing.medium.desktop,
                paddingRight: vars.spacing.medium.desktop,
                paddingTop: vars.spacing.xsmall.desktop,
                paddingBottom: vars.spacing.xsmall.desktop,
                fontSize: vars.text.small.desktop.fontSize,
                lineHeight: vars.text.lineHeight,
            },
            medium: {
                paddingLeft: vars.spacing.medium.desktop,
                paddingRight: vars.spacing.medium.desktop,
                paddingTop: vars.spacing.xsmall.desktop,
                paddingBottom: vars.spacing.xsmall.desktop,
                fontSize: "19px",
                lineHeight: vars.text.lineHeight,
            },
            large: {
                paddingLeft: vars.spacing.medium.desktop,
                paddingRight: vars.spacing.medium.desktop,
                paddingTop: vars.spacing.small.desktop,
                paddingBottom: vars.spacing.small.desktop,
                fontSize: vars.text.large.desktop.fontSize,
                lineHeight: vars.text.lineHeight,
            },
        },
        iconOnly: {
            true: {
                padding: vars.spacing.xsmall.desktop,
                lineHeight: 0,
            },
        },
        active: {
            true: {
                background: vars.color.background.active,
            }
        }
    },
    // Applied when multiple variants are set at once
    compoundVariants: [
        {
            variants: {
                iconOnly: true,
                size: `medium`,
            },
            style: {
                padding: vars.spacing.xsmall.desktop,
            },
        },
    ],
    defaultVariants: {
        kind: `default`,
        size: `medium`,
    },
});

const grid = recipes.recipe({
    base: {
        display: "grid",
        boxSizing: "border-box",
    },
    variants: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({ columns: {
            // repeated columns
            xxsmall: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xxsmall}, 100%), 1fr))`,
            },
            xsmall: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xsmall}, 100%), 1fr))`,
            },
            small: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.small}, 100%), 1fr))`,
            },
            medium: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.medium}, 100%), 1fr))`,
            },
            large: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.large}, 100%), 1fr))`,
            },
            xlarge: {
                gridTemplateColumns: `repeat(auto-fill, minmax(min(${vars.content.xlarge}, 100%), 1fr))`,
            },
            none: { gridAutoColumns: "auto" },
            // two columns
            "small-small": {
                gridTemplateColumns: `${vars.content.small} ${vars.content.small}`,
            },
            "small-medium": {
                gridTemplateColumns: `${vars.content.small} ${vars.content.medium}`,
            },
            "small-flex": {
                gridTemplateColumns: `${vars.content.small} 1fr`,
            },
            "flex-small": {
                gridTemplateColumns: `1fr ${vars.content.small}`,
            },
            "medium-small": {
                gridTemplateColumns: `${vars.content.medium} ${vars.content.small}`,
            },
            "medium-medium": {
                gridTemplateColumns: `${vars.content.medium} ${vars.content.medium}`,
            },
            "medium-flex": {
                gridTemplateColumns: `${vars.content.medium} 1fr`,
            },
            "flex-medium": {
                gridTemplateColumns: `1fr ${vars.content.medium}`,
            },
            // three column
            "small-flex-small": {
                gridTemplateColumns: `${vars.content.small} 1fr ${vars.content.small}`,
            },
            "medium-flex-medium": {
                gridTemplateColumns: `${vars.content.medium} 1fr ${vars.content.medium}`,
            },
        } }, gapVariants), { gapColumn: {
            xxsmall: { columnGap: vars.spacing.xxsmall.desktop },
            xsmall: { columnGap: vars.spacing.xsmall.desktop },
            small: { columnGap: vars.spacing.small.desktop },
            medium: { columnGap: vars.spacing.medium.desktop },
            large: { columnGap: vars.spacing.large.desktop },
            xlarge: { columnGap: vars.spacing.xlarge.desktop },
            none: { columnGap: 0 },
        }, gapRow: {
            xxsmall: { rowGap: vars.spacing.xxsmall.desktop },
            xsmall: { rowGap: vars.spacing.xsmall.desktop },
            small: { rowGap: vars.spacing.small.desktop },
            medium: { rowGap: vars.spacing.medium.desktop },
            large: { rowGap: vars.spacing.large.desktop },
            xlarge: { rowGap: vars.spacing.xlarge.desktop },
            none: { rowGap: 0 },
        } }), contentSizeVariants), marginVariants), padVariants),
});

// Since globalFontFace is global, we cannot use theme variables for it
// and must use tokens directly.
const family = hpeDesignTokens.structuredTokens.font.fontFamily.split(' ')[0];
const weights = [
    "light",
    "regular",
    "medium",
    "semibold",
    "bold",
];
weights.forEach((weight) => {
    css.globalFontFace(family, {
        src: `url("${hpeDesignTokens.structuredTokens.font[weight].url}") format("woff2")`,
        fontWeight: hpeDesignTokens.structuredTokens.font[weight].fontWeight,
    });
});
const font = css.style({
    fontFamily: hpeDesignTokens.structuredTokens.font.fontFamily,
});
const grommet = css.style([theme, font]);

const responsiveStyle$1 = ({ desktop, tablet, }) => ({
    "@media": {
        "only screen and (min-width: 768px)": tablet,
        "only screen and (min-width: 1536px)": desktop,
    },
});
const sizeStyle$1 = (size) => [
    {
        fontSize: vars.heading[size].mobile.fontSize,
        fontWeight: vars.heading[size].mobile.fontWeight,
    },
    responsiveStyle$1({
        desktop: {
            fontSize: vars.heading[size].desktop.fontSize,
            fontWeight: vars.heading[size].desktop.fontWeight,
        },
        tablet: {
            fontSize: vars.heading[size].tablet.fontSize,
            fontWeight: vars.heading[size].tablet.fontWeight,
        },
    }),
];
const heading = recipes.recipe({
    base: {
        color: vars.heading.color,
        margin: 0,
        lineHeight: 1,
    },
    variants: {
        level: {
            1: sizeStyle$1(1),
            2: sizeStyle$1(2),
            3: sizeStyle$1(3),
        },
    },
});

const rem = 16;
const icon = recipes.recipe({
    base: {
        boxSizing: "content-box",
    },
    defaultVariants: {
        size: "medium",
    },
    variants: {
        size: {
            small: { height: vars.icon.small.height },
            medium: { height: vars.icon.medium.height },
            large: { height: vars.icon.large.height },
            xlarge: { height: vars.icon.xlarge.height },
        },
        height: {
            small: {
                paddingTop: `calc((${parseInt(vars.text.small.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.small}) / 2)px`,
                paddingBottom: `calc((${parseInt(vars.text.small.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.small}) / 2)px`,
            },
            medium: {
                paddingTop: `calc((${parseInt(vars.text.medium.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.medium}) / 2)px`,
                paddingBottom: `calc((${parseInt(vars.text.medium.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.medium}) / 2)px`,
            },
            large: {
                paddingTop: `calc((${parseInt(vars.text.large.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.large}) / 2)px`,
                paddingBottom: `calc((${parseInt(vars.text.large.desktop.fontSize, 10) *
                    rem *
                    parseInt(vars.text.lineHeight, 10)} - ${vars.icon.large}) / 2)px`,
            },
        },
    },
});

// TODO: use container context
const page = css.style({
    display: "flex",
    flexDirection: "column",
});

// TODO: container queries for padding
const pageContent = recipes.recipe({
    base: {
        alignSelf: "center",
    },
    variants: {
        background: {
            default: vars.color.background.default,
            back: vars.color.background.back,
            front: vars.color.background.front,
            contrast: vars.color.background.contrast,
        },
        kind: {
            wide: {
                minWidth: vars.page.narrow.maxWidth,
                maxWidth: vars.page.wide.maxWidth,
            },
            narrow: {
                maxWidth: vars.page.narrow.maxWidth,
            },
            full: {
                minWidth: vars.page.wide.maxWidth,
                maxWidth: '100%',
            },
        },
    },
});

css.globalStyle('html, body', {
    margin: 0
});

const responsiveStyle = ({ desktop, tablet, }) => ({
    "@media": {
        "only screen and (min-width: 768px)": tablet,
        "only screen and (min-width: 1536px)": desktop,
    },
});
const sizeStyle = (size) => [
    {
        fontSize: vars.text[size].mobile.fontSize,
        // fontWeight: vars.text[size].mobile.fontWeight,
    },
    responsiveStyle({
        desktop: {
            fontSize: vars.text[size].desktop.fontSize,
            // fontWeight: vars.text[size].desktop.fontWeight,
        },
        tablet: {
            fontSize: vars.text[size].tablet.fontSize,
            // fontWeight: vars.text[size].tablet.fontWeight,
        },
    }),
];
const xsmall = sizeStyle("xsmall");
const small = sizeStyle("small");
const medium = sizeStyle("medium");
const large = sizeStyle("large");
const xlarge = sizeStyle("xlarge");
const text = recipes.recipe({
    base: {
        color: vars.text.color.default,
        lineHeight: vars.text.lineHeight,
        margin: 0,
        maxWidth: "25em",
    },
    variants: {
        color: {
            strong: { color: vars.text.color.strong },
            weak: { color: vars.text.color.weak },
            xweak: { color: vars.text.color.xweak },
        },
        size: {
            xlarge: xlarge,
            large: large,
            medium: medium,
            small: small,
            xsmall: xsmall,
        },
        level: {
            1: xlarge,
            2: large,
            3: medium,
        },
        textAlign: {
            start: { textAlign: "left" },
            center: { textAlign: "center" },
            end: { textAlign: "right" },
        },
        weight: {
            light: {
                fontWeight: vars.font.light.fontWeight,
            },
            regular: {
                fontWeight: vars.font.regular.fontWeight,
            },
            medium: {
                fontWeight: vars.font.medium.fontWeight,
            },
            semibold: {
                fontWeight: vars.font.semibold.fontWeight,
            },
            bold: {
                fontWeight: vars.font.bold.fontWeight,
            },
        },
    },
});

const textInput = css.style({
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit',
    WebkitAppearance: 'none',
    background: 'transparent',
    color: vars.input.value.color,
    fontWeight: vars.input.value.fontWeight,
    width: '100%',
    padding: `${vars.input.padding}`,
    borderWidth: `${vars.input.borderSize.width}`,
    borderColor: `${vars.input.borderColor.default}`,
});

exports.anchor = anchor;
exports.box = box;
exports.button = button;
exports.contentSizeVariants = contentSizeVariants;
exports.gapVariants = gapVariants;
exports.grid = grid;
exports.grommet = grommet;
exports.heading = heading;
exports.icon = icon;
exports.marginVariants = marginVariants;
exports.padVariants = padVariants;
exports.page = page;
exports.pageContent = pageContent;
exports.text = text;
exports.textInput = textInput;
exports.theme = theme;
exports.vars = vars;
