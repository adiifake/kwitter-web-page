/// Your web app's Firebase configuration
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

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function Send()
{
      msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
