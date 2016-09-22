// This is just trampoline code to deal with Chrome plugin comunications.
// Receive orders from the plugin popup and call the relevant HtmlDestroyer method.

import { HtmlDestroyer } from "./html-destroyer";
var htmlDestroyer = new HtmlDestroyer();

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        switch (request) {
        case "destroyH":
            destroyH();
            break;
        case "destroyImg":
            destroyImg();
            break;
        case "destroyP":
            destroyP();
            break;
        default:
            throw new Error(`Unimplemented destruction "${request}"`);
        }
        sendResponse(request);
    }
);

function destroyH() {
    $(document)
        .ready(() => {
            $("h1, h2, h3, h4, h5, h6")
                .each(function() {
                    var element = $(this);
                    htmlDestroyer.destroyH(element);
                });
        });
}

function destroyImg() {
    $(document)
        .ready(() => {
            $("img")
                .each(function() {
                    const element = $(this);
                    htmlDestroyer.destroyImg(element);
                });
        });
}

function destroyP() {
    $(document)
        .ready(() => {
            // Using parent() on an array returns a distinct list.
            var allPParentsElements = $("p").parent();
            allPParentsElements.each(function() {
                const element = $(this);
                htmlDestroyer.destroyPParent(element);
            });
        });
}

function destroyHopeOfBeingAnOnlyChild() {
    const onlyChildPs = $("p")
        .filter(function() {
            return ($(this).siblings("p").length > 0);
        });


}