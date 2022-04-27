
var url = "http://localhost:5000/amigos";

$('#boton').click(function mostrarAmigos() {
   $("#lista").empty();
    $.get(url, function (data) {
    
      for(let i = 0; i < data.length; i++){
        //   let li = document.createElement("li");
        //   li.id = data[i].id;
        //   li.innerText = data[i].name;
        //   let lista = document.getElementById("lista")
        //   lista.appendChild(li);

          $("#lista").append(`<li id= ${data[i].id}>${data[i].name} 
           <button id=${data[i].id} onclick= eliminarAmigo(${data[i].id})>X</button></li>`);
      }
    });
});

$('#search').click(function () {
    
    $("#amigo").empty();  
    // let input = document.getElementById("input");
    let input = $("#input").val();
    
    $.get(url + "/"+ input , function (data) {
        if(input){
        $("#amigo").text(`${data.name}`); 
        }
        $("#input").val("");
    });
 });   

 function eliminarAmigo(input) {
     
    // let input = document.getElementById("input");
    if(!input) input = $("#inputDelete").val();
    let friend;
    
    $.get(url + "/"+ input , function (data) {
        friend = data.name; 
    });

    $.ajax({
        url: url + "/"+ input,
        type: "DELETE",
        success: function(){
            $("#success").text(`Tu amigo ${friend} fue eliminado`);
            $("#inputDelete").val("");
        }
    })
 };   

 $('#delete').click(eliminarAmigo)

