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
            // Img elements.
            $("img")
                .each(function() {
                    const element = $(this);
                    flipAttributesCycle(element, "src", "data-src");
                });

            /*// All elements, find the ones with background-image set.
            // TODO: don't target img elements?
            $("*")
                .each(() => {
                    const element = $(this);
                    if (element.css("background-image")) {
                        cssToAttributeCycle(element, "background-image", "css-background-image");
                    }
                });*/
        });
}

function destroyHopeOfBeingAnOnlyChild() {
    const onlyChildPs = $("p")
        .filter(function() {
            return ($(this).siblings("p").length > 0);
        });


}

function destroyChangesOfNeverGettingType2Diabetes() {

}

function flipAttributesCycle(element: JQuery, attributeFrom: string, attributeTo: string) {
    element.attr(attributeTo, element.attr(attributeFrom));
    element.attr(attributeFrom, "");
    $(window).trigger("resize");
    setTimeout(() => {
            flipAttributesCycle(element, attributeTo, attributeFrom);
        },
        Math.random() * 500 + 50);
}

/*var cssToAttributeCycle = (element: JQuery, cssProperty: string, attributeName: string) => {
    const cssPropertyValue = element.css(cssProperty);
    element.attr(attributeName, cssPropertyValue);
    element.css(cssProperty, "");

    setTimeout(() => {
            attributeToCssCycle(element, attributeName, cssProperty);
        },
        Math.random() * 500 + 50);
};

var attributeToCssCycle = (element: JQuery, cssProperty: string, attributeName: string) => {
    const attributeValue = element.attr(attributeName);
    element.css(cssProperty, attributeValue);
    element.attr(attributeName, "");

    setTimeout(() => {
            cssToAttributeCycle(element, attributeName, cssProperty);
        },
        Math.random() * 500 + 50);
};*/