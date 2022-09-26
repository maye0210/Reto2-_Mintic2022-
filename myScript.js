function leerClientes(){
//FUNCION GET
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
	    type : 'GET',
	    dataType : 'json',

	    success : function(clientes) {
	   		let cs=clientes.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaClientes").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].email+" "+cs[i].age);
	   			$("#listaClientes").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}


function guardarCliente() {
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});


}


function editarCliente(){
	let idCliente=$("#idCliente").val();
	let nombre=$("#nombreCliente").val();
	let mailCliente=$("#mailCliente").val();
	let edad=$("#edadCliente").val();

	let data={
		id:idCliente,
		name:nombre,
		email:mailCliente,
		age:edad
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}

function borrarCliente(idCliente){
	let data={
		id:idCliente
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/client/',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
	   		$("#idCliente").val("");
			$("#nombreCliente").val("");
			$("#mailCliente").val("");
			$("#edadCliente").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});
}

//BICICLETA
function leerBicicleta(){
//FUNCION GET
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/bike/',
	    type : 'GET',
	    dataType : 'json',

	    success : function(bicicleta) {
	   		let cs=bicicleta.items;
	   		$("#listaBicicleta").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaBicicleta").append(cs[i].id+" <b>"+cs[i].name+"</b> "+cs[i].brand+" "+cs[i].modelo+" "+cs[i].category_id);
	   			$("#listaBicileta").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}


function guardarBicicleta() {
	let idBicicleta=$("#idBicicleta").val();
	let nombre=$("#nombreBicicleta").val();
	let brand=$("#brandBicicleta").val();
	let modelo=$("#modeloBicicleta").val();
	let category_id=$("#category_idBicicleta").val();

	let data={
		id:idBicicleta,
		name:nombre,
		brand:brand,
		modelo:modelo,
		category_id:category_id
	};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/bike/',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(gw) {
	   		$("#idBicicleta").val("");
			$("#nombreBicicleta").val("");
			$("#brandBicicleta").val("");
			$("#modeloBicicleta").val("");
			$("#category_idBicicleta").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerBicicleta();
	    }
	});


}


function editarBicicleta(){
	let idBicicleta=$("#idBicicleta").val();
	let nombre=$("#nombreBicicleta").val();
	let brand=$("#brandBicicleta").val();
	let modelo=$("#modeloBicicleta").val();
	let category_id=$("#category_idBicicleta").val();
	
	let data={
		id:idBicicleta,
		name:nombre,
		brand:brand,
		modelo:modelo,
		category_id:category_id
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/bike/',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(gw) {
			$("#idBicicleta").val("");
			$("#nombreBicicleta").val("");
			$("#brandBicicleta").val("");
			$("#modeloBicicleta").val("");
			$("#category_idBicicleta").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerClientes();
	    }
	});

}

function borrarBicicleta(idBicicleta){
	let data={
		id:idBicicleta
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/open-api-catalog/bike/',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idBicicleta").val("");
			$("#nombreBicicleta").val("");
			$("#brandBicicleta").val("");
			$("#modeloBicicleta").val("");
			$("#category_idBicicleta").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerBicicleta();
	    }
	});
}

//MENSAJE
function leerMensaje(){
//FUNCION GET
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/:id',
	    type : 'GET',
	    dataType : 'json',

	    success : function(mensaje) {
	   		let cs=mensaje.items;
	   		$("#listaClientes").empty();
	   		for(i=0;i<cs.length;i++){
	   			$("#listaMensaje").append(cs[i].id+" <b>"+cs[i].messagetext+"</b> ");
	   			$("#listaMensaje").append("<button onclick='borrarCliente("+cs[i].id+")'>Borrar</button><br>");
	   		
	   		}
	    },
	    error : function(xhr, status) {
	        alert('ha sucedido un problema');
	    }
	});
}


function guardarMensaje() {
	let idMensaje=$("#idMensaje").val();
	let messagetext=$("#messagetext").val();
	
	let data={
		id:idMensaje,
		messagetext:messagetext
		
	};

	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);


	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/:id',
	    type : 'POST',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(hola) {
	   		$("#idMensaje").val("");
			$("#messagetext").val("");
			
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMensaje();
	    }
	});


}


function editarMensaje(){
	let idMensaje=$("#idMensaje").val();
	let messagetext=$("#messagetext").val();

	let data={
		id:idMensaje,
		messagetext:messagetext
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/:id',
	    type : 'PUT',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idMensaje").val("");
			$("#messagetext").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMensaje();
	    }
	});

}

function borrarMensaje(idCliente){
	let data={
		id:idMensaje
	};
	let dataToSend=JSON.stringify(data);
	//console.log(dataToSend);
	$.ajax({    
	    url : 'https://g90d223f781681d-ny1z9jzyy610yz6i.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message/:id',
	    type : 'DELETE',
	 //   dataType : 'json',
	    data:dataToSend,
	    contentType:'application/json',
	    success : function(pepito) {
			$("#idMensaje").val("");
			$("#messagetext").val("");
	    },
	    error : function(xhr, status) {
	   //     alert('ha sucedido un problema');
	    },
	    complete: function(){
	    	leerMensaje();
	    }
	});

}
