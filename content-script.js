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

        var docurl = "";
        var doctitle = document.title;

        try {
            docurl = document.querySelector("link[rel='canonical']").href;
        }
        catch (err) {
            docurl = document.URL;
        }

        var decurl = decodeURIComponent(docurl);

        e.clipboardData.setData("text/plain", decurl + " " + doctitle);

        e.preventDefault();
    }
});
