

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
    console.log(data);
    // $('#info').append($('<div>').text(data.title))


    $.ajax({

      url: `http://www.omdbapi.com/?apikey=aa940672&t=${data.title}`,
      }).then((data) => {
          console.log(data);
    
          
          $('#poster-carousel').append(`<img class="poster" src="${data.Poster}">`)
    
          $('.poster').on('click', (event) => {
            event.preventDefault();
          
            $.ajax({
              url: `https://api.themoviedb.org/3/movie/${movie}/credits?api_key=c153d46ebc986f5c9274a30a6c3111e8`,
              }).then((data) => {
                console.log(data.cast);
            
                for (i = 0; i< data.cast.length; i++) {
                  $('#info').append($('<div class = "character">').text(data.cast[i].character))
                }
            
            });
            
            
          })
          
                
    });
            
});
}           
          



          


