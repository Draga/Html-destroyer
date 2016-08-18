$(document).ready(function() {
    $("#destroyH").click(function() {
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(
                    tabs[i].id,
                    "destroyH",
                    function(response) {
                        $("#destroyH").text("Destroying H");
                    });
            }
        });
    });

    $("#destroyImg").click(function() {
        chrome.tabs.query({}, function(tabs) {
            for (var i = 0; i < tabs.length; i++) {
                chrome.tabs.sendMessage(
                    tabs[i].id,
                    "destroyImg",
                    function(response) {
                        $("#destroyImg").text("Destroying Img");
                    });
            }
        });
    });
});