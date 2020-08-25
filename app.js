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


        $.ajax({
            url: `https://api.themoviedb.org/3/movie/${guardians2}?api_key=c153d46ebc986f5c9274a30a6c3111e8&language=en-US`,
          }).then((data) => {
            console.log(data);
            $('#info').append($('<div>').text(data.title))
            
            
          
        });

        $.ajax({
            url: `https://api.themoviedb.org/3/movie/${guardians}/images?api_key=c153d46ebc986f5c9274a30a6c3111e8&language=en-US`,
          }).then((data) => {
            console.log(data);
            $('#info').append(`<img src="${data.posters}">`)
            
            
          
        });
    


