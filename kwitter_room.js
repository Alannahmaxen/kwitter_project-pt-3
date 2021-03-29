 var firebaseConfig = {
  apiKey: "AIzaSyCD4a4O8MDCSbllFz_EXcSJhtLn19JSEDk",
  authDomain: "kwitterproject-2c75e.firebaseapp.com",
  projectId: "kwitterproject-2c75e",
  storageBucket: "kwitterproject-2c75e.appspot.com",
  messagingSenderId: "1060324685778",
  appId: "1:1060324685778:web:66ca5451631319fb7aba0b",
  measurementId: "G-JSTVEWKZQ3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  
 
  user_name = localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
      
      
  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebaseConfig.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  }
  
  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
  
    firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
    });
  
    localStorage.setItem("room_name", room_name);
  
    window.location = "kwitterpage.html";
  }
  function getData() {firebase.database().ref("/").on('value', function(snapshot)  {document.getElementById("output").innerHTML
  oom_name = childKey;
  console.log("Room Name - " + Room_name);
  row = "<div class = 'room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >"+ Room_name +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  });}
  getData();
  
  function redirectToRoomName(name)
  {
    console.log(name);
    lacalStorage.setItem("room_name", name);
    window.location = "kwitterpage.html";
  }
  
  function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
  }
