/**
    This is the example app using the Gmailr API.

    In this file, you have access to the Gmailr object.
 */

Gmailr.debug = true; // Turn verbose debugging messages on

Gmailr.init(function(G) {
    G.insertCss(getData('css_path'));
    G.insertTop($("<div id='projects'><h3>Projects</h3></div>"));
    var labels = $("a[href*=label]").clone();
    labels.each(function(i, el) {
      G.insertSidebar(el);
      G.insertSidebar('<br>');
    })

    var status = function(msg) {
        G.$('#gmailr #status').html(msg);
    };

    G.observe('archive', function(num) {
        status('You archived ' + num + ' emails.');
    });

    G.observe('delete', function(c) {
        status('You deleted ' + c + ' emails.');
    });

    G.observe('spam', function(c) {
        status('You marked ' + c + ' emails as spam.');
    });

    G.observe('compose', function() {
        status('You composed an email.');
    });

    G.observe('reply', function(c) {
        status('You replied to an email.');
    });

    G.observe('applyLabel', function(label,emails) {
       status("you applied label " + label + " to " + emails.length + " email(s)");
    });
});
