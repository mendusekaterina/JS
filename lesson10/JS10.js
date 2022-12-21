fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let ul = document.createElement('ul');
        ul.innerText = 'Users:'

        for (const user of users) {
            let li = document.createElement('li');
            li.innerText = user.id + ' - ' + user.name
            ul.appendChild(li);
            let a=document.createElement('a');
            a.href=`user-detailes.html?id=${user.id}`;
            a.innerText=' info about user';
            li.appendChild(a);
            document.body.appendChild(ul);
        }

    })
