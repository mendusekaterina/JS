fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let h1 = document.createElement('h1');
        h1.innerText = 'Users:'
        document.body.appendChild(h1);
        let maindiv = document.createElement('div');
        maindiv.classList.add('main');
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = user.id + ' - ' + user.name + '      '
            div.classList.add('divstyle');
            let p = document.createElement('p');
            let a = document.createElement('a');
            let button = document.createElement('button');
            a.href = `user-detailes.html?id=${user.id}`;
            button.innerText = 'info about user';
            a.appendChild(button);
            p.append(a);
            div.appendChild(p)
            maindiv.appendChild(div);
        }
        document.body.appendChild(maindiv);
    });





