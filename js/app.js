
		function affiche() {
			annuaire = JSON.parse(localStorage.getItem('annuaire'));

			console.log(annuaire);
	
		}

		function stockage() {
			localStorage.setItem('annuaire', JSON.stringify(annuaire));
		}
		var annuaire = [];
		
$(document).ready(function() {
	affiche();

	$("#AddEvent").click(function() {
		var pers = { 
			"name" :$("#inputName").val(),
			"First_name": $("#inputFirst_name").val(),
			"tel": $("#inputtel").val()
			 }

		annuaire.push(pers)
	
		console.log(annuaire)
		stockage();
		$("#inputFirst_name").val("");
		$("#inputName").val("");
		$("#inputtel").val("");
	});
 
	function generer() {
 		$('#Annuaire').html('')
 			for (var i = 0; i < annuaire.length; i++) {
				var un = annuaire[i] 
 	 			var ligne = $('<tr/>').data("ID",i);

				$('<td/>').html(i).appendTo(ligne);
 				$("<td>"+ un.name +"</td>").appendTo(ligne);
 				$("<td>" + un.First_name +"</td>").appendTo(ligne);
 				$("<td>" + un.tel + "</td>" ).appendTo(ligne);
 				$("<td>" + "<button>X</button>" + "</td>").appendTo(ligne);


				$('table tbody').append( ligne );
 				stockage();
  	}	
	
	}

	$("#View").click(function() {
	generer(annuaire);
	});

	$('table').delegate('button', 'click', function(){

		var ligne = $(this).parent().parent();
		var ID = ligne.data('ID');

		ligne.remove();
		annuaire.splice(ID, 1);
		console.log( annuaire );

		stockage();
		generer();
	});
});


