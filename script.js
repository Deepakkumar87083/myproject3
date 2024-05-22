let city = document.getElementById("city");
let type = document.getElementById("type");
let temp = document.getElementById("temp");
let image = document.getElementById("img");
let input = document.getElementById("inp") ;
let API_key ="65b171c6c61da5745a274bd08b34759c"
const data = async function(search) {
    let getData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${API_key}&units=metric`)
    console.log(getData);     // fetched data from api  
    let jsonData = await getData.json(); // fetched data converted into json formate
    console.log(jsonData);  //data in json formate
    console.log(jsonData.name);

    //jsonData sent to innerhtml
    city.innerHTML=jsonData.name;
    temp.innerHTML=jsonData.main.temp + "°C";
    type.innerHTML=jsonData.weather[0].main;
    
    if (type.innerHTML == "Clouds") {
        image.src="cloud.png"
    }else if(type.innerHTML == "Rain"){
        image.src="rain1.png"
    }else if (type.innerHTML== "Haze"){
        image.src="haze.png"
    }else if (type.innerHTML== "Clear"){
        image.src="clears.png"
    }else if (type.innerHTML== "Haze"){
        image.src="haze.png"
    }
     

     


}
function myfuc(){ //onclick funtion in html 
    search=input.value;  // input value  stored into variable search
    data(search);  //data call from api , after click(search)
}

