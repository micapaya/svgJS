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
   paths = document.querySelectorAll('path');
   paths.forEach(function(path){
       path.setAttribute('fill', '#666666');
       path.setAttribute('class', 'anim2');
   })
});


/*document.rootElement.addEventListener('click', function(){
   paths = document.querySelectorAll('path');
   paths.forEach(function(path){
       path.setAttribute('fill', '#fff');
       
   })
});
*/

/*document.rootElement.addEventListener('click', function(){
   paths = document.querySelectorAll('path');
   paths.forEach(function(path){
       path.setAttribute('class', 'anim2');
       
   })
});

*/
/*
var path = document.querySelector('path');

//On définit les points initiaux du path svg
var pathSteps = [
   {
   x : 150,
    y: 0,
    action : "M"
  },{
   x : 75,
    y: 200,
    action : "L"
  },{
   x : 225,
    y: 200,
    action : "L"
  }
]
// on iniialise une variable vide ou on stocker notre path "assemblé"
var pathStepsToString = "";

//voir plus bas
assemblePathSteps();

//le path est assemblé, on l'applique au SVG
path.setAttribute('d', pathStepsToString);


function assemblePathSteps(){
   // d'abord on remet à zero notre variable du path assemblé, comme ça on peut la réutiliser
   pathStepsToString = "";
  // pour chaque step, on ajoute "l'etape" SVG dans le path
   pathSteps.forEach( function(step){
   pathStepsToString += `${step.action} ${step.x} ${step.y} `
  });
  //on rajoute un Z à la fin pour boucler le path
  pathStepsToString += "Z";
}

var bouton = document.querySelector('button');

bouton.addEventListener('click', function(){
   // on va boucler sur nos steps du path
   pathSteps.forEach( function(step){
   //pour chaque point, on va donner une valeur aleatoire entre 0 et 200, arrondie
    //Math.round arrondit un nombre
    //Math.random genere un aleatoire entre 0 et 1
    //on fais donc math.random qu'on multiplie par 200, on a donc un nombre entre 0 et 200
    //que l'on arrondit avec Math.floor
    step.x = Math.round(Math.random() * 200);
    step.y = Math.round(Math.random() * 200);
    
    assemblePathSteps();
    path.setAttribute('d', pathStepsToString);
  })     
});

*/