var container = $('.container');
var button = $('button');



button.on("click", generateList);

function generateList() {
  event.preventDefault();
  var toDoItem = $('.toDoItem').val();
  container.append(`<p>${toDoItem}</p>`);

}
