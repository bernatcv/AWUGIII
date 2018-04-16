

const UserProfileTemplate = {props: [],    
							 data: () => ({
    cities: [
      'New York',
      'Amsterdam',
      'Tokyo',
      'Rome'
    ]
  }),
        template:`

<div>
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

				<md-speed-dial-target @click="goToSettings()">
							<md-icon class="md-size-1x">add</md-icon>
				</md-speed-dial-target>
			
		
			
			
<md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Concierto en Terrassa</div>
          <div class="md-subhead">21/06/2016</div>
        </md-card-header-text>

        
          <md-button class="md-icon-button" md-menu-trigger>
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

        
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>edit</md-icon>
          </md-button>

      </md-card-header>

      <md-card-content>
        Carrer de la Igualtat, 33, 08222 Terrassa, Barcelona
      </md-card-content>

    </md-card>

</div>
  </div>


`

		 
                     };













