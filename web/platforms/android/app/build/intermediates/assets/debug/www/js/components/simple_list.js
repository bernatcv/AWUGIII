
const SimpleListTemplate = {props: [], 
                          data: () => ({
        radio: false,
        active: false,
        value: null,
        primary: [
                  'Orange',
                  'Apple',
                  'Pineapple'
                ],
        accent: [
                  'Cat',
                  'Dog',
                  'Rabbit'
                ]
    }),
        methods: {
              onConfirm () {
                this.value = 'Agreed'
              },
              onCancel () {
                this.value = 'Disagreed'
              }
        },
        template:`
<div>
   
    

        <md-list-item>
			<md-avatar class="md-large">
			  <img src="img/user1.jpg" alt="People">
			</md-avatar>

			<span class="md-list-item-text">Alex Nelson</span>

			<md-button class="md-icon-button md-list-action">
			  <md-icon class="md-primary">chat_bubble</md-icon>
			</md-button>
		

      	</md-list-item>
		<p class="band_Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

 <md-list-item>
			<md-avatar class="md-large">
			  <img src="img/user1.jpg" alt="People">
			</md-avatar>

			<span class="md-list-item-text">Alex Nelson</span>

			<md-button class="md-icon-button md-list-action">
			  <md-icon class="md-primary">chat_bubble</md-icon>
			</md-button>
		

      	</md-list-item>
		<p class="band_Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>


        

</div>

`
                     };