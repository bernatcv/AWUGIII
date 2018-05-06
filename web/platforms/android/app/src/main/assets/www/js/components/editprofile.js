const EditProfileTemplate = {props: [],
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
<div id="app">

  <div style="margin-top: 5%">
		
		<div style="text-align: center; margin-bottom:2%">
		<img src="img/logo_iniciosesion.png" width="33%">
	  </div>
  
        <div style="text-align: center;">
        <h2>Perfil de usuario</h2>
        	<div style="width:80%; margin: 0 10%;">
        		<md-field style="margin-bottom: 5px">
				  <label>Nombre del grupo</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
      		<md-field style="margin-bottom: 5px">
			  <label>Descripción de la banda</label>
			  <md-textarea v-model="textarea"></md-textarea>
			</md-field>
      		<md-chips style="margin-bottom: 5px" class="md-primary" v-model="fruits" md-placeholder="Añadir género musical...">
      				
   			</md-chips>
       		<md-field style="margin-bottom: 5px">
			  <label>Imagen del grupo</label>
			  <md-file v-model="single" accept="image/*" />
			</md-field>
       		
        		<md-field style="margin-bottom: 5px">
				  <label>Correo electrónico</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
				
				<md-field style="margin-bottom: 5px">
				  <label>Password </label>
				  <md-input v-model="password" type="password" required></md-input>
				</md-field>
       			<md-field style="margin-bottom: 20px">
				  <label>Repetir Password </label>
				  <md-input v-model="password" type="password" required></md-input>
				</md-field>
      			
      			
       			
        	</div>
        	
			<md-button class="md-raised md-primary" style="width:80%;" @click="goToUserProfile()">Editar perfil</md-button><br>
			
		</div>
        
	</div>
  

</div>


`
                     };
