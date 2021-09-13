const testService = (data) => {

    let arr = data.slice()
    let meaning = [];
    let type = []

    const objFromArr = Object.fromEntries(arr);

    arr.forEach((i) => {
        type.push(i[1])
    })

    for (let value of Object.values(objFromArr)) {
        meaning.push(value);
    }

    const check = (value) => {
        return value === 'out'
    }

    const chim = meaning.every(check);

    if (chim === true) {
        if (Number.isInteger(type.length / 2)) {
            alert(true);
        } else {
            alert(false);
        }
    } else {
        alert(false);
    }
}



// True

const result = testService([
    ['Pavel', 'in'],
    ['Vova', 'in'],
    ['Pavel', 'out'],
    ['Dmitriy', 'in'],
    ['Vova', 'out'],
    ['Pavel', 'in'],
    ['Dmitriy', 'out'],
    ['Pavel', 'out'],
]);

// Закрылось с посетителями

// const result = testService([
//     ['Pavel', 'in'],
//     ['Vova', 'in'],
//     ['Pavel', 'out'],
//     ['Dmitriy', 'in'],
//     ['Vova', 'out']
// ]);

// Вышел неизвестный посетитель

// const result = testService([
//     ['Pavel', 'in'],
//     ['Vova', 'in'],
//     ['Pavel', 'out'],
//     ['Dmitriy', 'in'],
//     ['Jacki', 'out'],
//     ['Vova', 'out'],
//     ['Dmitriy', 'out'],
//     ['Jacki', 'in']
// ]);

// Посетитель зашел несколько раз

// const result = testService([
//     ['Pavel', 'in'],
//     ['Vova', 'in'],
//     ['Pavel', 'out'],
//     ['Dmitriy', 'in'],
//     ['Jacki', 'in'],
//     ['Vova', 'in'],
//     ['Dmitriy', 'out'],
//     ['Jacki', 'out'],
//     ['Vova', 'out']
// ]);

// Посетитель вышел несколько раз

// const result = testService([
//     ['Pavel', 'in'],
//     ['Vova', 'in'],
//     ['Pavel', 'out'],
//     ['Dmitriy', 'in'],
//     ['Jacki', 'in'],
//     ['Vova', 'out'],
//     ['Dmitriy', 'out'],
//     ['Jacki', 'out'],
//     ['Vova', 'out']
// ]);