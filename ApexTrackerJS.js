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

    getData(idName)
}

async function getData(idName) {

  switch(idName) {
    case idName = "Map":
      url = "https://api.mozambiquehe.re/maprotation?auth=587d7e81d0adbec869b252242804614f"
      break;
    case idName = "Crafting":
      url = "https://api.mozambiquehe.re/crafting?auth=587d7e81d0adbec869b252242804614f"
      break;
    case idName = "Predator":
      url = "https://api.mozambiquehe.re/predator?auth=587d7e81d0adbec869b252242804614f"
      break;
  }

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
  switch(data.current.map) {
    case data.current.map = "King's Canyon":
      document.getElementById("mappicture").src = "SupportFiles/kingscanyon.jpg"
      break;
    case data.current.map = "World's Edge":
      document.getElementById("mappicture").src = "SupportFiles/worldsedge.jpg"
      break;
    case data.current.map = "Olympus":
      document.getElementById("mappicture").src = "SupportFiles/olympus.jpg"
      break;
    case data.current.map = "Storm Point":
      document.getElementById("mappicture").src = "SupportFiles/stormpoint.jpg"
      break;
    case data.current.map = "Broken Moon":
      document.getElementById("mappicture").src = "SupportFiles/brokenmoon.jpg"
      break;
  }
}

function displayCrafting(data) {
  document.getElementById("currentcraft").innerHTML = data.current.map
}

function displayPredator(data) {
  document.getElementById("currentrp").innerHTML += data.current.map
}