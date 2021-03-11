const processed = Symbol("processed");

module.exports = (opts = {}) => {
  return {
    postcssPlugin: "postcss-cozy-vars",
    Declaration: {
      "color": (decl) => {
        if (decl[processed]) {
          return;
        }
        changeColor(decl);
        decl[processed] = true;
      },
      "background-image": (decl) => {
        if (decl.parent.selector.match(/\.form-switch/)) {
          decl.parent.remove();
        }
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
        changeBorderColor(decl);
        decl[processed] = true;
      },
      "border": (decl) => {
        if (decl[processed]) {
          return;
        }
        changeBorder(decl);
        decl[processed] = true;
      },
      "box-shadow": (decl) => {
        if (decl.parent.selector.match(/\.btn-check/)) {
          decl.parent.remove();
        }
      },
    },
  };
};

function changeColor(decl) {
  if (decl.parent.selector.match(/\.btn-check:active/)) {
    decl.remove();
    return;
  }
  switch (decl.parent.selector) {
    case "body":
    case ".text-body":
    case ".btn-outline-info":
    case ".btn-outline-info:hover":
    case ".form-control":
    case ".form-control:focus":
    case ".form-select":
    case ".form-select:focus":
    case ".input-group-text":
      decl.value = "var(--primaryTextColor)";
      break;
    case ".btn":
    case ".btn:hover":
    case ".btn-primary":
    case ".btn-primary:hover":
    case ".btn-secondary":
    case ".btn-secondary:hover":
    case ".btn-success":
    case ".btn-success:hover":
    case ".btn-warning":
    case ".btn-warning:hover":
    case ".btn-info":
    case ".btn-info:hover":
      decl.value = "var(--primaryTextContrastColor)";
      break;
    case "a":
    case ".btn-link":
    case ".text-primary":
    case ".btn-outline-primary":
    case ".btn-outline-primary:hover":
      decl.value = "var(--primaryColor)";
      break;
    case "code":
      decl.value = "#0b3672"; // Primary 800, only used in docs
      break;
    case "a:hover":
    case ".btn-link:hover":
      decl.value = "var(--primaryColorDark)";
      break;
    case ".text-secondary":
    case ".btn-outline-secondary":
    case ".btn-outline-secondary:hover":
      decl.value = "var(--secondaryColor)";
      break;
    case ".text-success":
    case ".btn-outline-success":
    case ".btn-outline-success:hover":
    case ".valid-feedback":
      decl.value = "var(--successColor)";
      break;
    case ".text-info":
      decl.value = "var(--infoColor)";
      break;
    case ".text-warning":
    case ".btn-outline-warning":
    case ".btn-outline-warning:hover":
      decl.value = "var(--warningColor)";
      break;
    case ".text-danger":
    case ".invalid-feedback":
      decl.value = "var(--errorColor)";
      break;
    case ".btn-outline-danger":
    case ".btn-outline-danger:hover":
      decl.value = "var(--btn-intent-outlined-text-color)";
      break;
    case ".btn-danger":
    case ".btn-danger:hover":
      decl.value = "var(--btn-intent-text-color)";
      break;
    case ".text-muted":
    case ".form-text":
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
  let selector = decl.parent.selector;
  let matched = selector.match(
    /\.btn(-outline)?-(primary|secondary|success|info|warning|danger):active/
  );
  if (matched) {
    selector = matched[0].replace(":active", ":hover");
  }
  switch (selector) {
    case "body":
    case ".bg-paper":
    case ".btn-outline-secondary":
    case ".btn-outline-success":
    case ".btn-outline-info":
    case ".btn-outline-warning":
    case ".btn-outline-danger":
    case ".form-control":
    case ".form-control:focus":
    case ".form-select":
    case ".form-select:focus":
    case ".form-check-input":
    case ".card":
      decl.value = "var(--paperBackgroundColor)";
      break;
    case ".btn-outline-primary":
      decl.value = "var(--btn-ghost-background-color)";
      break;
    case ".btn-outline-primary:hover":
      decl.value = "var(--btn-ghost-hover-color)";
      break;
    case ".btn-outline-danger:hover":
      decl.value = "var(--btn-intent-outlined-hover-color)";
      break;
    case ".bg-primary":
    case ".progress-bar":
    case ".btn-primary":
    case ".form-check-input:checked":
      decl.value = "var(--primaryColor)";
      break;
    case ".btn-primary:hover":
      decl.value = "var(--primaryColorDark)";
      break;
    case ".bg-secondary":
    case ".btn-secondary":
      decl.value = "var(--secondaryColor)";
      break;
    case ".btn-secondary:hover":
      decl.value = "var(--secondaryColorDark)";
      break;
    case ".bg-success":
    case ".btn-success":
      decl.value = "var(--successColor)";
      break;
    case ".bg-info":
    case ".btn-info":
    case ".input-group-text":
      decl.value = "var(--infoColor)";
      break;
    case ".btn-info:hover":
      decl.value = "var(--primaryTextColor)";
      break;
    case ".btn-outline-info:hover":
      decl.value = "var(--btn-secondary-hover-color)";
      break;
    case ".bg-warning":
    case ".btn-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".btn-success:hover":
    case ".btn-warning:hover":
    case ".form-control::placeholder":
      decl.value = "var(--secondaryTextColor)";
      break;
    case ".btn-danger":
    case ".bg-danger":
      decl.value = "var(--errorColor)";
      break;
    case ".btn-danger:hover":
      decl.value = "var(--errorColorDark)";
      break;
    case ".bg-body":
      decl.value = "var(--defaultBackgroundColor)";
      break;
    case ".alert-primary":
      decl.value = "var(--alert-primary-background-color)";
      break;
    case ".alert-secondary":
    case ".btn-outline-secondary:hover":
      decl.value = "var(--alert-secondary-background-color)";
      break;
    case ".alert-danger":
      decl.value = "var(--alert-error-background-color)";
      break;
    case ".alert-warning":
    case ".btn-outline-warning:hover":
      decl.value = "var(--alert-warning-background-color)";
      break;
    case ".alert-success":
    case ".btn-outline-success:hover":
      decl.value = "var(--alert-success-background-color)";
      break;
    case ".alert-info":
      decl.value = "var(--alert-info-background-color)";
      break;
    // default:
    //   console.log(`- "${decl.parent.selector}"`);
  }
}

function changeBorderColor(decl) {
  if (decl.parent.selector.match(/\.btn-check:active/)) {
    decl.remove();
    return;
  }
  switch (decl.parent.selector) {
    case ".border-primary":
    case ".form-control:focus":
    case ".form-select:focus":
    case ".form-check-input:focus":
    case ".form-check-input:checked":
      decl.value = "var(--primaryColor)";
      break;
    case ".btn-outline-primary":
    case ".btn-outline-primary:hover":
      decl.value = "var(--btn-ghost-border-color)";
      break;
    case ".border-secondary":
    case ".btn-outline-secondary":
    case ".btn-outline-secondary:hover":
      decl.value = "var(--secondaryColor)";
      break;
      decl.value = "var(--secondaryColorDark)";
      break;
    case ".btn-outline-success":
    case ".btn-outline-success:hover":
    case ".border-success":
      decl.value = "var(--successColor)";
      break;
    case ".btn-outline-info":
    case ".btn-outline-info:hover":
    case ".border-info":
      decl.value = "var(--btn-secondary-border-color)";
      break;
    case ".btn-outline-warning":
    case ".btn-outline-warning:hover":
    case ".border-warning":
      decl.value = "var(--warningColor)";
      break;
    case ".btn-outline-danger":
    case ".btn-outline-danger:hover":
    case ".border-danger":
      decl.value = "var(--btn-intent-outlined-border-color)";
      break;
    case ".btn-primary":
    case ".btn-primary:hover":
    case ".btn-secondary":
    case ".btn-secondary:hover":
    case ".btn-success":
    case ".btn-success:hover":
    case ".btn-info":
    case ".btn-info:hover":
    case ".btn-warning":
    case ".btn-warning:hover":
    case ".btn-danger":
    case ".btn-danger:hover":
      decl.value = "transparent";
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

function changeBorder(decl) {
  switch (decl.parent.selector) {
    case ".form-control":
    case ".form-select":
    case ".input-group-text":
      decl.value = "1px solid var(--btn-secondary-border-color)";
      break;
    // default:
    //   console.log(`- "${decl.parent.selector}"`);
  }
}

module.exports.postcss = true;
