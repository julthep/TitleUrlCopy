document.addEventListener('copy', function(e){
    // Acquire selected character (selection character of form can not be acquired)
    var select_word = window.getSelection().toString();

    var active_element = document.activeElement;
    var value = active_element.value;
    var form_select_word = "";
    if (value) {
        // Retrieve form selection letter
        var start = parseInt(active_element.selectionStart, 10);
        var end = parseInt(active_element.selectionEnd, 10);
        form_select_word = value.substring(start, end);
    }

    // When no character is selected
    if (select_word === "" && form_select_word === "") {

        var ua = window.navigator.userAgent.toLowerCase();
        var is_mac = (ua.indexOf("mac") > -1);

        if (is_mac) {
            var new_line_word = "\n";
        } else {
            var new_line_word = "\r\n";
        }

        // Get extension options
        var gettingItem = browser.storage.sync.get();
        gettingItem.then((res) => {
            titlefirst = res.titlefirst;
            urlonly = res.urlonly;
            breakline = res.breakline;
            canonical = res.canonical;
            decodeurl = res.decodeurl;
        });

        var docurl = document.URL;
        var doctitle = document.title;
        // Use Canonical URL if any
        if (canonical) {try {docurl = document.querySelector("link[rel='canonical']").href;} catch (err) {}}
        // Decode URL
        if (decodeurl) {docurl = decodeURIComponent(docurl);}
        // Swap URL and Title
        if (titlefirst) {[docurl, doctitle] = [doctitle, docurl];}
        // Put to Clipboard
        e.clipboardData.setData("text/plain", docurl + (urlonly ? "" : (breakline ? new_line_word : " ") + doctitle));
        e.preventDefault();
    }
});
