const SettingsTemplate = {props: [], 
						  
						  
                          
        template:`
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


`
                     };
