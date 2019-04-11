var x,xmlhttp,xmlDoc
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "androidROM.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML; 
x = xmlDoc.getElementsByTagName("ROM");
table="<tr><th>ROM Name</th><th>Device</th></tr>";
for (i = 0; i <x.length; i++) { 
  table += "<tr onclick='showROM(" + i + ")'><td>";
  table += x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
  table += "</td><td>";
  table +=  x[i].getElementsByTagName("DEVICENAME")[0].childNodes[0].nodeValue;
  table += "</td></tr>";
}
document.getElementById("android").innerHTML = table;

function displayCD(i) {
  document.getElementById("showROM").innerHTML =
  "Name: " +
  x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
  "<br>Title: " +
  x[i].getElementsByTagName("DEVICEID")[0].childNodes[0].nodeValue +
  "<br>Year: " + 
  x[i].getElementsByTagName("DEVICENAME")[0].childNodes[0].nodeValue;
}