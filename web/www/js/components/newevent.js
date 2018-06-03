
const NewEventTemplate = {props: [], 
                          
                               data(){
                                return{
        showNavigation: false,
        lat:"",
        lon:""
                            }},
           methods: {
            ubicacio () {
                navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError);
            },

            onSuccess (position){
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
          
      
 
            var locations = [
              ['Sabadell', 41.546, 2.126],
              ['Cuenca', 40.070, -2.136],
              ['Bilbao', 43.272, -2.941],
              ['Sevilla', 37.381, -5.971],
              ['Zaragoza', 41.663, -0.870]
            ];   
                
                
                    
                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: this.lat, lng: this.lon},
                    zoom: 5.2,
                     mapTypeId: google.maps.MapTypeId.ROADMAP,
                     styles: [
                        {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
                        {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
                        {
                          featureType: 'administrative.locality',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'poi',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'poi.park',
                          elementType: 'geometry',
                          stylers: [{color: '#263c3f'}]
                        },
                        {
                          featureType: 'poi.park',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#6b9a76'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'geometry',
                          stylers: [{color: '#38414e'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'geometry.stroke',
                          stylers: [{color: '#212a37'}]
                        },
                        {
                          featureType: 'road',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#9ca5b3'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'geometry',
                          stylers: [{color: '#746855'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'geometry.stroke',
                          stylers: [{color: '#1f2835'}]
                        },
                        {
                          featureType: 'road.highway',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#f3d19c'}]
                        },
                        {
                          featureType: 'transit',
                          elementType: 'geometry',
                          stylers: [{color: '#2f3948'}]
                        },
                        {
                          featureType: 'transit.station',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#d59563'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'geometry',
                          stylers: [{color: '#17263c'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'labels.text.fill',
                          stylers: [{color: '#515c6d'}]
                        },
                        {
                          featureType: 'water',
                          elementType: 'labels.text.stroke',
                          stylers: [{color: '#17263c'}]
                        }
                      ]
                    
                })
    
            var infowindow = new google.maps.InfoWindow();

            var marker, i;

            for (i = 0; i < locations.length; i++) { 
              marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                  icon: "img/marcador.png",
                   animation: google.maps.Animation.DROP,
              });

              google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                  infowindow.setContent(locations[i][0]);
                  infowindow.open(map, marker);
                }
              })(marker, i));
            }
            
            
            },

            onError (){
                alert("fail");
            },
               

            goToSimpleList(){
                this.$router.push('simplelist');
            },
            goToEditProfile(){
                 this.$router.push('editprofile');
                },
			goToSettings(){
                 this.$router.push('settings');
                },
			goToUserProfile(){
                 this.$router.push('userprofile');
                },
			   
			goToIndice(){
                 this.$router.push('indice');
                }
        },	  
        created: function () {
          this.ubicacio();
        },              
        template:`
<div>
		
		<md-toolbar class="md-primary"> <!-- inicio toolbar de la app-->
           
            
             
        
         <md-button class="md-icon-button" v-on:click="goToUserProfile()">
                <md-icon>chevron_left</md-icon>
                
            </md-button>
              
</md-toolbar>
  
        <div style="text-align: center;">
        <h2>Nuevo evento</h2>
        	<div style="width:80%; margin: 0 10%;">
        		<md-field style="margin-bottom: 5px">
				  <label>Nombre del evento</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
      		<md-field style="margin-bottom: 5px">
			  <label>Descripción del evento</label>
			  <md-textarea v-model="textarea"></md-textarea>
			</md-field>
      		
			<md-datepicker v-model="selectedDate" style="margin-bottom: 5px">
			  <label></label>
			</md-datepicker>

        		<md-field style="margin-bottom: 5px">
				  <label>Localización del evento</label>
				  <md-input v-model="required" required></md-input>  
				</md-field>
				
        <div id="map">
        </div>    
				
      			
      			
       			
        	</div>
        	
			<md-button class="md-raised md-primary" style="width:80%;" v-on:click="goToUserProfile()">Crear evento</md-button><br>
			
		</div>
        
	</div>

`
                     };
