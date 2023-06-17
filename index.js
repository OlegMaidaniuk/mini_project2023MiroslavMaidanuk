// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули
//
const usersContainer = document.getElementsByClassName('userContainer');
let key = 'key';
fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(vaule => vaule.json())
    .then(users => {
    for (const user of users) {
        let userdiv = document.createElement('div');
        userdiv.classList.add('user');
        document.body.appendChild(userdiv);

        let h2 = document.createElement('h2');
        h2.innerHTML = user.id + ` ` + user.name;
        userdiv.appendChild(h2)

        let a = document.createElement(`a`)
        a.href = `user-detalis.html?id=${user.id}`;
        a.innerText = `Info about user`;
        userdiv.appendChild(a);







        }
});






















