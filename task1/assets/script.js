const container = document.querySelector('.container');
const h1 = document.querySelector('h1');

const res = fetch('https://jsonplaceholder.typicode.com/users')

h1.innerHTML = 'Loading...'
res
    .then((data) => {
        if (!data.ok) {
            throw Error('Something went wrong')
        }
        return data.json();
    })
    .then((data) => {

        data.map((user) => {
            container.innerHTML += `<div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${user.name}</h5>
                    <p class="card-text"><span>E-mail: </span>${user.email}</p>
                    <p><span>Address street: </span>${user.address.street}</p>
                    <p><span>Adress city: </span> ${user.address.city}</p>
                    <p><span>Phone: </span> ${user.phone}</p>
                    <p><span>Comapny name: </span>${user.company.name}</p>
                </div>
            </div>`
        })

        h1.innerHTML = '';
    })
    .catch((err) => {
        h1.innerHTML = err;
    })