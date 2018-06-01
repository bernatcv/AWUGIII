var profileJson = [
    {titulo: "Presentación Rock or Bust", fecha: "21/01/2018", direccion: "Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona"},
	{titulo: "Viejas glorais", fecha: "02/01/2018", direccion: "Plaça Catalunya 1, Barcelona"},
	{titulo: "Lo mejor de AC/DC", fecha: "04/06/2019", direccion: "Plaza de la Puerta del Sol, Madrid"},
  
];

const UserProfileTemplate = {props: [],
        created: function(){
            this.eventos = profileJson;
            
        },
        data: () => ({
                showNavigation: false,
				cities: ["Grunge", "Rock", "Alternative"],
                eventos: [{titulo: "", fecha: "", direccion: ""}]
			
                            }),							  
		methods: {
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
                },
			goToNewEvent(){
                 this.$router.push('newevent');
                },
			goToEditEvent(){
                 this.$router.push('editevent');
                }
        },	  							 
  
        template:`
<div>
<div class="menu_superior">
				<md-toolbar class="md-primary"> <!-- inicio toolbar de la app-->
					<div id="logo">
						<img src="img/logo.png" style="flex: 1">
					</div>  
					<md-button class="md-icon-button" v-on:click="showNavigation = true">
						<md-icon>more_vert</md-icon>
					</md-button>
				</md-toolbar>
            <md-drawer class="md-right" :md-active.sync="showNavigation" ref="sidebar"> <!-- inicio panel lateral-->
             	<md-toolbar class="md-primary" md-elevation="0">
                	<span class="md-title">Ajustes</span>
              	</md-toolbar>
              	<md-list>
                	<md-list-item @click="goToEditProfile()">
                  		<md-icon>edit</md-icon>
                  		<span class="md-list-item-text">Editar perfil</span>
                	</md-list-item>
                	<md-list-item>
						<a href="index.html"> 
							  <md-icon>keyboard_return</md-icon>
							  <span class="md-list-item-text">Cerrar sesión</span>
						</a>
                	</md-list-item>
              </md-list>
        </md-drawer> <!-- fin panel lateral-->
</div>
 
        <!-- ---------------------CONTENIDO------------s-------------- -->


<div class="contenedor1">
<md-card>
      <md-card-media-cover md-solid>
        <md-card-media md-ratio="4:3">
          <img src="img/BAND_IMG/nirvana.jpg" alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">NIRVANA</span>
            
          </md-card-header>

          <md-card-actions>
            <md-button class="md-icon-button">
              <md-icon>favorite</md-icon>
            </md-button>

            <md-button class="md-icon-button">
              <md-icon>share</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-area>
      </md-card-media-cover>
    </md-card>
 


		<p class="band_Description">Nirvana fue una banda de grunge estadounidense procedente de Aberdeen, Washington, Estados Unidos integrada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en 1987.  </p>


<div id="app">

  <div>
    <md-chips v-model="cities" md-static></md-chips>
  </div>

</div>

<div id="card_event">
		
			<h2>PRÓXIMOS EVENTOS</h2>
	
				<md-speed-dial-target>
							<md-button v-on:click="goToNewEvent()">
								<md-icon class="md-size-1x" >add</md-icon>
							</md-button>
				</md-speed-dial-target>
			
		
			
	<div class="eventosProximos">
		<md-card v-for="evento in eventos">
			  <md-card-header>
				<md-card-header-text>
				  <div class="md-title">{{evento.titulo}}</div>
				  <div class="md-subhead">{{evento.fecha}}</div>
				</md-card-header-text>
				  <md-button class="md-icon-button" v-on:click="goToEditEvent()">
					<md-icon>edit</md-icon>
				  </md-button>
			  </md-card-header>
			  <md-card-content>
				{{evento.direccion}}
			  </md-card-content>
    	</md-card>

	</div>		
	

</div>
  </div>

<!-- ----------------------FIN CONTENIDO--------------------- -->
        
        
		  <div class="phone-viewport">
			  <md-bottom-bar md-sync-route>
				<md-bottom-bar-item md-icon="home" v-on:click="goToSimpleList()"></md-bottom-bar-item>
				<md-bottom-bar-item md-icon="search" v-on:click="goToSettings()"></md-bottom-bar-item>
				<md-bottom-bar-item md-icon="person" v-on:click="goToUserProfile()"></md-bottom-bar-item>

			  </md-bottom-bar>
			</div>
		  </div>

`

		 
                     };













