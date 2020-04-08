
function getWeatherTest() {
    console.log("started");
    fetch("http://dataservice.accuweather.com/locations/v1/adminareas/1", {
    "method": "POST",
	"headers": {
        "content-type": "application/x-www-form-urlencoded",
	},
	"body": {}
    })
    .then(response => {
        console.log("data");
        console.log(response);
    })
    .catch(err => {
        console.log("error");
        console.log(err);
    });
}

//getWeatherTest();

function testApi(){
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://accuweatherstefan-skliarovv1.p.rapidapi.com/get24HoursConditionsByLocationKey",
        "method": "POST",
        "headers": {
            "x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
            "x-rapidapi-key": "26d7c3ab43mshe81706c8b95d511p18b6a1jsne8596d7bfbdb",
            "content-type": "application/x-www-form-urlencoded"
        },
        "data": {}
    }
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

//testApi();

const URL_TEMPLATE = "https://itunes.apple.com/search?term=song&genreId=1052&limit=200";

function fetchTrackList(searchTerm) {

  return fetch(URL_TEMPLATE + searchTerm)
    .then( (reply) => {
      return reply.json() // Parse the JSON reply into a native object
    })
    .then( (reply) => {
        console.log(reply);
    //   if(reply && reply.results && reply.results.length) { // If we have results
    //     return renderSearchResults(reply) 
    //   } else {
    //       console.log(reply);
    //     //renderError(new Error("No results found"));
    //   }
    })
    .catch( error => {
        console.log(error);
      //renderError(error);
    });
}

fetchTrackList("country");