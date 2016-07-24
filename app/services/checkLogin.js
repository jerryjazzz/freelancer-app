myApp
.service('checkLogin', function(){
	
	this.checkLogin = function(){
		var user = ref.getAuth();
		if(user == null){
			console.log('Logged Out')
		}
		else{
			console.log('Logged In');
		}
	}

});