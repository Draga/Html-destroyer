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
      destroyH();      
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
          var destroyElement = function() {
              htmlDestroyer.destroyImg(element);
              $(window).trigger("resize");
          };
          var intervalId = setInterval(destroyElement, 200);
        });        
      });
}