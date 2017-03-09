$(document).ready(function() {

    $("#destroyH").click(function() {
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyH",
                function(response) {
                    $("#destroyH")
                        .addClass("disabled");
                    $("#refresh").removeClass("disabled");
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
                    $("#refresh").removeClass("disabled");
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
                    $("#refresh").removeClass("disabled");
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
                    $("#refresh").removeClass("disabled");
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
                    $("#refresh").removeClass("disabled");
                });
        });
    });

    $("#refresh").click(function () {
        if ( !$(this).hasClass('disabled') ) {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.reload(tabs[0].id);
                $("button").removeClass("disabled");
                $("#refresh").addClass("disabled");
            });
        }
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