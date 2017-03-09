$(document).ready(function() {
    $("#destroyH").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyH",
                function(response) {
                    $("#destroyH")
                        .addClass("disabled");
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
                        .addClass("disabled");
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
                        .addClass("disabled");
                });
        });
    });

    $("#destroyLiText").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyLiText",
                function(response) {
                    $("#destroyLiText")
                        .addClass("disabled");
                });
        });
    });

    $("#destroyListWidth").click(function () {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyListWidth",
                function(response) {
                    $("#destroyListWidth")
                        .addClass("disabled");
                });
        });
    });

    $("#refresh").click(function () {
        chrome.tabs.getSelected(null, function(tab) {
            var reload = 'window.location.reload();';
            var removeClass = $("button").removeClass("disabled");
            chrome.tabs.executeScript(tab.id, {code: reload});
            chrome.tabs.executeScript(tab.id, {code: removeClass});
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