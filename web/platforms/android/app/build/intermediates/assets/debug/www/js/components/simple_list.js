
var listaJson = [
    {titulo: "ACDC", fecha: "21/01/2018", imagen: "img/BAND_IMG/acdc.jpg", direccion: "Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona"},
	{titulo: "The Beatles", fecha: "02/01/2018", imagen: "img/BAND_IMG/beatles.jpg", direccion: "Plaça Catalunya 1, Barcelona"},
	{titulo: "Extremoduro", fecha: "04/06/2019", imagen: "img/BAND_IMG/extremoduro+.jpg", direccion: "Plaza de la Puerta del Sol, Madrid"},
	{titulo: "Green Day", fecha: "06/12/2018", imagen: "img/BAND_IMG/greenday.jpg", direccion: "Plaça de l'Ajuntament, València, València"},
	{titulo: "Guns And Roses", fecha: "12/04/209", imagen: "img/BAND_IMG/guns_roses.jpg", direccion: "Carrer de Jaume Borràs 18, Badalona, Barcelona"},
	{titulo: "Iron Maiden", fecha: "25/03/2020", imagen: "img/BAND_IMG/iron_maiden.jpg", direccion: "Pirámide de Mayo, Buenos Aires, Argentina"},
	{titulo: "Nirvana", fecha: "16/07/2018", imagen: "img/BAND_IMG/nirvana.jpg", direccion: "Carrer dels Voluntaris Olímpics, 4, 08225 Terrassa, Barcelona"},
	{titulo: "Pink Floyd", fecha: "17/09/2019", imagen: "img/BAND_IMG/pink_floyd.jpg", direccion: "Carrer dels Nous Pins, 67, 08016, Barcelona"},
	{titulo: "The Rolling Stones", fecha: "10/04/2019", imagen: "img/BAND_IMG/rollingstones.jpg", direccion: "Carrer de Blai, 22, 08004 Barcelona"},
	{titulo: "U2", fecha: "21/11/2019", imagen: "img/BAND_IMG/u2.jpg", direccion: "Carrer Can Pallarès, 08290 Cerdanyola del Vallès, Barcelona"},
	
   
];


const SimpleListTemplate = {props: [],
        created: function(){
            this.eventos = listaJson;
            
        },
        data: () => ({
                showNavigation: false,
                eventos: [{titulo: "", fecha: "", imagen: "", direccion: ""}]
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
					<div class="group-list" v-for="evento in eventos">

					   <md-list-item>
								<md-avatar class="md-large">
								  <img :src="evento.imagen" alt="People">
								</md-avatar>

								<span class="md-list-item-text">{{evento.titulo}} ha creado un nuevo <strong>evento</strong></span>

								<md-button class="md-icon-button md-list-action">
								  <md-icon class="md-primary">favorite</md-icon>
								</md-button>


							</md-list-item>


					<div style="margin:0 5% 0 5%;">
							<md-card>
						  <md-card-header>
							<md-card-header-text>
							  <div class="md-title">{{evento.titulo}}</div>
							  <div class="md-subhead">{{evento.fecha}}</div>
							</md-card-header-text>

						  </md-card-header>

						  <md-card-content>
							{{evento.direccion}}
						  </md-card-content>

						</md-card>
					<br><br>
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
