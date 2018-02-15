//document.rootElement.addEventListener('click', myAlert, false);
//   function myAlert(){ 
//      path = document.getElementById('path_V');
//      alert(path);
//
//   }


//function myToggle(){
//      var menu = document.querySelector('.path_V') // Using a class instead, see note below.
//      menu.classList.toggle('fill_red');
//
//   }

document.rootElement.addEventListener('click', myFunction, false);

function myFunction(){
      list = document.getElementsByClassName('path_class');
      console.log(list);
      secundList = document.getElementById('path_V');
      console.log(secundList);
      thirdList = document.querySelectorAll('path');
      console.log(thirdList);
   };

document.rootElement.addEventListener('click', function(){
   pat = document.querySelectorAll('path');
   console.log('pat');
});


