import { HtmlDestroyer } from "./html-destroyer";

var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();

$("h1,h2,h3,h4,h5,h6").each(function() {
    var element = $(this); 
    var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();
    
    var destroyElement = function() {
        htmlDestroyer.destroyH(element);
    };
    var intervalId = setInterval(destroyElement, 200);
});