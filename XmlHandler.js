function createXmlFile() {
    saveAs(new File([""], "table.xml", {type: "text/plain;charset=utf-8"}));
}


//write new content into the xml File that provides the content of
//the table in the main page.
function writeInXml(nameOfLink, link) {
    //empty object, that will provide the xml file.
    var xmlDoc = null;
    //create a new http request to get the xml file.
    var xmlHttp = new XMLHttpRequest("table.xml");
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            xmlDoc = xmlHttp.responseXML;
        } else {
            xmlDoc = document.implementation.createDocument(null, "table.xml");
        }
        xmlHttp.open("GET", "table.xml", true);
        xmlHttp.send();
    }

    

    //create the node with the attributes
    var node = xmlDoc.createElement("link");
    node.addAttribute("linkName", nameOfLink);
    node.setAttribute("directionLink", link);

    //add the node to the xml file
    xmlDoc.appendChield(node);
}


//Read the content of the entire xml File. 
function readXml() {
    var content = "empty";
    return content;
}