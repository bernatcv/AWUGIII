    Vue.use(VueMaterial.default);
    Vue.use(VueRouter);

//    Vue.material.registerTheme('about', {
//          primary: {
//            color: 'indigo',
//            hue: 'A200'
//          },
//          accent: {
//            color: 'grey',
//            hue: 300
//          }
//        });

//Vue.material.setCurrentTheme('about');


function init(){
    
    
    const routes = [
                //{path: '/inbox', name: 'inbox', component: MailListTemplate},
            {path: '/simplelist', name: 'simplelist', component: SimpleListTemplate}
			,{path: '/settings', name: 'settings',  component: SettingsTemplate}
		 	,{path: '/userprofile', name: 'userprofile', component: UserProfileTemplate}
			,{path: '/editprofile', name: 'editprofile', component: EditProfileTemplate}
			,{path: '/newevent', name: 'newevent', component: NewEventTemplate}
			,{path: '/indice', name: 'indice', component: IndiceTemplate }
			,{path: '/userLogin', name: 'userLogin', component: userLoginTemplate }
			,{path: '/bandLogin', name: 'bandLogin', component: bandLoginTemplate }
            ,{path: '/userRegistration', name: 'userRegistration', component: userRegistrationTemplate }
            ,{path: '/bandRegistration', name: 'bandRegistration', component: bandRegistrationTemplate }
            ];

        const router = new VueRouter({
                routes // short for `routes: routes`
            });

    const app = new Vue({
        el: '#app',
        router,
        data: { showNavigation: false,
                showSidepanel: false,
              message: 'Hola!'},
        methods: {
            goToEditProfile: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('editprofile');
                },
           
            goToSimpleList: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('simplelist');
                }, 
			
			goToSettings: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'settings'})
                },
			
			goToNewEvent: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push({ name: 'newevent'})
                },
			
			goToUserProfile: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('userprofile');
                },
			goToIndice: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('indice');
                },
			goToUserLogin: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('userLogin');
                },
			goToBandLogin: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('bandLogin');
                },
            goToUserRegistration: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('userRegistration');
                },
			goToBandRegistration: function(){
                this.showNavigation = false;
                    //this.$refs.sidebar.toggle();
                    router.push('bandRegistration');
                }
			
        }
            
      }).$mount('#app');
    
    //router.push('settings');
    router.push({ name: 'indice'})
}




        

