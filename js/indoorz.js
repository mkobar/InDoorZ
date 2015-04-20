jQuery(document).ready(function(){
	
function gps_distance(lat1, lon1, lat2, lon2)
{
	// http://www.movable-type.co.uk/scripts/latlong.html
    var R = 6371; // km
    var dLat = (lat2-lat1) * (Math.PI / 180);
    var dLon = (lon2-lon1) * (Math.PI / 180);
    var lat1 = lat1 * (Math.PI / 180);
    var lat2 = lat2 * (Math.PI / 180);

    var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2); 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c;
    
    return d;
}

document.addEventListener("deviceready", function(){
	
	if(navigator.network.connection.type == Connection.NONE){
		$("#home_network_button").text('No Internet Access')
								 .attr("data-icon", "delete")
								 .button('refresh');
	}

});

var track_id = '';      // Name/ID of the exercise
var watch_id = null;    // ID of the geolocation
var tracking_data = []; // Array containing GPS position objects

$("#login").on('click', function(){
	//alert("login);
	//goto 1st indoorz page with choices
	location.href = "indoorz.html";
});
$("#selectbuilding").on('click', function(){
	alert("The Evens Building detected");
	//goto indoorz building first floor page
	location.href = "indoorz4.html";
});
$("#selectlist").on('click', function(){
	//alert("submit buzz");
	//goto building list page
	location.href = "indoorz2.html";
});
$("#enteraddress").on('click', function(){
	//alert("best-list");
	//goto address form page
	location.href = "indoorz3.html";
});

$("#showfplan").on('click', function(){
	//alert("best-list");
	//goto first floor page
	location.href = "indoorz4.html";
});

$("#showfplan2").on('click', function(){
	//alert("best-list");
	//goto route to dest   
	location.href = "indoorz5.html";
});
$("#showdest").on('click', function(){
	//alert("best-list");
	//goto start floor page
	location.href = "indoorz6.html";
});

// from trailer only - from vote page
$("#rest-vote").on('click', function(){
	restid = current_pics[pic_index].restid;
	//alert("restaurant restid=" + restid);
	// get restaurant by id
	rest_status = get_restaurant(restid);
	location.href = "#restaurant";
});

$("#startTracking_stop").on('click', function(){
	
	// Save the tracking data
	window.localStorage.setItem(track_id, JSON.stringify(tracking_data));

	// Reset watch_id and tracking_data 
	var watch_id = null;
	var tracking_data = null;

	$("#startTracking_status").html("Stopped tracking workout: <strong>" + track_id + "</strong>");

});

$.mockjax({
  url: '/restful/restaurant/1',
  responseTime: 750,
  responseText: {
    name: 'Frank Pepe Pizzeria Napoletana',
    picid: 001,
    restid: 1,
    lat: 41.27,
    lon: -72.25,
    url: 'frank-pepe-pizzeria.jpg',
    phone: '(203) 865-5762',
    address: '157 Wooster St New Haven, CT 06511',
    website: 'http://www.pepespizzeria.com/',
    likes: 14
  }
});


});
