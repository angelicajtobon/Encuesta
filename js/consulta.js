var boton = document.getElementById('generar')

boton.addEventListener('click', function (evt) {
  var tableBody = document.getElementById('table-body')
  var innerTable = ''
	var db = firebase.firestore()	
  db.collection('responses')
    .get().then(function(querySnapshot) {
	    querySnapshot.forEach(function(doc) {
        innerTable += '<tr>'
        var data = doc.data()
        var lengthData = Object.keys(data).length
        for (let i = 0; i < lengthData; i++) {
          var j = i + 1
          if (j <= lengthData - 1) {
            innerTable += '<td>' + data['resp' + j] + '</td>'
          } else {
            innerTable += '<td>' + data['fecha'] + '</td>'
          }
        }
        innerTable += '<tr>'
      })
      tableBody.innerHTML = innerTable
	})
})