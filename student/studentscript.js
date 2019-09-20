setInterval(function() {
  update();
}, 300);

console.clear();
classes = [
  [ 'geoext3',
  '65893:Michelle Herrarte',
  '67536:Josemari Deniega',
  '67626:Matthew Jones',
  '68155:Jocelyn Aguilar',
  '72098:Maximis Puente',
  '72838:NICOLE ODISHO',
  '72951:Jaiden Concepcion',
  '73393:Anya Siddiq'
     ],
  [ 'HR',
  '65761:Nicholas Ortiz',
  '66472:Veronica Grden',
  '67044:Kayla Claybron',
  '67581:Zachary Thompson',
  '67595:Ella Winston',
  '67630:Ali Akram',
  '67743:Isabella Roque',
  '68169:Hayden Ferrigno',
  '70651:Damian Kranski',
  '70670:Boris Tiongson',
  '70764:Davy Khim',
  '70916:Jayden Besoaga',
  '70971:Vincent Mangano',
  '70972:Ruby Martinez',
  '70998:Abid Rahman',
  '71151:Kadin Camburn',
  '71234:Antoinette Vandenbroucke',
  '71266:Jibran Khandwala',
  '71319:Andrew Zomaya',
    ],
  [ 'precaladv5',
  '65542:Dulguun Bat-Erdene',
  '65733:Esha Shah',
  '66155:Phil Myco Zulueta',
  '66660:Amanda Hong',
  '67196:Hajer Alasali',
  '68020:Umaimah Ansari',
  '72050:Clarissa Curescu',
  '72083:Eden Melamed',
  '72117:Daniel Arnautu',
  '72137:Andjela Dimitrijevic',
  '72143:Joaquin Felix Gomez',
  '72154:Lauren Hersh',
  '72586:Emma Beavers',
  '72606:Harsi Gandhi',
  '72694:Oliver Kozub',
  '72702:Thomas Magdaleno',
  '72715:Nandini Shah',
  '72722:Sharon Varghese',
  '73464:Omar Louafi'
     ],
  [ 'geo6',
  '65893:Michelle Herrarte',
  '66022:Benipal Nano',
  '67600:Adelaila Morales',
  '67782:Israel Islas Diaz',
  '68260:David Leuviah Ortinero',
  '68355:Zaya Awriany',
  '69394:Jaisha Tariq',
  '70701:Aman Syed',
  '70745:Rida Rehman',
  '71299:Tahniyath Syeda',
  '72099:Faris Rahic',
  '72234:Nareg Yacoubian',
  '72807:BRANDON GAODE',
  '72812:JENNIFER GUERRERO',
  '72878:Sarah Cachila',
  '72890:Arucia Elahi',
  '72895:Miki Canak',
  '72910:Katrin Tamo',
  '72951:Jaiden Concepcion',
  '72962:Leah Sada',
  '72969:Nicholas Zervos',
  '73377:Matthew Chung',
  '73456:Leona Younatham'
     ],
  [ 'precaladv8',
  '65693:Charlotte Howard-Check',
  '66511:Fahad Khan',
  '67358:Faheem Patel',
  '67958:Dionisios Koukounaras',
  '68037:Aadil Patel',
  '68051:Rabeeka Khan',
  '68815:Ali Nawaz',
  '69045:Christine Nguyen',
  '69106:Tyreke Beverly',
  '71277:Savonna Mosio',
  '71905:Manal Ali',
  '71918:Nimra Fatima',
  '72122:Ephraim Bennett',
  '72174:Brandon Le',
  '72201:Katerina Rizzotti',
  '72206:Philip Saba',
  '72217:Daniella Suh',
  '72218:Ethan Suh',
  '72220:Laiba Sukhera',
  '72226:Harry Truong',
  '72595:Jeremiah Curescu',
  '72631:Jessica Lu',
  '72644:Sophia Nicole Ramos',
  '73459:Dharma Delahanty'
  ],
[ 'geo9',
  '65499:Katelyn Rivero',
  '66004:Wilbert Escalante',
  '67626:Matthew Jones',
  '67913:Ahad Ali Ahmed',
  '68155:Jocelyn Aguilar',
  '68367:Faith Khoshaba',
  '69301:Nazanin Wahdi',
  '72067:Jasmine Kaur',
  '72098:Maximis Puente',
  '72579:Wasif Amin',
  '72676:Inara Ali',
  '72723:Alejandro Villegas',
  '72838:NICOLE ODISHO',
  '72840:Mehreen Patel',
  '72845:Nathan Piuian',
  '72869:NICHOLAS YONAN',
  '72872:Elizabeth Irving',
  '72907:Melisa Gundogdu',
  '72944:Adan Fatima',
  '72948:Elias Azami',
  '72950:Marya Khan',
  '72985:Emily Suh',
  '73001:Orama Korel',
  '73393:Anya Siddiq',
  '73406:Alexis Rebollar',
  '73436:Elizabeth Kempf',
  '75147:Naveen Mallett'
]
 ]

var idNums = [];
var data = [];
var childData = [];
var currentlyOut = [];
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
      // if(typeof classes[c][n] != "object"){
        if(str + ":" + nameOfStudentWithId(str) == classes[c][n]){
          valid = true;
        }
      // }
    }
  }
 return (!/[~!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str)) && valid;
}

function update() {
  currentlyOut = [];

  logRef.on("value", function(snapshot) {
    snapshot.forEach(function (childSnapshot) {
      currentlyOut.push(childSnapshot.val());
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
    if(currentlyOut.indexOf(nameValue + "") == -1){
      logRef.push(nameValue + "");
      logRef.push(Math.random().toString(36).substring(7));

      var date = timeStamp.substring(0, timeStamp.indexOf(","));
      var time = timeStamp.slice(timeStamp.indexOf(",") + 1);

    	swal("Yes!", "You have successfully signed out on " + date + " at" + time + "!", "success");
      appendStudent(nameValue);

      update();

			firebaseRef.push(nameValue + ":"  + timeStamp + ";" + reason + "?" + currentlyOut[currentlyOut.indexOf(nameValue + "")]);
      firebaseRef.push("s" + nameValue + ":" + timeStamp + ";" + reason + "?" + currentlyOut[currentlyOut.indexOf(nameValue + "") + 1]);
		}

		else if(currentlyOut.indexOf(nameValue + "") != -1){
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
              firebaseRef.child("signOut").push(nameValue + ":" + timeStamp + ";" + reason + "?" + currentlyOut[currentlyOut.indexOf(nameValue + "") + 1]);
    				}
          }
  			})
		});

    var uidTied = currentlyOut[currentlyOut.indexOf(nameValue + "") + 1];

    logRef.once("value", function(snapshot) {
      snapshot.forEach(function (childSnapshot) {
        if(childSnapshot.val() == nameValue + "" || childSnapshot.val() == uidTied){
          logRef.child(childSnapshot.key).remove();
        }
      })
    });
    currentlyOut.splice(currentlyOut.indexOf(nameValue + ""), 2);
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
      var name = classes[i][j].substring(classes[i][j].indexOf(":") + 1)
      var id1 = classes[i][j].substring(0, classes[i][j].indexOf(":"));
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
