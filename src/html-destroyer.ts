/// <reference path="jquery.d.ts" />
import { WordGenerator } from "./word-generator";

// $(document).ready(function(){
//     $("h2").each(function() {
//         var h1Element = $(this); 
//         destroyH(h1Element);
//     });
// });


/**
 * HtmlDestroyer
 */
export class HtmlDestroyer {
    wordGenerator: WordGenerator;
        
    destroyH (hElement:JQuery)
    {
        var currentText = hElement.text();
        var textToAppend = "test";
        if (currentText.length + textToAppend.length + 1 >= 256)
        {
            hElement.text(textToAppend);
        }
        else
        {
            hElement.text(currentText + " " + textToAppend);
        }
        
        // var timer = setTimeout(function() {
        //     var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();
        //     htmlDestroyer.destroyH(hElement)
        // }, 200);
    }
}