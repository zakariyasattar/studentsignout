setInterval(function() {
  update();
}, 300);

console.clear();
classes = [
  [ 'alg6',
    'Adrian Murillo:67305',
    'Josemari Deniega:67536',
    'Alexander Ethan Merkel:67625',
    'Tiara Banac Puente:68128',
    'Maryam Al-Salihi:68284',
    'Alec Ulbert:71233',
    'Nicole Piro:72196',
    'NICOLE ODISHO:72838',
    'BRYAN TRAN:72863',
    'Khanh Huynh:72906',
    'Mohammed Siddiqui:72921',
    'Izabella Putrus:73007',
    'Saad Iqbal:73381'
     ],
  [ 'geo1',
    'Oscar Vega:65594',
    'Aida Mehicevic:65764',
    'Erick Mora Vargas:65894',
    'Joshua Padios:66171',
    'Baha Mohamad:67226',
    'Lexie Bugara:67415',
    'Noor Anwar:67836',
    'Rami Lahluh:67841',
    'Alexandru Craciun:67920',
    'Chloe Jao:67960',
    'Janay Moncrief:68131',
    'Rabia Khan:69339',
    'Angelyn Cagatan:71251',
    'Katlyn Arnold:71908',
    'Ashour Daniel:71914',
    'Krystian Gadek:71920',
    'John Jado:71927',
    'Cameron Johnson:71929',
    'Andrew Zadesenets:71969',
    'Ariana Murphy:72085',
    'Olivia Furlano:72145',
    'Nicolas Vera:72230',
    'Gael Gutierrez:72321',
    'Brandon Ayala:72583',
    'Jake Hoffman:72614',
    'Lauren Rubio:72651',
    'Patrick Busch:73458'
    ],
  [ 'geo2',
    'Zakariya Sattar:68742',
    'Enesa Dibra:65656',
    'Omar Hussaini:66891',
    'Tairim Pretha:67805',
    'Burhan Bhatti:67896',
    'Hajirah Khan:68056',
    'Ashley Youkhana:68599',
    'Monique McDonald:68603',
    'Hoang Vo:68829',
    'Isaiah Liboy:68848',
    'Daniel Belay:69168',
    'Mujeeb Ansari:69340',
    'Zehra Rizvi:70791',
    'Jason Smalbergher:71015',
    'Lilian Hwang:71059',
    'Amanze Nwosu:71207',
    'Ayman Jaddi:71926',
    'Paul Karabatsos:71930',
    'Janelle Rodriguez:71951',
    'George Rosca:71952',
    'Ronnie Leavitt:72175',
    'Aldin Perazic:72194',
    'Angelina Sikaras:72214',
    'Maya Rios:72648'
     ],
  [ 'ps5',
    'Susan Giffen:62570',
    'Kayla Lawrence:62608',
    'Christian Dangelo Lewis:62610',
    'Hevan Patel:62648',
    'Sloan Tomczak:62684',
    'Stefan Tranescu:62687',
    'Steven Agos:63080',
    'Umaimah Siddiqui:63204',
    'Stephanie Sorisho:63208',
    'Divya Patel:63272',
    'Aleksandra Smyk:63404',
    'Melissa Alanis:63414',
    'Christian Garcia:63440',
    'Maha Shakir:63498',
    'Samantha Simkins:63499',
    'Nabeel Qadri:68582',
    'Samuel Montgomery:71202'
     ],
  [ 'ps7',
    'Branden Logal:62322',
    'Jane Bochnia:62536',
    'Aritri Dutta:62558',
    'Sarah Sundrani:62677',
    'Taral Talati:62678',
    'Dylan Chikko:63104',
    'Evan Han:63134',
    'Marina Palladinetti:63180',
    'Isabella Reza:63195',
    'Maham Syed:63212',
    'Laura Trinh:63220',
    'Gabriella Goldman:63245',
    'Christina Lappas:63261',
    'Nicole Juszczyk:63371',
    'Anna Krasiy:63375',
    'Katarina Letica:63379',
    'Wyatt Zwik:63411',
    'Christian Castillo:63424',
    'Soohyeon Jung:63451',
    'Rolands Teivans:63507',
    'Shelly Sabaricos:65487',
    'Husayn Dashtee:65632',
    'Angelyna Madrid:66222',
    'Zehra Rizvi:70791',
    'Aileen Nguyen:71205'
     ] ]

var idNums = [];
var data = [];
var childData = [];
var uid = [];
var logRef = firebase.database().ref().child("log");
var firebaseRef = firebase.database().ref().child("ID");

clearThis();

