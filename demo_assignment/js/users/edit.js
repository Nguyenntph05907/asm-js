const baseUrl = window.location.href;
const id = baseUrl.substring(baseUrl.lastIndexOf('=') + 1);
const url = 'https://5f2d04b48085690016922b67.mockapi.io/todo_list/users/' + id;

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};


fetch(url, options)
    .then(function (response) {
        return response.json();
    }).then(function (user) {
        let html = '';
        html = `
            <form class="col-6" id="form_edit_user" onsubmit="updateUser(${user.id})">
                <div class="form-group">
                    <label for="">Name</label>
                    <input class="form-control" type="text" id="name" value="${ user.name}">
                    <span class="text-danger" id="err-name"></span>
                </div>
                <div class="form-group">
                    <label for="">Email</label>
                    <input class="form-control" type="email" id="email" value="${user.email}">
                    <span class="text-danger" id="err-email"></span>
                </div>
                <div class="form-group">
                    <label for="">Address</label>
                    <input class="form-control" type="text" id="address" value="${user.address}">
                    <span class="text-danger" id="err-address"></span>
                </div>
                <div class="form-group">
                    <button class="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        `

        document.querySelector('#load_user').innerHTML = html;
    })