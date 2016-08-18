import { HtmlDestroyer } from "./html-destroyer";

var htmlDestroyer:HtmlDestroyer = new HtmlDestroyer();

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request == "destroyH")
    {
      destroyH();      
      sendResponse("destroyH");
    }
    else if (request == "destroyImg")
    {
      destroyImg();      
      sendResponse("destroyImg");
    }
  });

function destroyH() {  
      $(document).ready(function() {
        $("h1,h2,h3,h4,h5,h6").each(function() {
          var element = $(this);
          var destroyElement = function() {
              htmlDestroyer.destroyH(element);
              $(window).trigger("resize");
              setTimeout(destroyElement, Math.random() * 100 + 50);
          };
          destroyElement();
        });        
      });
}

function destroyImg() {
      $(document).ready(function() {
        $("img").each(function() {
          var element = $(this);
          flipAttributesCycle(element, "src", "data-src")
        });        
      });
}

function destroyHopeOfBeingAnOnlyChild() {
  const onlyChildPs = $('p').filter(function () {
    return ($(this).siblings('p').length > 0);
  });


}

function destroyChangesOfNeverGettingType2Diabetes() {

}

function flipAttributesCycle(element:JQuery, attributeFrom:string, attributeTo:string) {
  element.attr(attributeTo, element.attr(attributeFrom));
  element.attr(attributeFrom, "");
  $(window).trigger("resize");
  setTimeout(function(){
    flipAttributesCycle(element, attributeTo, attributeFrom);
  }, Math.random() * 500 + 50);
}