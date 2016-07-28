"use strict";
/// <reference path="jquery.d.ts" />
require("word-generator");
// $(document).ready(function(){
//     $("h2").each(function() {
//         var h1Element = $(this); 
//         destroyH(h1Element);
//     });
// });
/**
 * HtmlDestroyer
 */
var HtmlDestroyer = (function () {
    function HtmlDestroyer(parameters) {
        $(document).ready(function () {
            $("h2").each(function () {
                var h1Element = $(this);
                destroyH(h1Element);
            });
        });
    }
    HtmlDestroyer.prototype.destroyH = function (hElement) {
        var currentText = hElement.text();
        var textToAppend = "test";
        if (currentText.length + textToAppend.length + 1 >= 256) {
            hElement.text(textToAppend);
        }
        else {
            hElement.text(currentText + " " + textToAppend);
        }
        // var timer = setTimeout(function() {
        //     var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();
        //     htmlDestroyer.destroyH(hElement)
        // }, 200);
    };
    return HtmlDestroyer;
}());
