var playerLetter = "";
var computerLetter = "";
var horz1 = []; //top horizontal row
var horz2 = []; //middle horizontal row
var horz3 = []; //lower horizontal row
var vert1 = []; //left vertical row
var vert2 = []; //middle vertical row
var vert3 = []; //right vertical row
var diag1 = []; //top left to bottom right diagonal row
var diag2 = []; //rop right to bottom left diagonal row
var moves = []; //tracks the moves of the current game
var moves = {
  A1: "Open",
  A2: "Open",
  A3: "Open",
  B1: "Open",
  B2: "Open",
  B3: "Open",
  C1: "Open",
  C2: "Open",
  C3: "Open"
}; //the moves that have been played. everything starts "Open". becomes "X" or "O" as moves are made
var availableMoves = []; //an array of all moves marked "Open"

//displays a modal upon page loading to allow the player to select their letter
$(document).ready(function() {
  $("#xOrOModal").modal("show");
});

//resets the game and allows the player to reselect their letter.
function clearBoard() {
  $("#topLeftX").html("<div id='topLeftX'</div>");
  $("#topMiddleX").html("<div id='topMiddleX'></div>");
  $("#topRightX").html("<div id='topRightX'></div>");
  $("#midLeftX").html("<div id='midLeftX</div>");
  $("#midMiddleX").html("<div id='midMiddleX'</div>");
  $("#midRightX").html("<div id='midRightX'</div>");
  $("#botLeftX").html("<div id='botLeftX'</div>");
  $("#botMiddleX").html("<div id='botMiddleX'</div>");
  $("#botRightX").html("<div id='botRightX'</div>");
  horz1 = [];
  horz2 = [];
  horz3 = [];
  vert1 = [];
  vert2 = [];
  vert3 = [];
  diag1 = [];
  diag2 = [];
  moves = {
    A1: "Open",
    A2: "Open",
    A3: "Open",
    B1: "Open",
    B2: "Open",
    B3: "Open",
    C1: "Open",
    C2: "Open",
    C3: "Open"
  };
  $("#xOrOModal").modal("show");
}

//looks through the moves and pushes all board spots that are marked open to
//availableMoves array
function recordAvailableMoves() {
  availableMoves = [];
  for (var prop in moves) {
    if (moves[prop] == "Open") {
      availableMoves.push(prop);
    }
  }
}

//checks horz vert and diag arrays to see if any have 3 of the players letters. if they do shows
//the "X/O Wins" modal.
//also checks availableMoves array. if there are no more available moves shows
//the "Tie" modal.
function playerWinsOrTie() {
  if (
    horz1.join("") == playerLetter + playerLetter + playerLetter ||
    horz2.join("") == playerLetter + playerLetter + playerLetter ||
    horz3.join("") == playerLetter + playerLetter + playerLetter ||
    vert1.join("") == playerLetter + playerLetter + playerLetter ||
    vert2.join("") == playerLetter + playerLetter + playerLetter ||
    vert3.join("") == playerLetter + playerLetter + playerLetter ||
    diag1.join("") == playerLetter + playerLetter + playerLetter ||
    diag2.join("") == playerLetter + playerLetter + playerLetter
  ) {
    if (playerLetter == "X") {
      $("#xModal").modal("show");
      return;
    } else if (playerLetter == "O") {
      $("#oModal").modal("show");
      return;
    }
  } else if (availableMoves.length == 0) {
    $("#tieModal").modal("show");
    return;
  }
  computerPlayer();
}

