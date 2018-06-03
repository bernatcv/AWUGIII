const MapTemplate = {
    data: function () {
    return {
      
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
        
       this.map = new google.maps.Map(element, options);
    },
    methods: {
       
    }
}
