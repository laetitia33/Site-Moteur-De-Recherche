$(function() {
	$( ".box1" ).draggable();
});

$(function() {
	$( ".containerClock" ).draggable();
});

$(function() {
	$( ".menu" ).draggable();
});


$(function() {
	$( ".wrapper" ).draggable();
});

 //ouverture clock
$( "a#btnClock" ).click(function() {
  $( ".containerClock" ).fadeIn( "slow", function() {
    // Animation complete
  });
});

 //ouverture/fermeture heure
$( "#stopClock" ).click(function() {
  $( ".containerClock" ).fadeOut( "slow", function() {
    // Animation complete
  });
});



  //ouverture Meteo
$( "a#btnMeteo" ).click(function() {
  $( "#meteo" ).fadeIn( "slow", function() {
    // Animation complete
  });
});

 //ouverture/fermeture meteo
$( "#stopMeteo" ).click(function() {
  $( "#meteo" ).fadeOut( "slow", function() {
    // Animation complete
  });
});

  //ouverture Actu
$( "a#btnActu" ).click(function() {
  $( ".wrapper" ).fadeIn( "slow", function() {
    // Animation complete
  });
});

 //ouverture/fermeture Actu
$( "#stopActu" ).click(function() {
  $( ".wrapper" ).fadeOut( "slow", function() {
    // Animation complete
  });
});


//mettre en premier plan la recherhce google
var clock = document.querySelector('.containerClock');
var tlt = document.querySelector('.tlt');
var menu = document.querySelector('.menu');
var btnGoogle= document.getElementById('btnGoogle');
var meteo= document.getElementById('meteo');

     if(btnGoogle.addEventListener('click', function() {
         meteo.style.zIndex = "-2";
         menu.style.zIndex = "-2";
         tlt.style.zIndex = "-2";
         clock.style.zIndex = "-2";
            }));

var action = document.querySelector('.action');

     if(action.addEventListener('click', function() {
         meteo.style.zIndex = "5";
         menu.style.zIndex = "10";
         tlt.style.zIndex = "2";
         clock.style.zIndex = "3";
            }));


/* date animée*/

 $(function(){
    $('.tlt').textillate({ 
      
       in : {
            effect:'fadeIn'
           
        },
  
      
    });
});

/*date*/

var date = new Date(),
    year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getUTCDate(),
    days = [ " Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    months = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novambre", "Decembre"];

document.getElementById('daymonth').innerHTML = day + '  ' + months[month] ;
document.getElementById('year').innerHTML = ' '+ year;

function time() {
  var d = new Date(),
      s = d.getSeconds() * 6,
      m = d.getMinutes() * 6 + (s / 60),
      h = d.getHours() % 12 / 12 * 360 + (m / 12);
  
  document.getElementById('day').innerHTML = days[d.getDay()] + " , ";
}
time();



/*
//Musique en fond sur site
 var audio=document.createElement('audio');
 var first=true;
      window.addEventListener('mousedown',onmousedown);

    function onmousedown(){
       if(!first) return;
       first=false;
       audio.src="assets/musique/foret.mp3";
       audio.play();
    }
//arreter musique au clique
*/


var nyan = document.getElementById('foret');
var nyanBtn = document.getElementById('mutePlay');


function playPause(song){
   if (song.paused && song.currentTime >= 0 && !song.ended) {
      song.play();
  
    
       $( "#pause" ).css("display","block");
  $( "#play" ).css("display","none");
   } else {
      song.pause();
             $( "#play" ).css("display","block");
  $( "#pause" ).css("display","none");
   }
}

function reset(btn, song){
   if(btn.classList.contains('playing')){
      btn.classList.toggle('playing');
   }
   song.pause();
   song.currentTime = 0;
}

function progress(btn, song){
   setTimeout(function(){
      var end = song.duration; 
      var current = song.currentTime;
      var percent = current/(end/100);
      //check if song is at the end
      if(current==end){
         reset(btn, song);
      }
   
      //call function again
      progress(btn, song);     
   }, 1000);
}

nyanBtn.addEventListener('click', function(){
   nyanBtn.classList.toggle('playing');
   playPause(nyan);
   progress(nyanBtn, nyan);
});

