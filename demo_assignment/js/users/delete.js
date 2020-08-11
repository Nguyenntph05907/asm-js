function deleteUser(id) {
    event.preventDefault();

    const url = 'https://5f2d04b48085690016922b67.mockapi.io/todo_list/users/' + id;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    };

    fetch(url, options)
        .then(function () {
            window.location.href = 'index.html';
        })
}