//checks horz vert and diag arrays to see if any have 3 of the computers letters. if they do shows
//the "X/O Wins" modal.
//also checks availableMoves array. if there are no more available moves shows
//the "Tie" modal.
function computerWinsOrTie() {
  if (
    horz1.join("") == computerLetter + computerLetter + computerLetter ||
    horz2.join("") == computerLetter + computerLetter + computerLetter ||
    horz3.join("") == computerLetter + computerLetter + computerLetter ||
    vert1.join("") == computerLetter + computerLetter + computerLetter ||
    vert2.join("") == computerLetter + computerLetter + computerLetter ||
    vert3.join("") == computerLetter + computerLetter + computerLetter ||
    diag1.join("") == computerLetter + computerLetter + computerLetter ||
    diag2.join("") == computerLetter + computerLetter + computerLetter
  ) {
    if (computerLetter == "O") {
      $("#oModal").modal("show");
      return;
    } else if (computerLetter == "X") {
      $("#xModal").modal("show");
      return;
    }
  } else if (availableMoves.length == 0) {
    $("#tieModal").modal("show");
    return;
  }
}

//returns a random number within the range of min and max. min and max included
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//returns the position the computer should play if the player has two letters in
//a row anywhere on the board.
function computerBlock() {
  if (horz1.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "A2" ||
        availableMoves[i] == "A3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz2.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "B1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "B3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz3.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "C1" ||
        availableMoves[i] == "C2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert1.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B1" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert2.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A2" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C2"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert3.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B3" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag1.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag2.join("") == playerLetter + playerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  }
}

//returns the position the computer should play if the computer has two letters in
//a row anywhere on the board.
function computerWin() {
  if (horz1.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "A2" ||
        availableMoves[i] == "A3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz2.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "B1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "B3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz3.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "C1" ||
        availableMoves[i] == "C2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert1.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B1" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert2.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A2" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C2"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert3.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B3" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag1.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag2.join("") == computerLetter + computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  }
}

//returns the move the computer should play to work towards a win
function beAggressive() {
  if (horz1.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "A2" ||
        availableMoves[i] == "A3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz2.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "B1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "B3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (horz3.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "C1" ||
        availableMoves[i] == "C2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert1.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B1" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert2.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A2" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C2"
      ) {
        return availableMoves[i];
      }
    }
  } else if (vert3.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B3" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag1.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A1" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C3"
      ) {
        return availableMoves[i];
      }
    }
  } else if (diag2.join("") == computerLetter) {
    for (var i = 0; i < availableMoves.length; i++) {
      if (
        availableMoves[i] == "A3" ||
        availableMoves[i] == "B2" ||
        availableMoves[i] == "C1"
      ) {
        return availableMoves[i];
      }
    }
  }
}

//returns the move the computer should play to prevent human opponent from setting up options
function preventOptions() {
  if (
    (moves.A1 == playerLetter ||
      moves.A3 == playerLetter ||
      moves.C1 == playerLetter ||
      moves.C3 == playerLetter) &&
    moves.B2 == "Open"
  ) {
    return "B2";
  }
}

//returns the move the computer should play to prevent human opponent from setting up options
function preventMoreOptions() {
  if (
    (moves.A1 == playerLetter && moves.C3 == playerLetter) ||
    (moves.A3 == playerLetter && moves.C1 == playerLetter)
  ) {
    if (moves.B1 == "Open") {
      return "B1";
    } else if (moves.A2 == "Open") {
      return "A1";
    } else if (moves.B3 == "Open") {
      return "B3";
    } else if (moves.C2 == "Open") {
      return "C2";
    }
  }
}

//returns the move the computer should play to prevent human opponent from setting up options
function preventEvenMoreOptions() {
  if (
    moves.B2 == playerLetter &&
    moves.A1 == "Open" &&
    moves.A3 == "Open" &&
    moves.C1 == "Open" &&
    moves.C3 == "Open"
  ) {
    var random = getRandomIntInclusive(1, 4);
    switch (random) {
      case 1:
        return "A1";
      case 2:
        return "A3";
      case 3:
        return "C1";
      case 4:
        return "C3";
    }
  }
}

