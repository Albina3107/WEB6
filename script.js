function generate() {
    let phrase = document.getElementById("success");
    phrase.style.display = "block";
    for (let i = 0; i < 6; i++) {
        fetch('https://randomuser.me/api')
            .then((res) => res.json())
            .then((data) => createUser(data))
            .catch(error => console.log(error))

    }
}

function createUser({results}) {
    let element = document.querySelector('#users')
    element.innerHTML += `<div>${getUser(results)}</div>`
}

function getUser(results) {
    return results.map(user => `
        <div id="block">
        <img src="${user.picture.large}" width="250px" height="250px">
        <p>Phone: ${user.cell}</p>
        <p>City: ${user.location.city}</p>
        <p>Postcode: ${user.location.postcode}</p>
        <p>Email: ${user.email}</p>
        </div>`)
}
