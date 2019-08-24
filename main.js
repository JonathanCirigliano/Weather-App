function restartPage(){
    $('#citta').html('Welcome');
    $('#data').html('to our');
    $('#temperatura').html('Weather App');
    $('#icona').html('<i class="fas fa-smile"></i>');
    $('#meteo').html('enter city in the input field');
}



function searchWeather(){
    $('#citta').html('');
    $('#data').html('');
    $('#temperatura').html('');
    $('#icona').html('');
    $('#meteo').html('');
    var cityInput = $('#cityInput').val();

if(cityInput== ""){
    $('#citta').html('We Wish You');
    $('#data').html('');
    $('#temperatura').html('a');
    $('#icona').html('<i class="fas fa-sun"></i>');
    $('#meteo').html('Day!');
}

var apiCall = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityInput + '&appid=29b9052f55592c8fa1738efab6a4b1d2&units=metric';

$.getJSON(apiCall, weatherCallback);


function weatherCallback(weatherData){
    var city = weatherData.name;
    var country = weatherData.sys.country;
    var temp = weatherData.main.temp;
    var description = weatherData.weather[0].description
    var iconaCode = weatherData.weather[0].icon; 
    var oggi = new Date();
    var giornoNumero = oggi.getDate();
    var giornoSettimana = oggi.getDay();
    var diSettimana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var mese = oggi.getMonth();
    var mesiLett = ['January', 'February','March', 'April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'];
    var dataOdierna = diSettimana[giornoSettimana] + ', ' + giornoNumero + ' ' + mesiLett[mese]; 
    

    var icona = function iconaMeteo(){
    if(iconaCode == '01d'){
        $('#icona').html('<i class="fas fa-sun"></i>');
    }else if(iconaCode == '01n'){
        $('#icona').html('<i class="fas fa-moon"></i>');
    }else if(iconaCode == '02d'){
        $('#icona').html('<i class="fas fa-cloud-sun"></i>');
    }else if(iconaCode == '02n'){
        $('#icona').html('<i class="fas fa-cloud-moon"></i>');
    }else if(iconaCode == '03d' || iconaCode == '03n'){
        $('#icona').html('<i class="fas fa-cloud"></i>'); 
    }else if(iconaCode == '04d' || iconaCode == '04n'){
        $('#icona').html('<i class="fas fa-cloud"></i>');  
    }else if (iconaCode == '09d' || iconaCode == '09n'){
        $('#icona').html('<i class="fas fa-cloud-showers-heavy"></i>'); 
    }else if(iconaCode == '10d'){
        $('#icona').html('<i class="fas fa-cloud-sun-rain"></i>');
    }else if(iconaCode == '10n'){
        $('#icona').html('<i class="fas fa-cloud-moon-rain"></i>'); 
    }else if(iconCode == '11d' || iconCode == '11n'){
        $('#icona').html('<i class="fas fa-bolt"></i>');
    }else if(iconCode == '13d' || iconCode == '13n'){
        $('#icona').html('<i class="fas fa-snowflake"></i>');
    }else{
        $('#icona').html('<i class="fas fa-water"></i>');
    }
}
    
   
    $('#citta').html(city + ", " + country);
    $('#data').html(dataOdierna);
    $('#temperatura').html(Math.round(temp) + "°");
    $('#icona').html(icona);
    $('#meteo').html(description);

}
}

function findYourWeather(){
    $('#citta').html('');
    $('#data').html('');
    $('#temperatura').html('');
    $('#icona').html('');
    $('#meteo').html('');
    
    //function getLocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showposition);
    }else{
        alert('Geolocation is not supported by this browser.');
    }
    //}

   function showposition(position){
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
    
    
    
    var apiCall = 'http://api.openweathermap.org/data/2.5/weather?lat=' + latitude +'&lon=' + longitude + '&appid=29b9052f55592c8fa1738efab6a4b1d2&units=metric';
    
    $.getJSON(apiCall, weatherCallback);
    
    function weatherCallback(weatherData){
        var city = weatherData.name;
        var country = weatherData.sys.country;
        var temp = weatherData.main.temp;
        var description = weatherData.weather[0].description
        var iconaCode = weatherData.weather[0].icon; 
        var oggi = new Date();
        var giornoNumero = oggi.getDate();
        var giornoSettimana = oggi.getDay();
        var diSettimana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var mese = oggi.getMonth();
        var mesiLett = ['January', 'February','March', 'April', 'May', 'June','July', 'August', 'September','October', 'November', 'December'];
        var dataOdierna = diSettimana[giornoSettimana] + ', ' + giornoNumero + ' ' + mesiLett[mese]; 
            
        var icona = function iconaMeteo(){
        if(iconaCode == '01d'){
            $('#icona').html('<i class="fas fa-sun"></i>');
        }else if(iconaCode == '01n'){
            $('#icona').html('<i class="fas fa-moon"></i>');
        }else if(iconaCode == '02d'){
            $('#icona').html('<i class="fas fa-cloud-sun"></i>');
        }else if(iconaCode == '02n'){
            $('#icona').html('<i class="fas fa-cloud-moon"></i>');
        }else if(iconaCode == '03d' || iconaCode == '03n'){
            $('#icona').html('<i class="fas fa-cloud"></i>'); 
        }else if(iconaCode == '04d' || iconaCode == '04n'){
            $('#icona').html('<i class="fas fa-cloud"></i>');  
        }else if (iconaCode == '09d' || iconaCode == '09n'){
            $('#icona').html('<i class="fas fa-cloud-showers-heavy"></i>'); 
        }else if(iconaCode == '10d'){
            $('#icona').html('<i class="fas fa-cloud-sun-rain"></i>');
        }else if(iconaCode == '10n'){
            $('#icona').html('<i class="fas fa-cloud-moon-rain"></i>'); 
        }else if(iconCode == '11d' || iconCode == '11n'){
            $('#icona').html('<i class="fas fa-bolt"></i>');
        }else if(iconCode == '13d' || iconCode == '13n'){
            $('#icona').html('<i class="fas fa-snowflake"></i>');
        }else{
            $('#icona').html('<i class="fas fa-water"></i>');
        }
    }
       
       
        $('#citta').html(city + ", " + country);
        $('#data').html(dataOdierna);
        $('#temperatura').html(Math.round(temp) + "°");
        $('#icona').html(icona);
        $('#meteo').html(description);
    
        
        
    }
    }
    }
    