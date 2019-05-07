function loadXMLDoc()
{
	var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() 
    {
    	if (this.readyState == 4 && this.status == 200) 
        {
            myFunction(this);
        }
	};
	xmlhttp.open("GET", "professionalExperience.xml", true);
	xmlhttp.send();
}
function myFunction(xml) 
{
	var i;
	var xmlDoc = xml.responseXML;
	var table="<tr><th>Company</th><th>Title</th><th>Date</th></tr>";
	var x = xmlDoc.getElementsByTagName("JOB");
	for (i = 0; i <x.length; i++)
	{ 
    	table += "<tr><td>" +
    	x[i].getElementsByTagName("COMPANY")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
    	"</td><td>" +
    	x[i].getElementsByTagName("DATE")[0].childNodes[0].nodeValue +
    	"</td></tr>";
    }
    document.getElementById("details").innerHTML = table;
}