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
      "border-color": (decl) => {
        if (decl[processed]) {
          return;
        }
        changeBorder(decl);
        decl[processed] = true;
      },
    },
  };
};

function changeColor(decl) {
  switch (decl.parent.selector) {
    case "body":
    case ".text-body":
      decl.value = "var(--primaryTextColor)";
      break;
    case "a":
    case ".text-primary":
      decl.value = "var(--primaryColor)";
      break;
    case "code":
      decl.value = "#0b3672"; // Primary 800
      break;
    case "a:hover":
      decl.value = "var(--primaryColorDark)";
      break;
    case ".text-secondary":
      decl.value = "var(--secondaryColor)";
      break;
    case ".text-success":
      decl.value = "var(--successColor)";
      break;
    case ".text-info":
      decl.value = "var(--infoColor)";
      break;
    case ".text-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".text-danger":
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
    //   console.log(`- "${decl.parent.selector}"`);
  }
}

function changeBackground(decl) {
  switch (decl.parent.selector) {
    case "body":
    case ".bg-paper":
      decl.value = "var(--paperBackgroundColor)";
      break;
    case ".bg-primary":
    case ".progress-bar":
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
      break;
    case ".card":
      decl.value = "var(--paper-color)";
      break;
    // default:
    //   console.log(`- "${decl.parent.selector}"`);
  }
}

function changeBorder(decl) {
  switch (decl.parent.selector) {
    case ".border-primary":
      decl.value = "var(--primaryColor)";
      break;
    case ".border-secondary":
      decl.value = "var(--secondaryColor)";
      break;
    case ".border-success":
      decl.value = "var(--successColor)";
      break;
    case ".border-info":
      decl.value = "var(--infoColor)";
      break;
    case ".border-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".border-danger":
      decl.value = "var(--errorColor)";
      break;
    case ".alert-primary":
    case ".alert-secondary":
    case ".alert-success":
    case ".alert-info":
    case ".alert-warning":
    case ".alert-danger":
      decl.remove();
      break;
    // default:
    //   console.log(`- "${decl.parent.selector}"`);
  }
}

module.exports.postcss = true;
