// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPwaDLi4Yf8FMM6id3-LCbXUniv1HNuLE",
    authDomain: "kwitter-project-bd76b.firebaseapp.com",
    databaseURL: "https://kwitter-project-bd76b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-bd76b",
    storageBucket: "kwitter-project-bd76b.appspot.com",
    messagingSenderId: "541158450276",
    appId: "1:541158450276:web:62445ce2e848f3435beb71"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
     console.log("Room Name - " + Room_names);
     row="<div class=' room_name' id=" +Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr></hr>";
     document.getElementById("output").innerHTML+= row;
    //End code
    });});}
getData();
function addRoom()
{
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
       window.location="kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
         window.location = "kwitter.html";
}