document.getElementById('html').style.display = "none";

var provider = new firebase.auth.GoogleAuthProvider();

if(localStorage.getItem('uid') === "qaOIHfkRUrVlMVKxkfDukSm6k5l1" || localStorage.getItem('uid') === "oIe1Ej0XetZycy6rq9zFY6euz6q2") {
  document.getElementById('html').style.display = "initial";
}
else {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    uid = user.uid;

    if (uid === "qaOIHfkRUrVlMVKxkfDukSm6k5l1" || uid === "UMGPaNkEkoZP375n6xcQxQfhfH22"){
      document.getElementById('html').style.display = "initial";
      localStorage.setItem('uid', uid);
    }
    else {
      document.write("NOT AUTHORIZED");
    }


  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    alert("Authentication Error");
  });
}

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
var selectedName = getSelected();
var totalSeconds = [];
var data = [];
var childData = [];

var firebaseRef = firebase.database().ref().child("ID");

function getSelected() {
  var url = document.URL;
  var string = url.substring(url.indexOf("?") + 1);

  //not in the mood to find a better solution
  //NOTE: This is not the reason the page is taking its time
  //look for a timeout
  for(var i = 0; i < 5; i++){
    string = string.replace("%20", " ");
  }

  return string;
}

function hideAll() {
  document.getElementsByTagName('html')[0].style.display = "none";

}

function showAll(){
  document.getElementsByTagName('html')[0].style.display = "initial";
}

function tabSwitcher(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
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


function nameOfStudentWithId(id_passed) {
  for(var i = 0; i < classes.length; i++){
    for(var j = 0; j < classes[i].length; j++){
      var id = classes[i][j].substring(0, classes[i][j].indexOf(":"))
      var name = classes[i][j].slice(classes[i][j].indexOf(":") + 1);
      if(id == id_passed){
        return name;
      }
    }
  }
  return id;
}

function getClass(id){
  var name = nameOfStudentWithId(id);
  var className = "Not Found";
  for(c = 0; c < classes.length; c++){
    for(n = 1; n < classes[c].length; n++){
      if(name == classes[c][n].substring(0, classes[c][n].indexOf(":"))){
        className = classes[c][0];
      }
    }
  }
  return className;
}



function createKey() {
  var currentClass = "";
  var counter = 0;

  for(var i = 0; i < classes.length; i++){
    for(var j = 1; j < classes[i].length; j++){
      currentClass = classes[i][0];
      counter++;
      var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);

      var targetDiv = document.getElementById(currentClass);

      var square = document.createElement('a')
      square.className = "fas fa-square";
      square.id = "square";
      square.style.color= bg_colour;

      name = nameOfStudentWithId(classes[i][j].substring(0, classes[i][j].indexOf(":")));
      name = name.toLowerCase();
      var words = name.split(" ");
      name = "";

      for(var l = 0; l < words.length; l++) {
        name += words[l][0].toUpperCase() + words[l].substring(1) + " ";
      }

      console.log(name)

      if(name != ""){
        square.innerHTML += " - " + name;
        square.href = "javascript:select(\""  +name +"\")";
        targetDiv.appendChild(square);
      }
    }
   }
}
function select(name) {
  window.location.href = "selected.html?" + name;
}

function averageNumberOfSignOuts(id){
  var totalSignO = totalSignOuts(id);
  for(var i = 0; i < childData.length; i++){
    var val = childData[i];
    var date = val.substring(val.indexOf(":"), val.indexOf(","));
    var signOutsToday = 0;
    for(var j = i + 1; j < childData.length; j++){
      var d = val.substring(val.indexOf(":"), val.indexOf(","));
      if(val.substring(0, val.indexOf(":")) == id && date == d){
        signOutsToday++;
      }
    }
  }
  return parseInt(Math.round((totalSignO + signOutsToday)/2));
}

function totalStudentsOut(date) {
  var dates = [];
  for(var j = 0; j < childData.length; j++){
    var val = childData[j].substring(childData[j].indexOf(":") + 1, childData[j].indexOf(","));
    if(val == date){
      dates.push(childData[j].substring(childData[j].indexOf("?") + 1));
    }
  }
  return dates;
}

