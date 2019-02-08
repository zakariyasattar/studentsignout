document.getElementById('html').style.display = "none";

var provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function (result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;

  uid = user.uid;
  if (uid === "qaOIHfkRUrVlMVKxkfDukSm6k5l1"){
    document.getElementById('html').style.display = "initial";
  }

  // ...

}).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
  console.log("Authentication Error");
});

firebase.auth().onAuthStateChanged(function (user){
  if (user) {
    console.log("current user uid = " + user.uid);
  }
});

console.clear();

function getClasses(){
  var classes = [];
  var formData = new FormData();
  formData.append("teacherFirst", "Kathleen M");
  formData.append("teacherLast", "Buttitta");

  var request = new XMLHttpRequest();
  request.open("POST", "http://fahrenbacher.com/groups/classes.php");
  request.onreadystatechange = function ()
  {
      if(request.readyState === 4)
      {
        if(request.status === 200 || request.status === 0)
        {
          var result = request.responseText;

          var cs = result.split("\n");
          for(var i = 0; i < cs.length - 1; i++) {
              classes.push(cs[i].split(","));
          }
      }
    }
  }
  request.send(formData);
  return classes;
}

function getStudents(period) {
    var formData = new FormData();
    var students = [];
    formData.append("teacherFirst", "Kathleen M");
    formData.append("teacherLast", "Buttitta");
    formData.append("period", period);

    var request = new XMLHttpRequest();
    request.open("POST", "http://fahrenbacher.com/groups/students.php");
    request.onreadystatechange = function ()
    {
        if(request.readyState === 4)
        {
            if(request.status === 200 || request.status === 0)
            {
                //the result String will be in the following format:
                //  <student id>,<student first name>,<student last name>,<student email>\n
                var result = request.responseText;

                var ss = result.split("\n");
                for(var i = 0; i < ss.length - 1; i++) { //last line has no data
                    var stud = ss[i].split(",");
                    students.push(stud);
                }
            }
        }
    }
    request.send(formData);
    return students;
  }

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
    for(var j = 0; j < classes[i].length; j++){
      if(i == 0){
        currentClass = "alg6";
      }
      if(i == 1){
        currentClass = "geo1";
      }
      if(i == 2){
        currentClass = "geo2";
      }
      if(i == 3){
        currentClass = "ps5";
      }
      if(i == 4){
        currentClass = "ps7";
      }
      counter++;
      var bg_colour = Math.floor(Math.random() * 16777215).toString(16);
      bg_colour = "#" + ("000000" + bg_colour).slice(-6);

      var targetDiv = document.getElementById(currentClass);

      var square = document.createElement('a')
      square.className = "fas fa-square";
      square.style.color= bg_colour;
      square.style.float = "left";
      square.style.cursor = "pointer"
      square.style.padding = "33px"
      square.style.textDecoration = "none"
      square.style.fontFamily = "font-family: 'Ubuntu', sans-serif";

      name = nameOfStudentWithId(classes[i][j].substring(0, classes[i][j].indexOf(":")));
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

      console.log(sum);
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
        console.log(counter);
      }
    }
    return totalTimeAbsent+":"+counter;
}

function getIdOfName(name) {
  for(c = 0; c < classes.length; c++){
    for(n = 1; n < classes[c].length; n++){
      if(name == classes[c][n].substring(0, classes[c][n].indexOf(":"))){
        return parseInt(classes[c][n].substring(classes[c][n].indexOf(":") + 1));
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
    var targetDiv = document.getElementById("summary");
    targetDiv.style.marginBottom = "66px";

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