//returns the move the computer should play to prevent human opponent from setting up options
function preventFurtherOptions() {
  var random1 = getRandomIntInclusive(1, 2);
  if (moves.B1 == playerLetter && (moves.A1 == "Open" && moves.C1 == "Open")) {
    switch (random1) {
      case 1:
        return "A1";
      case 2:
        return "C1";
    }
  } else if (
    moves.A2 == playerLetter &&
    (moves.A1 == "Open" && moves.A3 == "Open")
  ) {
    switch (random1) {
      case 1:
        return "A1";
      case 2:
        return "A3";
    }
  } else if (
    moves.B3 == playerLetter &&
    (moves.A3 == "Open" && moves.C3 == "Open")
  ) {
    switch (random1) {
      case 1:
        return "A3";
      case 2:
        return "C3";
    }
  } else if (
    moves.C2 == playerLetter &&
    (moves.C1 == "Open" && moves.C3 == "Open")
  ) {
    switch (random1) {
      case 1:
        return "C1";
      case 2:
        return "C3";
    }
  }
}

//takes a board position as an argument and writes it to the board
function writeMove(move) {
  switch (move) {
    case "A1":
      $("#topLeftX").html(
        "<div id='topLeftX' class='topLeft" + computerLetter + "'></div>"
      );
      horz1.push(computerLetter);
      vert1.push(computerLetter);
      diag1.push(computerLetter);
      moves.A1 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "A2":
      $("#topMiddleX").html(
        "<div id='topMiddleX' class='topMiddle" + computerLetter + "'></div>"
      );
      horz1.push(computerLetter);
      vert2.push(computerLetter);
      moves.A2 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "A3":
      $("#topRightX").html(
        "<div id='topRightX' class='topRight" + computerLetter + "'></div>"
      );
      horz1.push(computerLetter);
      vert3.push(computerLetter);
      diag2.push(computerLetter);
      moves.A3 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "B1":
      $("#midLeftX").html(
        "<div id='midLeftX' class='midLeft" + computerLetter + "'></div>"
      );
      horz2.push(computerLetter);
      vert1.push(computerLetter);
      moves.B1 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "B2":
      $("#midMiddleX").html(
        "<div id='midMiddleX' class='midMiddle" + computerLetter + "'></div>"
      );
      horz2.push(computerLetter);
      vert2.push(computerLetter);
      diag1.push(computerLetter);
      diag2.push(computerLetter);
      moves.B2 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "B3":
      $("#midRightX").html(
        "<div id='midRightX' class='midRight" + computerLetter + "'></div>"
      );
      horz2.push(computerLetter);
      vert3.push(computerLetter);
      moves.B3 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "C1":
      $("#botLeftX").html(
        "<div id='botLeftX' class='botLeft" + computerLetter + "'></div>"
      );
      horz3.push(computerLetter);
      vert1.push(computerLetter);
      diag2.push(computerLetter);
      moves.C1 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "C2":
      $("#botMiddleX").html(
        "<div id='botMiddleX' class='botMiddle" + computerLetter + "'></div>"
      );
      horz3.push(computerLetter);
      vert2.push(computerLetter);
      moves.C2 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
    case "C3":
      $("#botRightX").html(
        "<div id='botRightX' class='botRight" + computerLetter + "'></div>"
      );
      horz3.push(computerLetter);
      vert3.push(computerLetter);
      diag1.push(computerLetter);
      moves.C3 = computerLetter;
      recordAvailableMoves();
      computerWinsOrTie();
      break;
  }
}

