const testService = (arr) => {
  const objFromArr = Object.fromEntries(arr);
  
  const meaning = Object.values(objFromArr);
  
  const chim = meaning.every(value => value === 'out');
  
  // Переменная, в которой хранится, что порядок входа выхода пользователя корректный
  const isCorrectInOut = chim;
  // Переменная в которой хранятся данные, что все пользователи вышли
  const isAllUsersOut = Number.isInteger(arr.length / 2);
  
  return isCorrectInOut && isAllUsersOut;
};

/*
function testService (events) {
  // Пользыватели, которые в магазине
  const inShop = new Set();
  
  for(const [user, event] of events) {
    const userNowInShow = inShop.has(user);
    
    // Вышел неизвестный
    const outUnknowUser = event === 'out' && !userNowInShow;
    // Вошел 2 раза
    const inTwoTimes = event === 'in' && userNowInShow;
    
    if(outUnknowUser || inTwoTimes) return false;
    
    if(event === 'out') {
      inShop.delete(user);
    } else if(event === 'in') {
      inShop.add(user);
    } else {
      return false;
    }
  }
  
  // Никого не осталось в магазине
  return !inShop.size;
}
*/

// True

const result = testService([
  ['Pavel', 'in'],
  ['Vova', 'in'],
  ['Pavel', 'out'],
  ['Dmitriy', 'in']
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
