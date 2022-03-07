//search for a specific item in the table
function search() {
    var searchedValue = document.getElementById('SearchField').innerHTML();
    var items = document.getElementById('link_table').getElementsByTagName('tbody').getElementsByTagName('tr');
    for(var i = 0; i < items.length; i++) {
        alert(items[i]);
    }
}