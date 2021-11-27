let counterN = 0;

function addCounter() {

    let countersSum = document.getElementById('counters-sum');

    if (counterN > 0) { //будем считать, что 0 - тоже чётное число
        document.querySelectorAll('#counters .c-val').forEach(function (сounterValue) {
            if (Number(сounterValue.innerHTML) % 2 == 0) {
                сounterValue.innerHTML = Number(сounterValue.innerHTML) + 1;
                countersSum.innerHTML = Number(countersSum.innerHTML) + 1;                
            };
        });
    };

    counterN++;

    let countersNumber = document.getElementById('counters-number');
    countersNumber.innerHTML = counterN;

    let counters = document.getElementById('counters');

    let counter = document.createElement('div');
    counter.className = 'counter';
    counters.appendChild(counter);

    let counterValue = document.createElement('span');
    counterValue.className = 'c-val counter-value' + counterN;
    counterValue.innerHTML = '0';
    counter.appendChild(counterValue);

    let counterIncrement = document.createElement('button');
    counterIncrement.className = 'c-btn counter-btn' + counterN;
    counterIncrement.innerHTML = '+1';
    counter.appendChild(counterIncrement);

    let counterDecrement = document.createElement('button');
    counterDecrement.className = 'c-btn counter-btn' + counterN;
    counterDecrement.innerHTML = '-1';
    counter.appendChild(counterDecrement);

    let counterNull = document.createElement('button');
    counterNull.className = 'c-btn counter-btn' + counterN;
    counterNull.innerHTML = 'Nullify';
    counter.appendChild(counterNull);

    let counterDelete = document.createElement('button');
    counterDelete.className = 'c-btn counter-btn' + counterN;
    counterDelete.innerHTML = 'Delete';
    counter.appendChild(counterDelete);

    document.querySelectorAll('#counters .counter-btn' + counterN).forEach(function (button) {
        button.addEventListener('click', onButtonClick);
    });

    function onButtonClick(e) {
        if (e.target.innerHTML === '+1') {
            counterValue.innerHTML = Number(counterValue.innerHTML) + 1;
            countersSum.innerHTML = Number(countersSum.innerHTML) + 1;
        }
        else if (e.target.innerHTML === '-1') {
            if (Number(counterValue.innerHTML) > 0) {
                counterValue.innerHTML = Number(counterValue.innerHTML) - 1;
                countersSum.innerHTML = Number(countersSum.innerHTML) - 1;
            };
        }
        else if (e.target.innerHTML === 'Nullify') {
            countersSum.innerHTML = Number(countersSum.innerHTML) - Number(counterValue.innerHTML);
            counterValue.innerHTML = 0;
        }
        else if (e.target.innerHTML === 'Delete') {
            countersSum.innerHTML = Number(countersSum.innerHTML) - Number(counterValue.innerHTML);
            
            counters.removeChild(counter);

            document.querySelectorAll('#counters .c-val').forEach(function (сounterValue) {
                if (Number(сounterValue.innerHTML % 2) == 1) {
                    сounterValue.innerHTML = Number(сounterValue.innerHTML) - 1;
                    countersSum.innerHTML = Number(countersSum.innerHTML) - 1;                
                };
            });

            counterN--;
            countersNumber.innerHTML = Number(countersNumber.innerHTML) - 1;
        };
    };
}

function reset() {
    let counters = document.getElementById('counters');

    document.querySelectorAll('#counters .counter').forEach(function (element) {
        counters.removeChild(element);
    });

    counterN = 0;
    let countersNumber = document.getElementById('counters-number');
    countersNumber.innerHTML = 0;

    let countersSum = document.getElementById('counters-sum');
    countersSum.innerHTML = 0;
}