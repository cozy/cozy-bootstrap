const processed = Symbol("processed");

module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-cozy-vars",
    Declaration: {
      color: (decl) => {
        if (decl[processed]) {
          return;
        }
        changeColor(decl);
        decl[processed] = true;
      },
      "background-color": (decl) => {
        if (decl[processed]) {
          return;
        }
        changeBackground(decl);
        decl[processed] = true;
      },
    },
  };
};

function changeColor(decl) {
  switch (decl.parent.selector) {
    case ".alert-primary":
      decl.value = "var(--alertPrimaryColor)";
      break;
    case ".alert-secondary":
      decl.value = "var(--alertSecondaryColor)";
      break;
    case ".alert-danger":
      decl.value = "var(--alertErrorColor)";
      break;
    case ".alert-warning":
      decl.value = "var(--alertWarningColor)";
      break;
    case ".alert-success":
      decl.value = "var(--alertSuccessColor)";
      break;
    case ".alert-info":
      decl.value = "var(--alertInfoColor)";
      break;
    // default:
    //   console.log(decl.parent.selector);
  }
}

function changeBackground(decl) {
  switch (decl.parent.selector) {
    case ".alert-primary":
      decl.value = "var(--alertPrimaryBackgroundColor)";
      break;
    case ".alert-secondary":
      decl.value = "var(--alertSecondaryBackgroundColor)";
      break;
    case ".alert-danger":
      decl.value = "var(--alertErrorBackgroundColor)";
      break;
    case ".alert-warning":
      decl.value = "var(--alertWarningBackgroundColor)";
      break;
    case ".alert-success":
      decl.value = "var(--alertSuccessBackgroundColor)";
      break;
    case ".alert-info":
      decl.value = "var(--alertInfoBackgroundColor)";
    // default:
    //   console.log(decl.parent.selector);
  }
}

module.exports.postcss = true;
