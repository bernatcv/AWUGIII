const IndiceTemplate = {props: [], 
		methods: {
            goToUserLogin(){
                this.$router.push('userLogin');
            },
            goToBandLogin(){
                 this.$router.push('bandLogin');
                }
        },				  
						  
                          
        template:`

<div class="yAlign">
			<div style="text-align: center; margin-bottom:2%">
				<img src="img/logo_iniciosesion.png" width="33%">
			</div>

			<div style="text-align: center;">
				<md-button class="md-raised md-primary" style="width:50%;" v-on:click="goToUserLogin()">Entrar como usuario</md-button><br>
				<md-button class="md-raised md-primary" style="width:50%;" v-on:click="goToBandLogin()">Entrar como banda</md-button>
			</div>
	  </div>

`
                     };
