

angular.module('Service', []).factory('GameService', function() {


	return {

		name: 'Liverpool Vs Arsenal',

		games: [{id: 1, title: 'Liverpool Vs Arsenal', HW : 2.25, o2: 1.67, AW: 2.37}, {id: 2, title: 'Chelsea Vs Manchester United', HW : 1.82, o2: 1.55, AW: 2.77}, {id: 3, title: 'Tottenham Vs Manchester City', HW : 2.21, o2: 1.50, AW: 2.25}],

		getAllGames: function() {

			return this.games;
		} ,

		getSelectedGame: function(id) {

			for (var i = 0; i < this.games.length; i++) {
				if (id === this.games[i].id) {
					return this.games[i];
				};
			};


		},




	}

});