import { HtmlDestroyer } from "./html-destroyer";

var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();

$("h2").each(function() {
    var element = $(this); 
    htmlDestroyer.destroyH(element);
});