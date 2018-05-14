

const UserProfileTemplate = {props: [],    
                             
                                  data: () => ({
        showNavigation: false,
        cities: ["New York", "Amsterdam", "Tokyo", "Rome"]
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
          <img src="img/user1.jpg"  alt="Skyscraper">
        </md-card-media>

        <md-card-area>
          <md-card-header>
            <span class="md-title">BAND NAME</span>
            
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
 


		<p class="band_Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


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
			
		
			
			
<md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Concierto en Terrassa</div>
          <div class="md-subhead">21/06/2016</div>
        </md-card-header-text>

        
          <md-button class="md-icon-button" v-on:click="goToEditEvent()">
            <md-icon>edit</md-icon>
          </md-button>

      </md-card-header>

      <md-card-content>
        Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona
      </md-card-content>

    </md-card>

<md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Concierto en Terrassa</div>
          <div class="md-subhead">21/06/2016</div>
        </md-card-header-text>

        
          <md-button class="md-icon-button" v-on:click="goToEditEvent()">
            <md-icon>edit</md-icon>
          </md-button>

      </md-card-header>

      <md-card-content>
        Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona
      </md-card-content>

    </md-card>

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













