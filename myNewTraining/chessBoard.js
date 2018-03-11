if (jQuery) {
    alert("git!")
} else {
    alert("coś się skiepściło!")
};
var rows = [0, 1, 2, 3, 4, 5, 6, 7];
var cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
var whiteChessPieces = ["♙", "♖", "♘", "♗", "♔", "♕", "♗", "♘", "♖"];


var addClickEvents = function () {
    $(".blackTile, .whiteTile").click(function () {
        var $clickedField = $(this);
        var dataI = parseInt($clickedField.attr("data-i"));
        var dataJ = parseInt($clickedField.attr("data-j"));

        alert("To pole o wpółrzędnych " + dataJ + ', ' + dataI);
    })
}


function drawChessBoard() {
    var flag = -1;
    for (let i = 0; i < rows.length; i++) {
        for (var j = 0; j < cols.length; j++) {
            var c = "";
            if (flag == -1) {
                c = "blackTile";
            } else {
                c = "whiteTile";
            }
            var field = $("<div>").addClass(c).text("").attr("data-i", i).attr("data-j", j);
            $("div.chessBoard").append(field);
            if (i == 0) {
                for (let i = 0; i < whiteChessPieces.length; i++) {
                    let element = whiteChessPieces[j + 1];
                    field.text(element);
                };
            } else if (i == 1) {
                for (let i = 0; i < 1; i++) {
                    let element = whiteChessPieces[i];
                    field.text(element);
                };
            }
            flag *= -1;
        };
        $("div.chessBoard").append('<div style="clear:both"></div>');
        flag *= -1;
    };
    addClickEvents();
};
drawChessBoard()



// my first version
// function draw() {
//     for (let i = 0; i < rows.length; i++) {
//         for (var j = 0; j < cols.length; j++) {
//             if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
//                 $("div.chessBoard").append('<div class="tile"></div>');
//             } else {
//                 $("div.chessBoard").append('<div class="tileW"></div>');
//             }
//         };
//         $("div.chessBoard").append('<div style="clear:both"></div>');
//     };
// };
// draw()



// after code revier with Radek

// function drawChessBoard() {
//         for (let i = 0; i < rows.length; i++) {
//             for (var j = 0; j < cols.length; j++) {
//                 var c = "";
//                 if ((((i==0 ||i%2==0) && j%2==0)) || ((i%2!=0 && j%2!=0))) {
//                     c="blackTile";
//                 } else {
//                     c="whiteTile";
//                 }
//                 var field = $("<div>").addClass(c).html([i][j]).attr("data-i", i).attr("data-j", j);
//                 $("div.chessBoard").append(field);
//             };
//             $("div.chessBoard").append('<div style="clear:both"></div>');
//         };
//         addClickEvents();
// };
// drawChessBoard()


// var man = {
//     hair: black,
//     height: 180,
//     weigt: 100,
//     doSomething : function(){

//     }
// }



// zadanie 1

function tableMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        min = (arr[i] < min) ? arr[i] : min;
    }
    return min;
}


const table = [2, 810, 76, 33, 18, 1, 699, 23];
console.log(tableMin(table));



function tableMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
const tab = [2, 810, 76, 33, 18, 1, 699, 23];
console.log(tableMin(tab));

// zadanie 2

var firsTable = [2, 4, 11, 5, 22, 8, 16];
var secondTable = [];

function tableOperations(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] * 2 == arr[i + 1]) {
            secondTable.push(Math.pow(arr[i], 2));
        }
    }
    return secondTable;
}
tableOperations(firsTable);

console.log(secondTable);


// version two

var tableOne = [2, 4, 11, 5, 22, 8, 16];
var tableTwo = [];
var num = 0;

function tableOperation() {
    for (var i = 0; i < tableOne.length; i++) {
        for (var j = 0; j < tableOne.length; j++) {
            if (tableOne[i] * 2 == tableOne[j]) {
                num = (Math.pow(tableOne[i], 2));
            } else {
                num = (tableOne[i]);
            }
        }
        tableTwo.push(num);
    }
    return tableTwo;
}
    tableOperation();

    console.log("tabela 1: " + tableOne);
    console.log("tabela 2: " + tableTwo);