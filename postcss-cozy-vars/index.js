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
    case "body", ".text-body":
      decl.value = "var(--primaryTextColor)";
      break;
    case "a", ".border-primary", ".text-primary":
      decl.value = "var(--primaryColor)";
      break;
    case "a:hover":
      decl.value = "var(--primaryColorDark)";
      break;
    case ".border-secondary", ".text-secondary":
      decl.value = "var(--secondaryColor)";
      break;
    case ".border-success", ".text-success":
      decl.value = "var(--successColor)";
      break;
    case ".border-info", ".text-info":
      decl.value = "var(--infoColor)";
      break;
    case ".border-warning", ".text-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".border-danger", ".text-danger":
      decl.value = "var(--errorColor)";
      break;
    case ".text-muted":
      decl.value = "var(--disabledTextColor)";
      break;
    case ".alert-primary":
      decl.value = "var(--alert-primary-color)";
      break;
    case ".alert-secondary":
      decl.value = "var(--alert-secondary-color)";
      break;
    case ".alert-danger":
      decl.value = "var(--alert-error-color)";
      break;
    case ".alert-warning":
      decl.value = "var(--alert-warning-color)";
      break;
    case ".alert-success":
      decl.value = "var(--alert-success-color)";
      break;
    case ".alert-info":
      decl.value = "var(--alert-info-color)";
      break;
    // default:
    //   console.log(decl.parent.selector);
  }
}

function changeBackground(decl) {
  switch (decl.parent.selector) {
    case "body":
      decl.value = "var(--defaultBackgroundColor)";
      break;
    case ".bg-primary", ".progress-bar":
      decl.value = "var(--primaryColor)";
      break;
    case ".bg-secondary":
      decl.value = "var(--secondaryColor)";
      break;
    case ".bg-success":
      decl.value = "var(--successColor)";
      break;
    case ".bg-info":
      decl.value = "var(--infoColor)";
      break;
    case ".bg-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".bg-danger":
      decl.value = "var(--errorColor)";
      break;
    case ".bg-body":
      decl.value = "var(--defaultBackgroundColor)";
      break;
    case ".bg-paper":
      decl.value = "var(--paperBackgroundColor)";
      break;
    case ".alert-primary":
      decl.value = "var(--alert-primary-background-color)";
      break;
    case ".alert-secondary":
      decl.value = "var(--alert-secondary-background-color)";
      break;
    case ".alert-danger":
      decl.value = "var(--alert-error-background-color)";
      break;
    case ".alert-warning":
      decl.value = "var(--alert-warning-background-color)";
      break;
    case ".alert-success":
      decl.value = "var(--alert-success-background-color)";
      break;
    case ".alert-info":
      decl.value = "var(--alert-info-background-color)";
    // default:
    //   console.log(decl.parent.selector);
  }
}

module.exports.postcss = true;
