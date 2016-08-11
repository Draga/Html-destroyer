System.import('main')

// $(document).ready(function(){
//     $("h2").each(function() {
//         var h1Element = $(this); 
//         this.destroyH(h1Element);
//     });
// });

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request == "destroyH")
      $(document).ready(function() {
        $("h1,h2,h3,h4,h5,h6").each(function() {
          var h1Element = $(this);
          htmlDestroyer.destroyH(h1Element);
        });
      });
  });