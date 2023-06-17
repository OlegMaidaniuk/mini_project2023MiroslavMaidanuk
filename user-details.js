// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
let url = new URL(location.href);
let id = url.searchParams.get(`id`);

fetch(`https://jsonplaceholder.typicode.com/users ${id}`).then(resp => resp.json()).then(value => {
    let div = document.createElement(`div`);
    div.classList.add(`info`)
    let user_info = (value) => {

        for (const data in value) {
            if (typeof value[data] !== `object`) {
                let p = document.createElement(`p`);
                p.innerText = `${data}: ${value[data]}`;
                div.appendChild(p);


            } else {
                user_info(value[data]);
            }
        }
    }
    user_info(value)

    document.body.appendChild(div)
})


let button = document.createElement(`button`);
button.innerText = `post of current user`;
button.onclick = function () {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`).then(
        value => value.json()
    ).then(posts =>{
let post_small_div = document.createElement(`div`);
post_small_div.classList.add(`post_small_div`);
document.body.appendChild(post_small_div)
        for (const post of posts) {
            let post_div = document.createElement(`div`);
            post_div.classList.add(`post`)

            post_small_div.appendChild(post_div);

            let post_p = document.createElement(`p`)
post_p.innerHTML = post.title;

            post_div.appendChild(post_p);


            let a = document.createElement(`a`)
            a.href = `post-details.html?id=${post.id}`;
            a.innerText = `Info about user`;
            post_div.appendChild(a);

        }




    })


}
document.body.appendChild(button)
// https://jsonplaceholder.typicode.com/users/${id}

