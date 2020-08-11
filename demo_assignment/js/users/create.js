const onFormSubmit = function (event) {
    event.preventDefault();

    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;

    const data = {
        name: name,
        email: email,
        address: address,
    };

    const url = 'https://5f2d04b48085690016922b67.mockapi.io/todo_list/users';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    };



    if (name == '' || email == '' || address == '') {
        document.getElementById('err-name').innerText = 'Không được để trống tên';
        document.getElementById('err-email').innerText = 'Email không được để trống';
        document.getElementById('err-address').innerText = 'Address không được để trống';
        return;
    } else if (name.length > 0) {
        document.getElementById('err-name').innerText = '';
        return;
    }

    fetch(url, options)
        .then(function (response) {
            window.location.href = 'index.html';
            return response.json();
        })
        .then(function (responseData) {
            console.log(responseData);
        });
}

document.querySelector('#form_create_user').onsubmit = onFormSubmit;