function drop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function appendStudent(id){
  var targetDiv = document.getElementById('students');
  var div = document.createElement('div');
  div.className = id;

  var h1 = document.createElement('h1');
  var hr = document.createElement('hr');

  h1.innerHTML = nameOfStudentWithId(id);
  h1.style.fontSize = "15px";

  div.appendChild(h1);
  div.appendChild(hr);

  var out = firebase.database().ref().child("out");
  out.push(nameOfStudentWithId(id));

  targetDiv.appendChild(div);
}

function removeStudents(id){
  var div = document.getElementsByClassName(id)[0];
  div.style.display = "none";

  var out = firebase.database().ref().child("out");

  out.on("value", function(snapshot) {
   snapshot.forEach(function (childSnapshot) {
     if(childSnapshot.val() == nameOfStudentWithId(id)){
       firebaseRef.child(childSnapshot.key).remove();
     }
   })
  });
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

firebaseRef.on("value", function(snapshot) {
  data = [];
 snapshot.forEach(function (childSnapshot) {
   data.push(childSnapshot.val());
 })
});

firebaseRef.child("signOut").on("value", function(snapshot) {
  childData = [];
  snapshot.forEach(function (childSnapshot) {
    childData.push(childSnapshot.val());
  })
});


function isValid(str) {
  var valid = false;
  for(c = 0; c < classes.length; c++){
    for(n = 1; n < classes[c].length; n++){
      if(typeof classes[c][n] != "object"){
        if(str == classes[c][n].substring(classes[c][n].indexOf(":") + 1)){
          valid = true;
        }
      }
    }
  }
 return (!/[~!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str)) && valid;
}

function update() {
  uid = [];

  logRef.on("value", function(snapshot) {
    snapshot.forEach(function (childSnapshot) {
      uid.push(childSnapshot.val());
    })
  });
}

function submit() {
  update();
  //connect to db
  var nameValue = document.getElementById("uniqueID").value;

  var reason = $(".form").val();
  var timeStamp = new Date().toLocaleString();

  //append value to db based on input
  if (isValid(nameValue) && nameValue.indexOf("`") == -1 && nameValue.length == 5 && !isNaN(nameValue) ) {

    if(uid.indexOf(nameValue + "") == -1){
      logRef.push(nameValue + "");
      logRef.push(Math.random().toString(36).substring(7));

      var date = timeStamp.substring(0, timeStamp.indexOf(","));
      var time = timeStamp.slice(timeStamp.indexOf(",") + 1);

    	swal("Yes!", "You have successfully signed out on " + date + " at" + time + "!", "success");
      appendStudent(nameValue);

      update();

			firebaseRef.push(nameValue + ":"  + timeStamp + ";" + reason + "?" + uid[uid.indexOf(nameValue + "") + 1]);
      firebaseRef.push("s" + nameValue + ":" + timeStamp + ";" + reason + "?" + uid[uid.indexOf(nameValue + "") + 1]);
		}

		else if(uid.indexOf(nameValue + "") != -1){
			var hasRunOnce = false;

      var date = timeStamp.substring(0, timeStamp.indexOf(","));
      var time = timeStamp.slice(timeStamp.indexOf(",") + 1);

    	swal("Welcome Back!", "You have successfully signed back in " + date + " at" + time + "!", "success");
      removeStudents(nameValue);

			firebaseRef.on("value", function(snapshot) {
  			snapshot.forEach(function (childSnapshot) {
          if(typeof(childSnapshot.val()) != "object"){
    				if(nameValue == childSnapshot.val().substring(0, childSnapshot.val().indexOf(":"))){
              firebaseRef.child(childSnapshot.key).remove();
              firebaseRef.child("signOut").push(nameValue + ":" + timeStamp + ";" + reason + "?" + uid[uid.indexOf(nameValue + "") + 1]);
    				}
          }
  			})
		});

    var uidTied = uid[uid.indexOf(nameValue + "") + 1];

    logRef.once("value", function(snapshot) {
      snapshot.forEach(function (childSnapshot) {
        if(childSnapshot.val() == nameValue + "" || childSnapshot.val() == uidTied){
          logRef.child(childSnapshot.key).remove();
        }
      })
    });
    uid.splice(uid.indexOf(nameValue + ""), 2);
  }
	}
  else {
    swal("Sorry!", "Your input was invalid", "error");
  }
}

//completely clear text entry
function clearThis() {
  var form = document.getElementById("inputForm");
	if(form != null){
  	form.reset();
	}
}

function nameOfStudentWithId(id) {
  for(var i = 0; i < classes.length; i++){
    for(var j = 0; j < classes[i].length; j++){
      var name = classes[i][j].substring(0, classes[i][j].indexOf(":"))
      var id1 = classes[i][j].slice(classes[i][j].indexOf(":") + 1);
      if(id == id1){
        return name;
      }
    }
  }
  return id;
}

$(document).ready(function () {
  $('#uniqueID').keypress(function (e) {
    if (e.keyCode == 13) {
      submit();
      clearThis();
    }
  });
});
