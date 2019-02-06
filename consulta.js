

var boton = document.getElementById('generar')


boton.addEventListener('click', function (evt) {

	var db.collection('responses').get().then(function (querySnapshot) {
		
	    querySnapshot.forEach(function(doc) {
	        // doc.data() is never undefined for query doc snapshots
	        console.log(doc.id, " => ", doc.data());
	    })
	})

	alert ('hola')
})