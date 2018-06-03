const MapTemplate = {
    data: function () {
    return {
      markerCoordinates: [{
        latitude: 0,
        longitude: 0
      }],
      map: null,
      bounds: null,
      markers: []
    }
  },
    
    template: '<div id="map"></div>',
    mounted: function () {
        
        this.bounds = new google.maps.LatLngBounds();

        const element = document.getElementById('map');
        const mapCentre = this.markerCoordinates[0];
        

        const options = {
                zoom: 10,
                center: new google.maps.LatLng(41,42),
                disableDefaultUI: true
        }     
        
       this.map = new google.maps.Map(element, options);
    },
    methods: {
       
    }
}
