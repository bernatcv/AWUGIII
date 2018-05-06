const SettingsTemplate = {props: [], 
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
                }
        },	  			  
						  
                          
        template:`

<div>
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
 
        <!-- ---------------------CONTENIDO-------------------------- -->

<div>
 <md-list class="md-triple-line"><md-field md-inline>
      <label>Inline</label>
      <md-input v-model="inline"></md-input>
			<md-button class="md-icon-button md-list-action">
          		<md-icon class="md-primary">search</md-icon>
        	</md-button>
    </md-field>

    
      <md-list-item>
        <md-avatar>
          <img src="img/user1.jpg" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>Ali Connors</span>
          <span>Brunch this weekend?</span>
          <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon class="md-primary">star</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

      <md-list-item>
        <md-avatar>
          <img src="img/user1.jpg" alt="People">
        </md-avatar>

        <div class="md-list-item-text">
          <span>me, Scott, Jennifer</span>
          <span>Summer BBQ</span>
          <p>Wish I could come, but I'm out of town this week. :(</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>star_border</md-icon>
        </md-button>
      </md-list-item>

      <md-divider class="md-inset"></md-divider>

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
