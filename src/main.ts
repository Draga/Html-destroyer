// This is just trampoline code to deal with Chrome plugin comunications.
// Receive orders from the plugin popup and call the relevant HtmlDestroyer method.

import { HtmlDestroyer } from "./HtmlDestroyer";
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
        case "destroyLiText":
            destroyLiText();
            break;
        default:
            throw new Error(`Unimplemented destruction "${request}"`);
        }

        // TODO: sends back request just to prove the chan is bidirectional,
        // now do something clever with it!
        sendResponse(request);
    }
);

function destroyH() {
    $(document)
        .ready(() => {
            $("h1, h2, h3, h4, h5, h6")
                .each(function() {
                    let element = $(this);
                    htmlDestroyer.textDestroyer.destroyText(element);
                });
        });
}

function destroyImg() {
    $(document)
        .ready(() => {
            $("img")
                .each(function() {
                    let element = $(this);
                    htmlDestroyer.imgDestroyer.destroyImg(element);
                });
        });
}

function destroyP() {
    $(document)
        .ready(() => {
            // Using parent() on an array returns a distinct list.
            var allPParentsElements = $("p").parent();
            allPParentsElements.each(function() {
                let element = $(this);
                htmlDestroyer.pDestroyer.destroyPParent(element);
            });
        });
}

function destroyLiText() {
    $(document)
        .ready(() => {
            var liElements = $("li");
            liElements.each(function() {
                let element = $(this);
                htmlDestroyer.textDestroyer.destroyText(element);
            });
        });
}