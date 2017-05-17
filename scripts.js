$(document).ready(function() {

	function randomString() {
		var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
		var str = '';
		for (i = 0; i < 10; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	function Column(name) {
		var self = this;

		this.id = randomString();
		this.name = name;
		this.$element = createColumn();

		function createColumn() {
			// Column Element Variables
			var $column = $('<div>').addClass('column');
			var $columnTitle = $('<h2>').addClass('column-title').text(self.name);
			var $columnCardList = $('<ul>').addClass('column-card-list');
			var $columnDelete = $('<button>').addClass('btn-delete').text('X');
			var $columnAddCard = $('<button>').addClass('add-card').text('Add card');

			// Events on Click
			$columnDelete.click(function() {
				self.removeColumn();
			});
			$columnAddCard.click(function() {
				self.addCard(new Card(prompt('Enter card content')));
			});

			// Column Element Creation
			$column.append($columnDelete)
				.append($columnTitle)
				.append($columnAddCard)
				.append($columnCardList);

			// Column Element Creation RETURN
			return $column;
		};
	}

	Column.prototype = {
		addCard: function(card) {
			this.$element.children('ul').append(card.$element);
		},
		removeColumn: function() {
			this.$element.remove();
		}
	}
	
	function Card(description) {
		var self = this;

		this.id = randomString();
		this.description = description;
		this.$element = createCard();

		function createCard() {
			// Card Element Variables
			var $card = $('<li>').addClass('card');
			var $cardDescription = $('<p>').addClass('card-description').text(self.description);
			var $cardDelete = $('<button>').addClass('btn-delete').text('X');

			// Events on Click
			$cardDelete.click(function() {
				self.removeCard();
			});

			// Card Element Creation
			$card.append($cardDelete)
				.append($cardDescription);

			// Card Element Creation RETURN
			return $card;
		};
	}

	Card.prototype = {
		removeCard: function() {
			this.$element.remove();
		}
	}

	var board = {
		name: 'Kanban',
		addColumn: function(column) {
			this.$element.append(column.$element);
			initSortable();
		},
		$element: $('#board .column-container')
	};

	function initSortable() {
		$('.column-card-list').sortable({
			connectWith: '.column-card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}

	$('.create-column').click(function() {
			var name = prompt('Enter column name:');
			var column = new Column(name);
			board.addColumn(column);
		});


	// TWORZENIE KOLUMN
	var todoColumn = new Column('To Do')
	var doingColumn = new Column('Doing');
	var doneColumn = new Column('Done');

	// DODAWANIE KOLUMN DO TABLICY
	board.addColumn(todoColumn);
	board.addColumn(doingColumn);
	board.addColumn(doneColumn);

	// TWORZENIE NOWYCH EGZEMPLARZY KART
	var card1 = new Card('New Task');
	var card2 = new Card('create kanban');

	// DODAWANIE KART DO KOLUMN
	todoColumn.addCard(card1);
	doingColumn.addCard(card2);

	$("doneColumn").css("background-color", "green");
});

