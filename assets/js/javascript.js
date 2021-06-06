document.querySelector("#RandomPassword").onclick = rannum;

function rannum() {
	var listforpass = ['A', 'a', 'B', 'b', 'C', 'c', 'D','d', 'e', 'E',
						"1","2","3","4","5","6","7","8","9","0","#","!","*","l"];

		document.querySelector("#password").innerHTML = "";
						
	for (var i = 0; i < 8; i++) {
		var Random = Math.floor((Math.random() * listforpass.length));

		document.querySelector("#password").innerHTML += listforpass[Random];
		
	}
}

rannum();