

// Objet map
var Meteo= {
    // initialise la fonction 

init: function () {
        // Accès à la météo de Paris
        ajaxGet("http://api.weatherstack.com/current?access_key=7cc060d0e3aece9922e3a7d6db77f9dc&query=fetch:ip&units=m", function (reponse) {
            var meteo = JSON.parse(reponse);
            // Récupération des données
            var locationName= meteo.location.name;
            var locationCountry=meteo.location.country;
            var locationRegion=meteo.location.region;
            var heure = meteo.current.observation_time;
            var temperature = meteo.current.temperature;
            var humidite = meteo.current.humidity;
            var vitesseVent = meteo.current.wind_speed;
            var precipitations=meteo.current.precip;
            var uv=meteo.current.uv_index;
            var couvertureNuages= meteo.current.cloudcover;
            var tempsCode = meteo.current.weather_code;
            var tempsDescr = meteo.current.weather_descriptions;

            // Affichage des résultats
            // titre
            var titreElt = document.getElementById("titre");
            titreElt.textContent = 
                  locationName+ " , " +
                  locationRegion+" , " +
                  locationCountry ;


            //Température
            var tempElt = document.getElementById("temp");
            tempElt.textContent =
                  temperature +" °C ";

            //précipitations
            var precElt = document.getElementById("prec");
            precElt.textContent =
                "précip = " + precipitations +" mm ";

            //vent
            var ventElt = document.getElementById("vent");
            ventElt.textContent =
                "vent = " + vitesseVent +" km/h ";

            //humidité
            var humElt = document.getElementById("hum");
            humElt.textContent =
                "Humidité = " + humidite +" % ";
                 
             //uv
            var uvElt = document.getElementById("uv");
            uvElt.textContent =
                "uv = "+uv ;
                   
             //dernier relevé
            var dernierElt = document.getElementById("dernier");
            dernierElt.textContent =
                "Dernier relevé à " + heure ;

            //description
            var descrElt = document.getElementById('descr');
            descrElt.textContent=
            tempsDescr;


///////////////* traduction en français  des conditions météo*///////////////////         
           


              if(tempsDescr == "Moderate or heavy snow in area with thunder"){  
                document.getElementById("descr").innerHTML =
                "Neige modérée ou forte dans la zone de tonnerre";
               
              };
              if(tempsDescr == "Patchy light snow in area with thunder"){  
                document.getElementById("descr").innerHTML =
                "Neige légère et éparse dans la région avec tonnerre";
               
              };
              if(tempsDescr == "Moderate or heavy rain in area with thunder"){  
                document.getElementById("descr").innerHTML =
                "Pluie modérée ou forte dans la région avec tonnerre";
               
              };
              if(tempsDescr == "Patchy light rain in area with thunder"){  
                document.getElementById("descr").innerHTML =
                "Pluie légère et irrégulière dans la région avec tonnerre";
               
              };
              if(tempsDescr == "Moderate or heavy showers of ice pellets"){  
                document.getElementById("descr").innerHTML =
                "Averses modérées ou fortes de glace";
               
              };

              if(tempsDescr == "Light showers of ice pellets"){  
                document.getElementById("descr").innerHTML =
                "Légères averses de glace";
               
              };
              if(tempsDescr == "Moderate or heavy snow showers"){  
                document.getElementById("descr").innerHTML =
                "Averses de neige modérées ou fortes";
               
              };

              if(tempsDescr == "Light snow showers"){  
                document.getElementById("descr").innerHTML =
                "Légère chute de neige";
               
              };

              if(tempsDescr == "Moderate or heavy sleet showers"){  
                document.getElementById("descr").innerHTML =
                "Fortes averses de neige fondue";
               
              };
              if(tempsDescr == "Light sleet showers"){  
                document.getElementById("descr").innerHTML =
                "Légères averses de neige fondue";
               
              };

              if(tempsDescr == "Torrential rain shower"){  
                document.getElementById("descr").innerHTML =
                "Pluie torrentielle";
               
              };


              if(tempsDescr == "Moderate or heavy rain shower"){  
                document.getElementById("descr").innerHTML =
                "Averse de pluie modérée ou forte";
               
              };
              if(tempsDescr == "Light rain shower"){  
                document.getElementById("descr").innerHTML =
                "Averses de pluie";
               
              };


              if(tempsDescr == "Ice pellets"){  
                document.getElementById("descr").innerHTML =
                "Glace";
               
              };

              if(tempsDescr == "Heavy snow"){  
                document.getElementById("descr").innerHTML =
                "Beaucoup de neige";
               
              };

              if(tempsDescr == "Patchy heavy snow"){  
                document.getElementById("descr").innerHTML =
                "Forte neige et irrégulière";
               
              };

              if(tempsDescr == "Patchy moderate snow"){  
                document.getElementById("descr").innerHTML =
                "Neige modérée et irrégulière";
               
              };

              if(tempsDescr == "Moderate snow"){  
                document.getElementById("descr").innerHTML =
                "Neige modérée";
               
              };

              if(tempsDescr == "Light snow"){  
                document.getElementById("descr").innerHTML =
                "Légère neige";
               
              };

              if(tempsDescr == "Patchy light snow"){  
                document.getElementById("descr").innerHTML =
                "Parsemée de légère neige";
               
              };

              if(tempsDescr == "Moderate or heavy sleet"){  
                document.getElementById("descr").innerHTML =
                "Grésil modéré ou lourd";
               
              };
              if(tempsDescr == "Light sleet"){  
                document.getElementById("descr").innerHTML =
                "Léger grésil";
               
              };

              if(tempsDescr == "Moderate or Heavy freezing rain"){  
                document.getElementById("descr").innerHTML =
                "Pluie verglaçante modérée ou forte";
               
              };
              if(tempsDescr == "Light freezing rain"){  
                document.getElementById("descr").innerHTML =
                "Légère pluie verglaçante";
               
              };
		      if(tempsDescr == "Drizzle"){  
                document.getElementById("descr").innerHTML =
                "Bruine";
               
              };
              if(tempsDescr == "Heavy rain"){  
                document.getElementById("descr").innerHTML =
                "Forte pluie";
               
              };
               if(tempsDescr == "Rain" || tempsDescr == "Rain Shower"){  
                document.getElementById("descr").innerHTML =
                "Pluie";
               
              };
              if(tempsDescr == "Heavy rain at times"){  
                document.getElementById("descr").innerHTML =
                "Fortes pluies à certains moments";
               
              };
              if(tempsDescr == "Drizzle And Rain"){  
                document.getElementById("descr").innerHTML =
                "Bruine et pluie";
               
              };
   			if(tempsDescr == "Light Rain"){  
                document.getElementById("descr").innerHTML =
                "Petite pluie";
               
              };
              if(tempsDescr == "Snow"){  
                document.getElementById("descr").innerHTML =
                "Neige";
               
              };
             if(tempsDescr == "Moderate rain"){  
                document.getElementById("descr").innerHTML =
                "Pluie modérée";
               
              };
             if(tempsDescr == "Moderate rain at times"){  
                document.getElementById("descr").innerHTML =
                "Pluie modérée à certains moments";
               
              };
             if(tempsDescr == "Light rain"){  
                document.getElementById("descr").innerHTML =
                "Pluie légère";
               
              };


              if(tempsDescr == "Patchy light rain"){  
                document.getElementById("descr").innerHTML =
                "Pluie légère et irrégulière";
               
              };
              if(tempsDescr == "Rain"){  
                document.getElementById("descr").innerHTML =
                "Pluie";
               
              };
              if(tempsDescr == "Heavy freezing drizzle"){  
                document.getElementById("descr").innerHTML =
                "Forte bruine verglaçante";
               
              };  
              if(tempsDescr == "Heavy Drizzle And Rain, Rain"){  
                document.getElementById("descr").innerHTML =
                "Forte bruine et pluie";
               
              };         
              if(tempsDescr == "Light Rain With Thunderstorm, Rain Shower"){  
                document.getElementById("descr").innerHTML =
                "Pluie légère avec orage, pluie";
               
              };         

              if(tempsDescr == "Freezing drizzle"){  
                document.getElementById("descr").innerHTML =
                "Bruine verglaçante";
               
              }; 


              if(tempsDescr == "Light drizzle"){  
                document.getElementById("descr").innerHTML =
                "Légère bruine ";
               
              }; 


              if(tempsDescr == "Patchy light drizzle"){  
                document.getElementById("descr").innerHTML =
                "Légère bruine et irrégulière";
               
              }; 


              if(tempsDescr == "Freezing fog"){  
                document.getElementById("descr").innerHTML =
                "Brouillard givrant";
               
              }; 

              if(tempsDescr == "Fog"){  
                document.getElementById("descr").innerHTML =
                "Brouillard ";
               
              }; 

              if(tempsDescr == "Blizzard"){  
                document.getElementById("descr").innerHTML =
                "Blizzard ";
               
              };              

              if(tempsDescr == "Blowing snow"){  
                document.getElementById("descr").innerHTML =
                "Poudrerie";
               
              };   
              if(tempsDescr == "Thundery outbreaks in nearby"){  
                document.getElementById("descr").innerHTML =
                "Éclairs à proximité";
               
              }; 

              if(tempsDescr == "Patchy freezing drizzle nearby"){  
                document.getElementById("descr").innerHTML =
                "Bruine verglaçante à proximité";
               
              }; 
              if(tempsDescr == "Light Drizzle And Rain, Rain"){  
                document.getElementById("descr").innerHTML =
                "Légère bruine, pluie";
               
              }; 
              if(tempsDescr == "Patchy sleet nearby"){  
                document.getElementById("descr").innerHTML =
                "Grésil à proximité";
               
              }; 
              if(tempsDescr == "Clear"){  
                document.getElementById("descr").innerHTML =
                "temps clair";
               
              }; 
              if(tempsDescr == "Patchy rain nearby"){  
                document.getElementById("descr").innerHTML =
                "Pluie à proximité";
               
              }; 

              if(tempsDescr == "Patchy snow nearby"){  
                document.getElementById("descr").innerHTML =
                "Neige à proximité";
               
              }; 

              if(tempsDescr == "Mist"){  
                document.getElementById("descr").innerHTML =
                "Brouillard";
               
              }; 
              if(tempsDescr == "Cloudy"){  
                document.getElementById("descr").innerHTML =
                "Nuageux";
               
              };
              if(tempsDescr == "Clear/Sunny"){  
                document.getElementById("descr").innerHTML =
                "Ensoleillé";
               
              };                 
                         
              if(tempsDescr == "Overcast"){  
                document.getElementById("descr").innerHTML = "Nuageux";
               
              };
              if(tempsDescr == "Partly cloudy"){  
                document.getElementById("descr").innerHTML = "Partiellement Nuageux";
               
              };

              if(tempsDescr == "Sunny"){  
                document.getElementById("descr").innerHTML = "Ensoleillé";
               
              };



///////////////* icones des conditions météo*///////////////////

    //conditions nuages
              if(tempsCode == "122"){  
               document.getElementById("nuages").style.display= "block";
              }else{

                 document.getElementById("nuages").style.display= "none";
              };
              
    //conditions soleil+nuages
              if(tempsCode ==" 116"){  
               document.getElementById("soleilNuageBlanc").style.display = "block";

              };
    //conditions soleil
              if(tempsCode == "113"){  
               document.getElementById("soleil").style.display= "block";
              }else{

                 document.getElementById("soleil").style.display= "none";
              };
    //conditions nuage blanc
              if(tempsCode =="119"){  
               document.getElementById("nuageBlanc").style.display= "block";
              }else{

                 document.getElementById("nuageBlanc").style.display= "none";
              } ;

    //conditions soleil+neige
              if( tempsCode =="320"||tempsCode =="395" ){  
               document.getElementById("soleilNeige").style.display= "block";
              }else{

                 document.getElementById("soleilNeige").style.display= "none";
              }; 
    //conditions orage+ pluie
              if(tempsCode =="389"){  
               document.getElementById("oragePluie").style.display= "block";
              }else{

                 document.getElementById("oragePluie").style.display= "none";
              }; 

    //conditions orage+ pluie+soleil
              if(tempsCode =="386"|| tempsCode =="392"){  
               document.getElementById("orageSoleilPluie").style.display= "block";
              }else{

                 document.getElementById("orageSoleilPluie").style.display= "none";
              }; 
    //conditions pluie
              if(tempsCode =="359"||tempsCode =="308"||tempsCode ==" 302"||tempsCode ==" 296"||tempsCode ==" 293"||tempsCode ==" 284"||tempsCode ==" 281"||tempsCode ==" 266"||tempsCode ==" 263"){  
               document.getElementById("pluie").style.display= "block";
              }else{

                 document.getElementById("pluie").style.display= "none";
              }; 
    //conditions pluie+soleil
              if(tempsCode =="356" ||tempsCode =="353"||tempsCode =="305"||tempsCode =="299"){  
               document.getElementById("pluieSoleil").style.display= "block";
              }else{

                 document.getElementById("pluieSoleil").style.display= "none";
              };

    //conditions pluie+neige
              if(tempsCode =="377" ||tempsCode =="350" ){  
               document.getElementById("neigePluie").style.display= "block";
              }else{

                 document.getElementById("neigePluie").style.display= "none";
              } ;
    //conditions neige+soleil+pluie
              if(tempsCode =="371" ||tempsCode =="368"||tempsCode =="365 " ||tempsCode =="362"){  
               document.getElementById("neige_Soleil").style.display= "block";
              };

    //conditions pluie
              if(precipitations < 0.4){  
                document.getElementById("canvas").style.display= "none";
               
              }else{

                document.getElementById("canvas").style.display ="block";
              } ;
    //conditions neige
              if(tempsCode =="227"||tempsCode =="338" ||tempsCode =="332"||tempsCode =="329"){  
               document.getElementById("neige").style.display= "block";
              }else{

                 document.getElementById("neige").style.display= "none";
              };      
    //conditions neige+ pluie
              if(tempsCode =="317"||tempsCode =="314"||tempsCode =="311"){  
               document.getElementById("neigePluie").style.display= "block";
              }else{

                 document.getElementById("neigePluie").style.display= "none";
              };
    //conditions brouillard
              if(tempsCode =="143"||tempsCode =="260" ||tempsCode =="248"){  
               document.getElementById("brouillard").style.display= "block";
              }else{

                 document.getElementById("brouillard").style.display= "none";
              };

///////////////*FIN  icones des conditions météo*///////////////////


    //conditions phrase thermometre
              if(temperature > 0 && temperature > 18){  
                document.getElementById("messageMeteo").innerHTML = "<img src='assets/images/chaud.png'>";
               
              }else{

                document.getElementById("messageMeteo").innerHTML ="<img src='assets/images/froid.png'>";
              } ;


    //conditions vent
              if(vitesseVent < 60){  
             document.getElementById("vitesseVent").style.display='none';
               
              }else{

                document.getElementById("vitesseVent").style.display='block';
            };         

            var iconesElt = document.createElement("div");
            var meteoElt = document.getElementById("meteo");
            var messageMeteo=  document.getElementById("messageMeteo");     
            var vitesseVent = document.getElementById("vitesseVent");
            var btnArrow= document.getElementById("btnArrow");
            var btnArrowUp= document.getElementById("btnArrowUp");
            var  iframe = document.getElementById("iframe1");
            var  iframe2 = document.getElementById("iframe2");
                           // Premier événement click
          if(btnArrow.addEventListener('click',  e => {
              iframe.style.display ='block';
              btnArrowUp.style.display ='block';
              btnArrow.style.display ='none';
            }));

            if(btnArrowUp.addEventListener('click',  e => {
              iframe.style.display ='none';
              btnArrow.style.display ='block';
              btnArrowUp.style.display ='none';
            }));
  
              meteoElt.appendChild(titreElt);
              meteoElt.appendChild(messageMeteo);                        
              meteoElt.appendChild(tempElt); 
              meteoElt.appendChild(vitesseVent);
              meteoElt.appendChild(precElt);
              meteoElt.appendChild(ventElt);
              meteoElt.appendChild(humElt);
              meteoElt.appendChild(uvElt);
              meteoElt.appendChild(uvElt);
              meteoElt.appendChild(dernierElt);
              meteoElt.appendChild(btnArrow);
              meteoElt.appendChild(btnArrowUp);
              meteoElt.appendChild(iframe);
              meteoElt.appendChild(iframe2);
        });

        function ajaxGet(url, callback) {
          var req = new XMLHttpRequest();
          req.open("GET", url);
          req.addEventListener("load", function () {
            if (req.status >= 200 && req.status < 400) {
              callback(req.responseText);
            } else {
              console.error(req.status + " " + req.statusText + " " + url);
            }
          });
          req.addEventListener("error", function () {
            console.error("Erreur réseau avec l'URL " + url);
          });
          req.send(null);
        };
         }   


}

var meteo = Object.create(Meteo);
meteo.init();


