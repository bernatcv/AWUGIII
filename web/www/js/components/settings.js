
var busquedaJson = [
    {titulo: "ACDC", descripcion: "AC/DC es un grupo de hard rock australiano formado en 1973 en Sídney, Australia, por los hermanos de origen escocés Malcolm y Angus Young.", imagen: "img/BAND_IMG/acdc.jpg"},
	{titulo: "The Beatles", descripcion: "The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y la más alabada por la crítica en la historia de la música popular.", imagen: "img/BAND_IMG/beatles.jpg"},
	{titulo: "Extremoduro", descripcion: "Extremoduro es un grupo español de rock fundado por Roberto Iniesta en la ciudad extremeña de Plasencia en 1987.", imagen: "img/BAND_IMG/extremoduro+.jpg"},
	{titulo: "Green Day", descripcion: "Green Day es una banda estadounidense de pop punk y punk rock integrada inicialmente por tres miembros: Billie Joe Armstrong (guitarra y voz), Mike Dirnt (bajo y coros) y Tré Cool (batería y coros).", imagen: "img/BAND_IMG/greenday.jpg"},
	{titulo: "Guns And Roses", descripcion: "Guns N' Roses es una banda estadounidense de hard rock formada en Hollywood (Los Ángeles, California) en 1985. El grupo fue fundado por Axl Rose y el guitarrista rítmico Izzy Stradlin.", imagen: "img/BAND_IMG/guns_roses.jpg"},
	{titulo: "Iron Maiden", descripcion: "Iron Maiden es una banda británica de heavy metal, fundada en 1975 por el bajista Steve Harris. ", imagen: "img/BAND_IMG/iron_maiden.jpg"},
	{titulo: "Nirvana", descripcion: "Nirvana fue una banda de grunge estadounidense procedente de Aberdeen, Washington, Estados Unidos integrada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en 1987. ", imagen: "img/BAND_IMG/nirvana.jpg"},
	{titulo: "Pink Floyd", descripcion: "Pink Floyd fue una banda de rock británica, considerada un icono cultural del siglo xx y una de las bandas más influyentes en la historia de la música, que obtuvo gran popularidad gracias a su música psicodélica que evolucionó hacia el rock progresivo y rock sinfónico con el paso del tiempo. ", imagen: "img/BAND_IMG/pink_floyd.jpg"},
	{titulo: "The Rolling Stones", descripcion: "The Rolling Stones es una banda británica de rock originaria de Londres.", imagen: "img/BAND_IMG/rollingstones.jpg"},
	{titulo: "U2", descripcion: "U2 es una banda de rock originaria de Dublín (Irlanda), formada en 1976 por Bono (voz), The Edge (guitarra, teclado y voz), Adam Clayton (bajo), y Larry Mullen Jr. (batería).", imagen: "img/BAND_IMG/u2.jpg"},
	
   
];



const SettingsTemplate = {props: [],
        created: function(){
            this.busquedas = busquedaJson;
            
        },
        data: () => ({
                showNavigation: false,
                busquedas: [{titulo: "", descripcion: "", imagen: "", direccion: ""}]
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

 <md-list class="md-triple-line"><md-field md-inline>
      <label>Inline</label>
      <md-input v-model="inline"></md-input>
			<md-button class="md-icon-button md-list-action">
          		<md-icon class="md-primary">search</md-icon>
        	</md-button>
    </md-field>

    <div class="groups">
		<div class="group" v-for="grupo in busquedas">
		  <md-list-item>
			<md-avatar>
			  <img :src="grupo.imagen" alt="People">
			</md-avatar>

			<div class="md-list-item-text">
			  <span><strong>{{grupo.titulo}}</strong></span>
			  <p>{{grupo.descripcion}}</p>
			</div>

			<md-button class="md-icon-button md-list-action">
			  <md-icon class="md-primary">star</md-icon>
			</md-button>
		  </md-list-item><br>
		  <md-divider class="md-inset"></md-divider>
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
