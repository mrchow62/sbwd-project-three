 /* (function(){
  // Check to make sure essential features are supported
  if (typeof document.querySelector === 'undefined') {
    // No? Then bye!!!
    return;
  }

  document.addEventListener('DOMContentLoaded', function(){
    // Diagnostic...make sure DOMContentLoaded has fired...
    console.log('OMG the DOM has loaded!');

    // Grab the HTML element:
    var html_tag = document.querySelector('html');

    // Go and remove the .nojs class from <html>...
    html_tag.classList.remove('nojs');

    // And then add the .js class to <html>:
    html_tag.classList.add('js');
    var heading_label = 'Menu';
    var heading = document.querySelector('links');
    heading.innerHTML = '<a href="#links">'+heading_label+'</a>';
    heading.addEventListener('click',function(){
      var content = document.querySelector('#links');
      var label = document.querySelector('links a');

      content.classList.toggle('visible');

      if (label.textContent === heading_label) {
        label.textContent = 'Click to Hide Content';
      } else {
        label.textContent = heading_label;
      }
    })
  });

  console.log("Hello from JavaScript! You have querySelector!");
})();

/*
