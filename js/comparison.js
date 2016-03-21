function fillingArrayOfNames(arraySize) {
    var arr = [];

    for (i=0; i < arraySize; i++) {
        var name = prompt('Enter random names', '');
        arr.push(name) ;
    }
    return arr;
}

var arrayOfNames = fillingArrayOfNames(5);
var userName = prompt('Enter your name please', '');

function searchNameInArray(name, array) {

    for (i=0; i < array.length; i++) {
        if (name === array[i]) {
            return true;
        }
    }
    return false;
}

if (searchNameInArray(userName, arrayOfNames)) {
    confirm(userName + ' you are successfully entered');
} else {
    alert('Error!Uncorrected name');
}
