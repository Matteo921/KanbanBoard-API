'use strict'

var prefix = "https://cors-anywhere.herokuapp.com/";
var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
  'X-Client-Id': '4323',
  'X-Auth-Token': 'd01878d543416103630c7d265cfbf550'
};

fetch(prefix + baseUrl + '/board', { headers: myHeaders })
	.then(function(resp) {
    	return resp.json();
  	})
  	.then(function(resp) {
		setupColumns(resp.columns);
	});

//Create columns
function setupColumns(columns) {
	columns.forEach(function (column) {
		var col = new Column(column.id, column.name);
		board.addColumn(col);
		setupCards(col, column.cards);
	});
}

//Create cards
function setupCards(col, cards) {
	cards.forEach(function (card) {
    var cardObj = new Card(card.id, card.name);
  	col.addCard(cardObj);
	});
}

//Generate template
function generateTemplate(name, data, basicElement) {
  	var template = document.getElementById(name).innerHTML;
  	var element = document.createElement(basicElement || 'div');
  
  	Mustache.parse(template);
  	element.innerHTML = Mustache.render(template, data);
  
  	return element;
};