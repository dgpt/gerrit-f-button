/* eslint-env browser */
/* eslint quotes:0, strict:0 */

var XGerrit = {
  loadScript: function(filePath) {
    var script = document.createElement('script');
    script.src = filePath;
    script.type = 'text/javascript';
    script.async = false;
    document.head.appendChild(script);
  },

  loadStylesheet: function(filePath) {
    var node = document.createElement('link');
    node.href = filePath;
    node.rel = 'stylesheet';
    node.type = 'text/css';
    document.head.appendChild(node);
  }
};

window.XGerrit = XGerrit;

XGerrit.loadStylesheet('./index.css');
XGerrit.loadScript('./gerrit-f-button/index.js');
