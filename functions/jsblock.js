function someFn (someString) {
    let lowerCaseString = someString.toLowerCase();
    let rightString = lowerCaseString[0].toUpperCase() + lowerCaseString.slice(1);
    return rightString;
}

alert(someFn('javaScript'));

function sayHello (name) {
    let hello;
    if (name === 'Mark') {
        hello = 'Hi, ' + name + '!';
    } else {
        hello = 'Hello, ' + name + '!';
    };
    return hello;
}

alert(sayHello('Oleg'));
alert(sayHello('Mark'));

function filterStrings (someArray, length) {
    let newArray = [];
    someArray.forEach(function(string) {
        if (string.length <= length) {
            newArray.push(string);
        }
    });
    return newArray;
}

alert (filterStrings(['a', 'ab', 'abc'], 2));