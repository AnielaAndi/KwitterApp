
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDI8C4U7MEUsniiJj9LPal2FV90WJtf5hE",
      authDomain: "kwitter-app-b0298.firebaseapp.com",
      databaseURL: "https://kwitter-app-b0298-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-b0298",
      storageBucket: "kwitter-app-b0298.appspot.com",
      messagingSenderId: "238009094109",
      appId: "1:238009094109:web:14b1a4f54beb1f37fdb034"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig); 

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome" + user_name + "!";
    
    function addRoom() {
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location="kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      
      });
}); 
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
