myApp.directive('navDirective', function() {
	var directive = {};

	//directive.restrict = 'E'; /* restrict this directive to elements */
	directive.templateUrl = "directives/nav-directive.html";

	return directive;
	});