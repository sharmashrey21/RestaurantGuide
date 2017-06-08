      var config = {
        apiKey: "AIzaSyB7-R1BllALuiQwjF16iLiJKbs5cbp0sEY",
        authDomain: "restaurantguide-1496516112108.firebaseapp.com",
        databaseURL: "https://restaurantguide-1496516112108.firebaseio.com",
        projectId: "restaurantguide-1496516112108",
        storageBucket: "restaurantguide-1496516112108.appspot.com",
        messagingSenderId: "453514325961"
      };

      firebase.initializeApp(config);
      var database = firebase.database();
      
      var map
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 43.653, lng: -79.383},
          zoom: 13
        });
        var label, latitude, longtitude, myLatLng, value;
        for(var i = 0; i < 7; i++){
          firebase.database().ref("restaurants/"+i).on("value", function(snapshot) {
            value = snapshot.val();
            label = value.name;
            latitude = value.lat;
            longtitude = value.lng;
            myLatLng = {lat: latitude, lng: longtitude}; 
	            var marker = new google.maps.Marker({
	            position: myLatLng,
	            map: map,
	            name: label
	          });
          },function (error) {
            console.log("Error: " + error.code);
          });
        }
      }