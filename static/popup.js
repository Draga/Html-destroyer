$(document).ready(function() {
    $("#destroyH").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyH",
                function(response) {
                    $("#destroyH")
                        .addClass("disabled")
                        .text("Destroying H");
                });
        });
    });

    $("#destroyImg").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyImg",
                function(response) {
                    $("#destroyImg")
                        .addClass("disabled")
                        .text("Destroying Img");
                });
        });
    });

    $("#destroyP").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyP",
                function(response) {
                    $("#destroyP")
                        .addClass("disabled")
                        .text("Destroying P");
                });
        });
    });
});

function runOnActiveTab(functionOnTab) {
    var tabId;
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
        functionOnTab(tabs[0]);
    });
}