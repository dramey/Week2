$(function(){

var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/37.8332442,-82.8101975";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempPaintsville").append(data.currently.temperature); 
$("#tempPvilleSum").append(data.currently.summary); 
$("#rainPvillePoss").append(data.currently.precipProbability);
$("#minTempPville").append(data.daily.data[0].temperatureMin);
$("#maxTempPville").append(data.daily.data[0].temperatureMax);
});

var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/38.4296528,-82.31894609999999";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempHunt").append(data.currently.temperature); 
$("#tempHuntSum").append(data.currently.summary); 
$("#rainHuntPoss").append(data.currently.precipProbability);
$("#minTempHunt").append(data.daily.data[0].temperatureMin);
$("#maxTempHunt").append(data.daily.data[0].temperatureMax);

});

var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/35.6944147,-83.46435509999999";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempGat").append(data.currently.temperature);  
$("#tempGatSum").append(data.currently.summary); 
$("#rainGatPoss").append(data.currently.precipProbability);
$("#minTempGat").append(data.daily.data[0].temperatureMin);
$("#maxTempGat").append(data.daily.data[0].temperatureMax);


});

 var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/35.7974425,-83.5603112";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempPig").append(data.currently.temperature);
$("#tempPigSum").append(data.currently.summary); 
$("#rainPigPoss").append(data.currently.precipProbability);
$("#minTempPig").append(data.daily.data[0].temperatureMin);
$("#maxTempPig").append(data.daily.data[0].temperatureMax);

});  
var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/45.29387939999999,-85.22816";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempChar").append(data.currently.temperature);
$("#tempCharSum").append(data.currently.summary); 
$("#rainCharPoss").append(data.currently.precipProbability);
$("#minTempChar").append(data.daily.data[0].temperatureMin);
$("#maxTempChar").append(data.daily.data[0].temperatureMax); 


});
var darkSkyKey = "https://api.darksky.net/forecast/1056fc5f281ea2e97bb54004e3cef822/36.188483,-115.093694";
$.ajax(darkSkyKey, {dataType:"jsonp"}).done(function(data){
$("#tempVegas").append(data.currently.temperature);
$("#tempVegasSum").append(data.currently.summary); 
$("#rainVegasPoss").append(data.currently.precipProbability);
$("#minTempVegas").append(data.daily.data[0].temperatureMin);
$("#maxTempVegas").append(data.daily.data[0].temperatureMax); 


});




});




