function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 6,
      center: { lat:  50.641111, lng: 4.668056  },
    });
    
    
    addMarkerToMap(50.641111,4.668056,"BE",map);
    addMarkerToMap(51,10,"DE",map);
    addMarkerToMap(47,2,"FR",map);
    
  }
  
  function addMarkerToMap(lat,lng,name,map)
  {
  	const marker = new google.maps.Marker(
    {
        position: 
        {
          lat: lat,
          lng: lng,
        },
        map: map,
        name : name,
      });
      attachSecretMessage(marker);
  }
  
  function attachSecretMessage(marker/*, secretMessage*/) {
    /*const infowindow = new google.maps.InfoWindow({
      content: secretMessage,
    });*/
    marker.addListener("click", () => {
      //infowindow.open(marker.get("map"), marker);
      console.log(marker.name);
    });
  }