/**
  This is the bootstrapping code that sets up the scripts to be used in the
  Gmailr example Chrome plugin. It does the following:

  1) Sets up data DOM elements that allow strings to be shared to injected scripts.
  2) Injects the scripts necessary to load the Gmailr API into the Gmail script environment.
*/

// Only run this script in the top-most frame (there are multiple frames in Gmail)
if(top.document == document) {

    // Adds a data DOM element that simply holds a string in an attribute, to be read
    // by the injected scripts.
    var addData = function(id, val) {
      var body = document.getElementsByTagName("body")[0];
      var div = document.createElement('div');
      div.setAttribute('data-val', val);
      div.id = id + "_gmailr_data";
      div.setAttribute('style', "display:none");
      body.appendChild(div);

    };

    // Loads a script
    var loadScript = function(path) {
      var headID = document.getElementsByTagName("head")[0];
      var newScript = document.createElement('script');
      newScript.type = 'text/javascript';
      newScript.src = path;
      headID.appendChild(newScript);
    };

    var loadTemplates = function(path) {
      var head = document.getElementsByTagName("head")[0];
      head.appendChild()
    };

    // Pass data to inserted scripts via DOM elements
    addData("main_css_path",          chrome.extension.getURL("main.css"));
    addData("bootstrap_css_path",     chrome.extension.getURL("lib/css/bootstrap.min.css"));
    addData("jquery_path",            chrome.extension.getURL("lib/jquery.1.10.1.min.js"));
    addData("jquery_bbq_path",        chrome.extension.getURL("lib/jquery.ba-bbq.min.js"));
    addData("gmailr_path",            chrome.extension.getURL("lib/gmailr/gmailr.js"));
    addData("underscore_path",        chrome.extension.getURL("lib/underscore.js"));
    addData("backbone_path",          chrome.extension.getURL("lib/backbone.js"));
    addData("bootstrap_path",          chrome.extension.getURL("lib/bootstrap.min.js"));
    addData("hbs_path",               chrome.extension.getURL("lib/handlbars.runtime.js"));
    addData("templates_path",         chrome.extension.getURL("templates.js"));
    addData("views_path",             chrome.extension.getURL("views.js"));
    addData("main_path",              chrome.extension.getURL("main.js"));

    // Load the initialization scripts
    loadScript(chrome.extension.getURL("lib/lab.js"));
    loadScript(chrome.extension.getURL("lib/gmailr/init.js"));
  };
