import { HtmlDestroyer } from "./html-destroyer";

var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();

$("h2").each(function() {
    var element = $(this); 
    var destroyElement = function() {
        var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();
        htmlDestroyer.destroyH(element);
    };
    var intervalId = setInterval(destroyElement, 200);
});