const firebaseConfig = {
  apiKey: "AIzaSyAtQd-GQvWwpKRKA7sgnV1VWO_iXq_vNI0",
  authDomain: "chatapp-b8c2f.firebaseapp.com",
  databaseURL: "https://chatapp-b8c2f-default-rtdb.firebaseio.com",
  projectId: "chatapp-b8c2f",
  storageBucket: "chatapp-b8c2f.appspot.com",
  messagingSenderId: "365004680237",
  appId: "1:365004680237:web:4ba46ef60f6f99f02f1ca4",
  measurementId: "G-R83HLLV7FB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "  !";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; 
    snapshot.forEach(function(childSnapshot) { 
          childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'># "+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("clicked_room", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