function getTimeOut(uid){
  var signOutSeconds = 0;
  var signInSeconds = 0;

  for(var i = 0; i < data.length - 1; i++){
    if(uid == data[i].substring(data[i].indexOf("?") + 1)){
      signOutSeconds = convertToSeconds(data[i].substring(data[i].indexOf(",") + 2), data[i].indexOf(";"));
    }
  }

  for(var j = 0; j < childData.length; j++){
    if(uid == childData[j].substring(childData[j].indexOf("?") + 1)){
      signInSeconds = convertToSeconds(childData[j].substring(childData[j].indexOf(",") + 2), childData[j].indexOf(";"));
    }
  }

  return Math.round(signInSeconds - signOutSeconds);

}

function populateDataTable() {
  var dates = [];
  var table = document.createElement('table');

  for(var i = 0; i < childData.length; i++){
    var dateContent = childData[i].substring(childData[i].indexOf(":") + 1, childData[i].indexOf(","));

    if(dates.indexOf(dateContent) == -1){
      var row = table.insertRow(0);
      var date = row.insertCell(0);
      var totalStudents = row.insertCell();
      var avg = row.insertCell();
      //var studentsAbsent = row.insertCell();

      date.innerHTML = dateContent;
      dates.push(date.innerHTML);

      date.style.width = "30%";
      date.style.fontSize = "15px";

      var students = totalStudentsOut(date.innerHTML);

      totalStudents.innerHTML = students.length;
      totalStudents.style.width = "33.55%";
      totalStudents.style.fontSize = "15px";

      var sum = 0;

      for(var k = 0; k < students.length; k++){
        sum += getTimeOut(students[k]);
      }

      if(sum / students.length > 60){
        avg.innerHTML = (sum / students.length) / 60 + " minutes";
      }
      else {
        avg.innerHTML = (sum / students.length) + " seconds";
      }
      avg.style.fontSize = "15px";

      // studentsAbsent.innerHTML = checkAbsent(date.innerHTML).length;
      //
      // studentsAbsent.style.width = "30%";
      // studentsAbsent.style.fontSize = "15px";
    }

  }

  document.getElementById("dataTable").appendChild(table);
}

function checkAbsent(date){
  var counter = 0;
  var namesAbsent = [];

  for(var i = 0; i < data.length - 1; i++){
    var d = data[i].substring(data[i].indexOf(":") + 1, data[i].indexOf(","));
    var uid = data[i].substring(data[i].indexOf("?") + 1);

    if(d == date){
      var time = totalClassTimeMissed(uid);

      if(time > 600){
        namesAbsent.push(nameOfStudentWithId(data[i].substring(1, data[i].indexOf(":"))));
      }
    }
  }
  return namesAbsent;
}

function totalClassTimeMissed(uid){
  var signOut = "";
  var signIn = "";

  for(var i = 0; i < data.length - 1; i++){
    if(data[i].substring(data[i].indexOf("?") + 1) == uid){
      signOut = data[i];
    }
  }

  for(var i = 0; i < childData.length; i++){
    if(childData[i].substring(childData[i].indexOf("?") + 1) == uid){
      signIn = childData[i];
    }
  }

  signOut = signOut.substring(signOut.indexOf(",") + 2, signOut.indexOf(";"));

  var times = signOut.split(":");
  var totalSignOut = parseInt(times[0]) + parseInt(times[1]);
  totalSignOut += parseInt(times[2].substring(0, times[2].indexOf(" ")));

  times = signIn.split(":");
  var totalSignIn = parseInt(times[0]) + parseInt(times[1]);
  totalSignIn += parseInt(times[2].substring(0, times[2].indexOf(" ")));

  return Math.abs(totalSignIn - totalSignOut);
}

function getTotalTimeAbsentByID(id){
    var counter = 0;
    getTimeAbsent();

    var totalTimeAbsent = 0;
    var totalTime = totalSeconds.slice(0);
    var name = nameOfStudentWithId(id);

    for(var i = 0; i < totalTime.length; i++){
      if(totalTime[i][0] == name){
        totalTimeAbsent += parseInt(totalTime[i][1]);
        counter++;
      }
    }
    return totalTimeAbsent+":"+counter;
}