//executes the computers turn.
function computerPlayer() {
  recordAvailableMoves();
  var blockMove = computerBlock();
  var aggression = beAggressive();
  var winMove = computerWin();
  var preventMove = preventOptions();
  var preventAnotherMove = preventMoreOptions();
  var preventYetAnotherMove = preventEvenMoreOptions();
  var preventFurtherMove = preventFurtherOptions();
  if (
    winMove == "A1" ||
    winMove == "A2" ||
    winMove == "A3" ||
    winMove == "B1" ||
    winMove == "B2" ||
    winMove == "B3" ||
    winMove == "C1" ||
    winMove == "C2" ||
    winMove == "C3"
  ) {
    writeMove(winMove);
  } else if (
    blockMove == "A1" ||
    blockMove == "A2" ||
    blockMove == "A3" ||
    blockMove == "B1" ||
    blockMove == "B2" ||
    blockMove == "B3" ||
    blockMove == "C1" ||
    blockMove == "C2" ||
    blockMove == "C3"
  ) {
    writeMove(blockMove);
  } else if (preventMove != undefined) {
    writeMove(preventMove);
  } else if (moves.B2 == "Open") {
    writeMove("B2");
  } else if (preventAnotherMove != undefined) {
    writeMove(preventAnotherMove);
  } else if (preventYetAnotherMove != undefined) {
    writeMove(preventYetAnotherMove);
  } else if (preventFurtherMove != undefined) {
    writeMove(preventFurtherMove);
  } else if (aggression != undefined) {
    writeMove(aggression);
  } else {
    var randomMove = getRandomIntInclusive(0, availableMoves.length - 1);
    writeMove(availableMoves[randomMove]);
  }
}

//assigns the appropriate letters to the player and the computer when the player
//selects "X"
function playerX() {
  playerLetter = "X";
  computerLetter = "O";
}

//assigns the appropriate letters to the player and the computer when the player
//selects "O"
//starts the computers turn
function playerO() {
  playerLetter = "O";
  computerLetter = "X";
  computerPlayer();
}

$("#boardA1").click(function() {
  $("#topLeftX").html(
    "<div id='topLeftX' class='topLeft" + playerLetter + "'></div>"
  );
  horz1.push(playerLetter);
  vert1.push(playerLetter);
  diag1.push(playerLetter);
  moves.A1 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardA2").click(function() {
  $("#topMiddleX").html(
    "<div id='topMiddleX' class='topMiddle" + playerLetter + "'></div>"
  );
  horz1.push(playerLetter);
  vert2.push(playerLetter);
  moves.A2 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardA3").click(function() {
  $("#topRightX").html(
    "<div id='topRightX' class='topRight" + playerLetter + "'></div>"
  );
  horz1.push(playerLetter);
  vert3.push(playerLetter);
  diag2.push(playerLetter);
  moves.A3 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardB1").click(function() {
  $("#midLeftX").html(
    "<div id='midLeftX' class='midLeft" + playerLetter + "'></div>"
  );
  horz2.push(playerLetter);
  vert1.push(playerLetter);
  moves.B1 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardB2").click(function() {
  $("#midMiddleX").html(
    "<div id='midMiddleX' class='midMiddle" + playerLetter + "'></div>"
  );
  horz2.push(playerLetter);
  vert2.push(playerLetter);
  diag1.push(playerLetter);
  diag2.push(playerLetter);
  moves.B2 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardB3").click(function() {
  $("#midRightX").html(
    "<div id='midRightX' class='midRight" + playerLetter + "'></div>"
  );
  horz2.push(playerLetter);
  vert3.push(playerLetter);
  moves.B3 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardC1").click(function() {
  $("#botLeftX").html(
    "<div id='botLeftX' class='botLeft" + playerLetter + "'></div>"
  );
  horz3.push(playerLetter);
  vert1.push(playerLetter);
  diag2.push(playerLetter);
  moves.C1 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardC2").click(function() {
  $("#botMiddleX").html(
    "<div id='botMiddleX' class='botMiddle" + playerLetter + "'></div>"
  );
  horz3.push(playerLetter);
  vert2.push(playerLetter);
  moves.C2 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});

$("#boardC3").click(function() {
  $("#botRightX").html(
    "<div id='botRightX' class='botRight" + playerLetter + "'></div>"
  );
  horz3.push(playerLetter);
  vert3.push(playerLetter);
  diag1.push(playerLetter);
  moves.C3 = playerLetter;
  recordAvailableMoves();
  playerWinsOrTie();
});