/*
The functions in this script, are used to make a responsive table. 
The functions defines the creation of the table by using changeable databases. 
The databases should be a kind of xml or text file.
*/



window.onload = function() {
    createXmlFile();

    var searchButton = document.getElementById("SearchButton");
    var searchResetButton = document.getElementById("SearchResetButton");
    var searchField = document.getElementById("SearchField");
    var link_table = document.getElementById("link_table");

    searchButton.addEventListener("click", onSearchButtonClicked(searchButton));
    searchResetButton.addEventListener("click", onSearchResetButtonClicked(searchResetButton));
    searchField.onchange = onSearchFieldContentChanged(searchField);
}

//EventHandler for the Searchbutton "click"
function onSearchButtonClicked(caller) {
    caller = document.getElementById("SearchButton");
}

//EventHandler for the SearchResetButton "click"
function onSearchResetButtonClicked(caller) {
    caller = document.getElementById("SearchResetButton");
}

//EventHandler for the searchField "onchange"
function onSearchFieldContentChanged(caller) {
    caller = document.getElementById("SearchField");

}













//generate a new table for the website. 
//the content for the table will be stored in a xml file.
function generateTableFromXml() {

}


//with this methode it will be possible to add content 
//for the table -> from the xml file.
//if a user add content to the table, the xml file will be changed, this will call the 
//xml file content change handler, this one will then change the content of the table on the website.
function addTableContent(content) {
    writeInXml(content)
}


//if the a item of the table should be changed, this will be 
//done in the backend by changing the xml file.
function changeContentInXmlFile() {

}



//search for a specific item in the table
function search() {
    
}


//change the table in order of a search function.
//When the search function is called, the table will be changed 
//and only the results that fit in the request will be showed. 
function changeTable() {

}