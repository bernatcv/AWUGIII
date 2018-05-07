const userRegistrationTemplate = {props: [], 
						       data: () => ({
        showNavigation: false
                            }),
			methods: {
            goToUserLogin(){
                this.$router.push('userLogin');
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
				  <label>Nombre</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
       		<md-field style="margin-bottom: 5px">
				  <label>Primer Apellido</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
       		<md-field style="margin-bottom: 5px">
				  <label>Segundo Apellido</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
        		<md-field style="margin-bottom: 5px">
				  <label>Correo electrónico</label>
				  <md-input v-model="required" required></md-input>
				</md-field>
				
				<md-field style="margin-bottom: 5px">
				  <label>Password </label>
				  <md-input v-model="password" type="password" required></md-input>
				</md-field>
       			<md-field style="margin-bottom: 5px">
				  <label>Repetir Password </label>
				  <md-input v-model="password" type="password" required></md-input>
				</md-field>
      			
      			<md-chips class="md-primary" v-model="chips" md-placeholder="Add genre...">
      				<div class="md-helper-text">Default</div>
   				 </md-chips>
       			
        	</div>
        	
			<md-button class="md-raised md-primary" style="width:80%;" v-on:click="goToUserLogin()" >Crear cuenta</md-button><br>
			
		</div>
        
	</div>
  

   
       <div class="botton">
       		<a v-on:click="goToUserLogin()" style="margin: 10px auto;">
       			<p >¿Ya tienes una cuenta? <strong>Inicia sesión</strong>.</p>
       		</a>
       
        
     
	  </div>

`
                     };
