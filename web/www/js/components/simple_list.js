
var listaJson = [
    {titulo: "ACDC", fecha: "02/01/2018", imagen: "img/acdc.jpg", direccion: "Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona"},
    {titulo: "Extremoduro", fecha: "02/01/2018", imagen: "img/asdf.jpg", direccion: "Carrer voluntaris olimpics, n4"},
    {titulo: "Marea", fecha: "02/01/2018", imagen: "img/acdc.jpg", direccion: "Carrer Nou Pins 67"}
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


					<div class="contenedor1" v-for="evento in eventos">

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
