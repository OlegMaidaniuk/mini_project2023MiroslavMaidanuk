// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//
// const usersContainer = document.getElementsByClassName('userContainer');
// let key = 'key';
// fetch(`https://jsonplaceholder.typicode.com/users`).then(users => {
//     for (const user of users) {
//         const userDiv = document.createElement('div');
//         userDiv.innerText = `${user.id} -- ${user.name}`;
//         userDiv.classList.add('userDiv');
//         usersContainer.apendChild(userDiv);
//
//         const userButton = document.createElement('button');
//         userButton.innerText = 'Buy mee a coffe';
//         userButton.classlist.add('userButton');
//         userDiv.appendChild(userButton);
//
//         userButton.onclick = (e) => {
//
//
//
//
//
//             localStorage.setItem(key,JSON.stringify(user));
//             location.href = `index.html`;
//
//         }
//     }
// });






















