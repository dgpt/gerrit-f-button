/* eslint-env browser */
/* eslint quotes:0, strict:0 */

var HOST = "/plugins/gitblit/raw/x_gerrit.git/master/";

function generateURLFor(filePath) {
  return HOST + filePath.replace(/^\.\/|^\//, '');
}

var XGerrit = {
  loadScript: function(filePath) {
    var script = document.createElement('script');
    script.src = generateURLFor(filePath);
    script.type = 'text/javascript';
    script.async = false;
    document.head.appendChild(script);
  },

  loadStylesheet: function(filePath) {
    var node = document.createElement('link');
    node.href = generateURLFor(filePath);
    node.rel = 'stylesheet';
    node.type = 'text/css';
    document.head.appendChild(node);
  }
};

window.XGerrit = XGerrit;

XGerrit.loadStylesheet('./index.css');
XGerrit.loadScript('./gerrit-f-button/index.js');
XGerrit.loadStylesheet('./gerrit-f-button/index.css');
