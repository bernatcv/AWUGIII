const bandRegistrationTemplate = {props: [], 

                 data: () => ({
        showNavigation: false,
        chips: ["Pop", "Rock", "Jazz", "Metal"]
                            }),
			methods: {
            goToBandLogin(){
                this.$router.push('bandLogin');
            }
			},
                          
        template:`
<div style="margin-top: 5%">
		
		<div style="text-align: center; margin-bottom:2%">
		<img src="img/logo_iniciosesion.png" width="33%">
	  </div>
  
        <div style="text-align: center;">
        <h2>Registro de un nuevo usuario</h2>
        	<div style="width:80%; margin: 0 10%;">
        		<md-field style="margin-bottom: 5px">
				  <label>Nombre del grupo</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
      		<md-field style="margin-bottom: 5px">
			  <label>Descripción de la banda</label>
			  <md-textarea v-model="textarea"></md-textarea>
			</md-field>
				<div>
				<md-chips class="md-primary" v-model="chips" md-placeholder="Añadir género musical">
      				<div class="md-helper-text">Default</div>
   				 </md-chips>
				 </div>
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
        	
			<md-button class="md-raised md-primary" style="width:80%;" v-on:click="goToBandLogin()">Crear cuenta</md-button><br>
			
		</div>
        
	</div>
  

   
       <div class="botton">
       		<a v-on:click="goToBandLogin()" style="margin: 10px auto;">
       			<p >¿Ya tienes una cuenta? <strong>Inicia sesión</strong>.</p>
       		</a>
       
        
     
	  </div>

`
                     };
