$(document).ready(function() {

    // LOOP THROUGH LOCAL STORAGE
    for (var i = 0; i < localStorage.length; i++){
        id = localStorage.getItem(localStorage.key(i));
        active('#' + id);
    }

    // PAGE REFRESH
    /*chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
        if (changeInfo.status == 'complete') {
            window.localStorage.clear();
            window.close();
            console.log(localStorage);
        }
    });*/

    $("#refresh").click(function () {
        if ( !$(this).hasClass('disabled') ) {
            localStorage.clear();
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                chrome.tabs.reload(tabs[0].id);
                $("button").removeClass("disabled");
                $("#refresh").addClass("disabled");
            });
        }
    });

    $("#destroyH").click(function() {
        id = '#' + event.target.id;
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyH",
                function(response) {
                    active(id);
                    localStorage.destroyH = 'destroyH';
                });
        });
    });

    $("#destroyImg").click(function() {
        id = '#' + event.target.id;
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyImg",
                function(response) {
                    active(id);
                    localStorage.destroyImg = 'destroyImg';
                });
        });
    });

    $("#destroyP").click(function() {
        id = '#' + event.target.id;
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyP",
                function(response) {
                    active(id);
                    localStorage.destroyP = 'destroyP';
                });
        });
    });

    $("#destroyLiText").click(function() {
        id = '#' + event.target.id;
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyLiText",
                function(response) {
                    active(id);
                    localStorage.destroyLiText = 'destroyLiText';
                });
        });
    });

    $("#destroyListWidth").click(function () {
        id = '#' + event.target.id;
        runOnActiveTab(function(tab) {
            chrome.tabs.sendMessage(
                tab.id,
                "destroyListWidth",
                function(response) {
                    active(id);
                    localStorage.destroyListWidth = 'destroyListWidth';
                });
        });
    });

});

// PREVENT CLICK EVENT ON ACTIVE LINKS
function active(id) {
    $(id).addClass("disabled");
    $("#refresh").removeClass("disabled");
}

function runOnActiveTab(functionOnTab) {
    var tabId;
    chrome.tabs.query({
        currentWindow: true,
        active: true
    }, function(tabs) {
        functionOnTab(tabs[0]);
    });
}