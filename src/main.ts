import { HtmlDestroyer } from "./html-destroyer";

var htmlDestroyer = new HtmlDestroyer();

chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
        switch (request) {
        case "destroyH":
            destroyH();
            sendResponse("destroyH");
            break;
        case "destroyImg":
            destroyImg();
            sendResponse("destroyImg");
            break;
        }
    }
);

function destroyH() {
    $(document)
        .ready(() => {
            $("h1, h2, h3, h4, h5, h6")
                .each(function() {
                    var element = $(this);
                    var destroyElement = () => {
                        htmlDestroyer.destroyH(element);
                        $(window).trigger("resize");
                        setTimeout(destroyElement, Math.random() * 100 + 50);
                    };
                    destroyElement();
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

function destroyHopeOfBeingAnOnlyChild() {
    const onlyChildPs = $("p")
        .filter(function() {
            return ($(this).siblings("p").length > 0);
        });


}