if (window.location.search.match(/theme=partner/)) {
  var link = document.createElement("link");
  link.href = "themes/partner.css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
}
