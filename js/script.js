(function() { 

  var btn_open = document.getElementById('btn_open');
  var btn_close = document.getElementById('btn_close');
  var mobNav = document.getElementsByClassName('mob-nav')[0];
  
  btn_open.addEventListener('click', function () {
    btn_close.classList.toggle('nav__btn_active');
    btn_open.classList.toggle('nav__btn_active');
    mobNav.classList.toggle('mob-nav_active');
  });
  btn_close.addEventListener('click', function () {
    btn_close.classList.toggle('nav__btn_active');
    btn_open.classList.toggle('nav__btn_active');
    mobNav.classList.toggle('mob-nav_active');
  });
  
  var animateElements = document.getElementsByClassName('animate');
  var clientHeight = document.documentElement.clientHeight;
  var currentElementHeight;
  
  var arr = [];
  
  for(var i = 0; i < animateElements.length; i++) {
    arr.push(animateElements[i]);
  }
  
  function animate () {
    console.log(arr.length);
    for(var i = 0; i < arr.length; i++) {
      currentElementHeight = arr[i].getBoundingClientRect();
      clientHeight = document.documentElement.clientHeight;
      
      if(currentElementHeight.top*100/clientHeight <= 80 ) {
        
        arr[i].classList.add('animated');
        arr.splice(i, 1);
        i--; 
      }
    }
  }
  animate();
  
   window.addEventListener("scroll", animate);

  
})();