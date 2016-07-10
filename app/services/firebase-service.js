myApp
.service('firebaseService', function(){
	
	this.firebaseUrl = function(firebaseTable){
		if(firebaseTable == undefined){
			var url = 'https://freetype-app.firebaseio.com/';
		}
		else{
			var url = 'https://freetype-app.firebaseio.com/' + firebaseTable;
		}
		return url;
	}

});