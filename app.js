

const ironMan = '1726'
const hulk = '1724'
const ironMan2 = '10138'
const thor = '10195'
const capAmerica = '1771'
const avengers = '24428'

const ironMan3 = '68721'
const thorDarkWorld = '76338'
const capAmericaWS = '100402'
const guardians = '118340'
const avengersUltron = '99861'
const antMan = '102899'

const capAmericaCW = '271110'
const doctorStrange = '284052'
const guardians2 = '283995'
const spiderManHomecoming = '315635'
const thorRag = '284053'
const blackPanther = '284054'
const avengersInfinity = '299536'
const antManWasp = '363088'
const captainMarvel = '299537'
const avengersEndgame = '299534'
const spiderManFarFromHome = '429617'

let posterArray = [ironMan, hulk, ironMan2, thor, capAmerica, avengers, ironMan3, thorDarkWorld,capAmericaWS, guardians, avengersUltron, antMan,capAmericaCW, doctorStrange,guardians2, spiderManHomecoming, thorRag, blackPanther, avengersInfinity, antManWasp,captainMarvel, avengersEndgame, spiderManFarFromHome]



for (i = 0; i < posterArray.length; i++) {
  let movie = posterArray[i]


  
$.ajax({

  url: `https://api.themoviedb.org/3/movie/${movie}?api_key=c153d46ebc986f5c9274a30a6c3111e8&language=en-US`,
  }).then((data) => {
    // console.log(data);
    
    $('#movie-info').append($(`<div id = ${movie}-info>`).append(`<h1 class = "title">${data.title}</h1>`).css('display','none'))
    $(`#${movie}-info`).append(`<h4 class = "plot">${data.overview}</h4>`)
    $(`#${movie}-info`).append('<ul class="characters">')


    $.ajax({
      url: `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=c153d46ebc986f5c9274a30a6c3111e8`,
      }).then((data) => {
          // console.log(data.cast);
          for(i = 0; i<data.cast.length; i++) {
            $(`#${movie}-info`).children('.characters').append(`<li>${data.cast[i].character}</li>`)
         
          }
    
          
          
        });


    $.ajax({

      url: `http://www.omdbapi.com/?apikey=aa940672&t=${data.title}`,
      }).then((data) => {
          // console.log(data);
          $('.carousel-images').append(`<img id = "${movie}" class="poster" src="${data.Poster}">`)
          
    
          
          
 ///////////////////////////////////
 //CLICK ON POSTER TO GET MOVIE DETAILS/CAST
 ///////////////////////////////////


          $('.poster').on('click', (event) => {
            event.preventDefault();
            
            console.log(event.currentTarget.id)
            
          
            $.ajax({
              url: `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=c153d46ebc986f5c9274a30a6c3111e8`,
              }).then((data) => {
                  // console.log(data.cast);
                  if ($(`#${event.currentTarget.id}-info`).css('display','none')) {
                    $(`#${event.currentTarget.id}-info`).css('display','block')
                  } else {
                    $(`#${event.currentTarget.id}-info`).css('display','none')
                  }
                  
          
            
                  
                  
                });
            })
              
                    
      });
                
  });
}      
                
                 
                
            
            
            




////////////////////////////////////////////////
//////next button and previous button
////////////////////////////////////////////////

// let posterIndex = 0
// let highestIndex = $(".carousel-images").children().length - 1;

// $(".carousel-button-next").on("click", () => {
            
//   console.log("Next was clicked");
//   $(".carousel-images").children().eq(posterIndex).css("display", "none");
  
//   if (posterIndex < highestIndex) {
//     posterIndex++;
//   } else {
//     posterIndex = 0;
//   }
//   $(".carousel-images").children().eq(posterIndex).css("display", "block");
// });
          
// $(".carousel-button-previous").on("click", () => {
            
//   console.log("Previous was clicked");
//   $(".carousel-images").children().eq(posterIndex).css("display", "none");
  
//   if (posterIndex > 0) {
//     posterIndex--;
//   } else {
//     posterIndex = highestIndex;
//   }
//   $(".carousel-images").children().eq(posterIndex).css("display", "block");
// });

          



          


