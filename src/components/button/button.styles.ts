import jss from "jss";
import preset from "jss-preset-default";
import * as color from "color";

jss.setup(preset());

const styles = {
  button: {
    width: "auto",
    borderRadius: "4px",
    padding: "0.75rem 1.5rem",
    border: "none",
    fontSize: 14,
    "&:hover": {
      cursor: "pointer",
      boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
    },
  },
  ctaButton: {
    extend: "button",
    "&:hover": {
      background: color("blue").darken(0.3).hex(),
    },
  },
  // "@media (min-width: 1024px)": {
  //   button: {
  //     width: 200,
  //   },
  // },
};

const { classes } = jss
  .createStyleSheet(styles, {
    classNamePrefix: "keller-ui",
    generateId: (r, s) => s.options.classNamePrefix + "__" + r.key,
  })
  .attach();

export { classes };
