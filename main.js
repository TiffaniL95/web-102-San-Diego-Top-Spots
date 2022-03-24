// const { append } = require("express/lib/response");

$(document).ready(function() {
// write your code here
$('tbody').html('');
$.getJSON('data.json', function(data){
    $.each(data, function(i, data){

        $(`
        <tr> 
        <td>${data.name}</td>
        <td>${data.description}</td>
        <td><a href='https://www.google.com/maps?q=${data.location}'><button>Open in Google Maps</button></a></td>
        </tr>`).appendTo('tbody');
    })
})
});


