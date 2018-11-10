(function(){

  // Check to make sure essential features are supported
  if (typeof document.querySelector === 'undefined') {
  // if not, bye!
  return;
  }

  document.addEventListener('DOMContentLoaded', function(){};
    // Diagnostic...make sure the DOMContentLoaded has fired...
    // Grab the HTML Element
      var html_tag = document.querySelector('html');
      
    console.log('DOM has loaded successfully.')
    // Go and remove the .nojs class from html
    // .. and then add a .js class
    html_tag.className= 'js';
    // if yes, continue
    })
  console.log("Hello from Javascript! You have querySelector!");
})();