function getIdOfName(name) {
  for(c = 0; c < classes.length; c++){
    for(n = 1; n < classes[c].length; n++){
      if(name == classes[c][n].substring(classes[c][n].indexOf(":") + 1)){
        return parseInt(classes[c][n].substring(0, classes[c][n].indexOf(":")));
      }
    }
  }
  return -1;
}

function getTimeAbsent() {
  var signIn = [];
  var signOut = [];
  var absentees = [];

  for(var j = 0; j < childData.length; j++){
     signOut.push(childData[j]);
  }
  for(var k = 0; k < data.length; k++){
    signIn.push(data[k]);
  }
  for(var c = 0; c < signIn.length; c++){
    for(var r = 0; r < signOut.length; r++){
      if(typeof signIn[c] != "object"){
        var siId = "";
        siID = signIn[c].substring(1, signIn[c].indexOf(":"))
        var soID = "";
        soID = signOut[r].substring(0, signOut[r].indexOf(":"));
        var timeIn = signIn[c].substring(signIn[c].indexOf(",") + 1);
        var timeOut = signOut[r].substring(signIn[c].indexOf(",") + 1);

        if(siID === soID){
          absentees.push([siID, timeIn, timeOut]);
        }
      }
    }
  }
  copyArray = absentees.slice(0)
  absentees = [];
  for(var i = 0; i < copyArray.length; i++){
    var timeInTotalSeconds = 0;
    var timeOutTotalSeconds = 0;

    var timeIn = "";
    timeIn = copyArray[i][1];
    timeIn = timeIn.substring(1, timeIn.length - 3);

    var timeOut = "";
    timeOut = copyArray[i][2];
    timeOut = timeOut.substring(0, timeOut.length - 3);

    timeInTotalSeconds += parseInt(timeIn.substring(0, timeIn.indexOf(":")) * 3600);
    timeOutTotalSeconds += parseInt(timeOut.substring(0, timeOut.indexOf(":")) * 3600);

    timeIn = timeIn.substring(timeIn.indexOf(":") + 1);
    timeOut = timeOut.substring(timeOut.indexOf(":") + 1);

    timeInTotalSeconds += parseInt(timeIn.substring(0, timeIn.indexOf(":")) * 60);
    timeOutTotalSeconds += parseInt(timeOut.substring(0, timeOut.indexOf(":")) * 60);

    timeIn = timeIn.substring(timeIn.indexOf(":") + 1);
    timeOut = timeOut.substring(timeOut.indexOf(":") + 1);

    timeInTotalSeconds += parseInt(timeIn);
    timeOutTotalSeconds += parseInt(timeOut);

    var subtractedSeconds = Math.abs(timeInTotalSeconds - timeOutTotalSeconds);

    var hrs = Math.floor(subtractedSeconds / 3600);
    var mins = Math.floor(subtractedSeconds / 60);
    subtractedSeconds = Math.floor((subtractedSeconds - (hrs*3600)) - (mins*60));

    absentees.push(nameOfStudentWithId(copyArray[i][0]) + " was gone for " + hrs + " hour(s) " + ", " + mins + " minute(s) " + ", and " + subtractedSeconds + " second(s)");
    totalSeconds.push([nameOfStudentWithId(copyArray[i][0]), Math.abs(timeInTotalSeconds - timeOutTotalSeconds)]);
  }
  return absentees;
}

function totalSignOuts(id){
  var counter = 0;
  for(var i = 0; i < childData.length; i++){
    if(childData[i].substring(0, childData[i].indexOf(":")) == id){
      counter++;
    }
  }
  return counter;
}

function populateHeader() {
  var header = document.createElement('h1');

  header.style.color = "#6a6ee2";
  header.style.fontFamily = "'Roboto', sans-serif";
  header.style.textAlign = "center";

  header.innerHTML = "Data For " + selectedName;

  document.getElementById("header").appendChild(header);
}

