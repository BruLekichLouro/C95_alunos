//YOUR FIRE BASE LINKS

user_name = localStorage.getItem("user_name");


//COMPLETAR CÓDIGO DA FUNÇÃO SEND()
function send()
{

});

document.getElementById("msg").value = "";
}

//AMANNDA: Terminar esta function
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
     firebase_message_id = childKey;
     message_data = childData;
//Start code
    
//End code
  } });  }); }
getData();

//AMANNDA: Terminar esta function
function updateLike(message_id)
{
console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;
console.log(updated_likes);

firebase.database().ref(room_name).child(message_id).update({
    like : updated_likes  
 });

}

//Feito
function logout() {

}
