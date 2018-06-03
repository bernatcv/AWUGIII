
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
                alert("OK");
            },

            onSuccess (position){
              alert("TEST");
                this.lat = position.coords.latitude;
                this.lon = position.coords.longitude;
                

                var map = new google.maps.Map(document.getElementById('map'), {
                    center: {lat: this.lat, lng: this.lon},
                    zoom: 14,
                    disableDefaultUI: true
                });
                
                
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
				  <label>Coordenadas del evento</label>
				  <md-input v-model="required" required></md-input>  
				</md-field>
				
        <div id="map" width="80%" height="80%" style="margin-bottom: 20px">
        </div>    
				
      			
      			
       			
        	</div>
        	
			<md-button class="md-raised md-primary" style="width:80%;" v-on:click="goToUserProfile()">Crear evento</md-button><br>
			
		</div>
        
	</div>

`
                     };