function determineTimesOut(id) {
  var counter = 0;

  for(var i = 0; i < childData.length; i++){
    var idVal = parseInt(childData[i].substring(0, childData[i].indexOf(":")));
    if(id == idVal){
      counter++;
    }
  }
  return counter;
}

function populateTable() {
  var table = document.createElement('table');
  table.style.textAlign = "center";
  table.style.border = "1px solid black";

  var dataX = [];
  var counter = 0;
  var id = getIdOfName(selectedName);

  for(var i = 0; i < childData.length; i++){
    var idVal = parseInt(childData[i].substring(0, childData[i].indexOf(":")));
    if(id == idVal){
      dataX.push(childData[i]);
      counter++;
    }
  }

  for(var i = 0; i < counter; i++){
    var row = table.insertRow(0);
    var uid = dataX[i].substring(dataX[i].indexOf("?") + 1);
    var timeOut = row.insertCell();
    var reason = row.insertCell(1);
    var date = row.insertCell(0);

    if(getTimeOut(uid) > 60){
      timeOut.innerHTML = Math.round(getTimeOut(uid) / 60) + " minutes";
    }
    else {
      timeOut.innerHTML = getTimeOut(uid) + " seconds";
    }

    reason.innerHTML = dataX[i].substring(dataX[i].indexOf(";") + 1, dataX[i].indexOf("?"));
    date.innerHTML = dataX[i].substring(dataX[i].indexOf(":") + 1, dataX[i].indexOf(","));

    timeOut.style.textAlign = "center";
    reason.style.textAlign = "center";
    date.style.textAlign = "center";

    date.style.width = "30%";
    timeOut.style.width = "37.5%";
  }
  document.getElementById('table').appendChild(table);
}

function convertToSeconds(timeStamp) {
  var nums = timeStamp.split(":");
  var sum = 0;

  for(var i = 0; i < nums.length - 1; i++){
    nums[i] = parseInt(nums[i]);
  }
  nums[nums.length - 1] = parseInt(nums[nums.length - 1].substring(0, nums[nums.length - 1].indexOf(" ")));

  sum += nums[0] * 3600;
  sum += nums[1] * 60;
  sum += nums[2];

  return sum;
}

function getTimeOutId(id){
  var signOutSeconds = 0;
  var signInSeconds = 0;

  for(var i = 0; i < data.length - 1; i++){
    if(id == data[i].substring(1, data[i].indexOf(":"))){
      signOutSeconds += convertToSeconds(data[i].substring(data[i].indexOf(",") + 2), data[i].indexOf(";"));
    }
  }

  for(var j = 0; j < childData.length; j++){
    if(id == childData[j].substring(0, childData[j].indexOf(":"))){
      signInSeconds += convertToSeconds(childData[j].substring(childData[j].indexOf(",") + 2), childData[j].indexOf(";"));
    }
  }

  return Math.round(signInSeconds - signOutSeconds);
}


function bootstrap() {
  var targetDiv = document.getElementById('summary');
    populateHeader();
    populateTable();

    var numTimesOut = determineTimesOut(getIdOfName(selectedName));

    var header = document.createElement('h1');
    var seconds = getTimeOutId(getIdOfName(selectedName));

    if(!isNaN(Math.round(Math.round(seconds/60) / numTimesOut))){
      if(seconds < 60){
        header.innerHTML = selectedName + " Has Been Out Of the Room " + numTimesOut +
        " Times and Has Missed a Total of " + seconds + " Seconds. "+ selectedName + " Has an Average Time Out Of " + Math.round(Math.round(seconds/60) / numTimesOut) + " Minutes Per Day";
      }
      else{
        header.innerHTML = selectedName + " Has Been Out Of the Room " + numTimesOut +
        " Times and Has Missed a Total of " + Math.round(seconds / 60) + " Minutes. " + selectedName + " Has an Average Time Out Of " + Math.round(Math.round(seconds/60) / numTimesOut) + " Minutes Per Day";
      }
    }
    else {
      header.innerHTML = "No Data For " + selectedName;
    }

    header.style.fontSize = "19px";
    header.style.textAlign = "center";
    header.style.color = "white";

    targetDiv.appendChild(header);
}
