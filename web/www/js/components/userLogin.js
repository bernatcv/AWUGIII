const userLoginTemplate = {props: [], 
        methods: {
            goToUserRegistration(){
                this.$router.push('userRegistration');
            },
            goToSimpleList(){
                 this.$router.push('bandLogin');
                }
        },
						  
						  
                          
        template:`
<div class="yAlign">
		
		<div style="text-align: center; margin-bottom:2%">
		<img src="img/logo_iniciosesion.png" width="33%">
	  </div>
  
        <div style="text-align: center;">
        
        	<div style="width:80%; margin: 0 10%;">
        		<md-field>
				  <label>Usuario o correo electrónico</label>
				  <md-input v-model="required" required></md-input>
				  <span class="md-error">There is an error</span>
				</md-field>
				<md-field>
				  <label>Password </label>
				  <md-input v-model="password" type="password" required></md-input>
				</md-field>
        	</div>
        	
        	
			<md-button class="md-raised md-primary" style="width:80%;" v-on:click="goToSimpleList()">Entrar</md-button><br>
			
		</div>
       
       
       <div>
		<div class="botton">
		 

				<a v-on:click="goToUserRegistration()" style="margin: 10px auto;">
					<p>¿No tienes una cuenta? <strong>Regístrate</strong>.</p>
				</a>


		 
		</div>
	  </div>
       
	</div>

`
                     };
