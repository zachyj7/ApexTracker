const apiurl = "https://api.mozambiquehe.re/maprotation?auth=587d7e81d0adbec869b252242804614f"

function openTab(evt, idName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(idName).style.display = "block";
    evt.currentTarget.className += " active";     

    getData(apiurl, idName)
}

async function getData(url, idName) {
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  if (response) {
      
  }
  switch(idName) {
    case idName = "Map":
        displayMap(data)
      break;
    case idName = "Crafting":
        displayCrafting(data)
      break;
    case idName = "Predator":
        displayPredator(data)
      break;
  }
}

function displayMap(data) {
  document.getElementById("currentmap").innerHTML = data.current.map
  document.getElementById("timeremainingmap").innerHTML = data.current.remainingTimer
}

function displayCrafting(data) {
  document.getElementById("currentcraft").innerHTML += data.current.map
}

function displayPredator(data) {
  document.getElementById("currentrp").innerHTML += data.current.map
}