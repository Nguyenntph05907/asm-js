const url = 'https://5f2d04b48085690016922b67.mockapi.io/todo_list/users';

const options = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
};

fetch(url, options)
    .then(function (response) {
        console.log('response', response);

        return response.json();
    })
    .then(function (responseData) {
        console.log('responseData', responseData);
        let html = '';

        responseData.forEach(function (user, index) {
            html += `
                <tr>
                    <td>${ index + 1}</td>
                    <td>${ user.name}</td>
                    <td>${ user.email}</td>
                    <td>${ user.address}</td>
                    <td>
                        <a href="edit.html?id=${ user.id}" class="btn btn-primary">Update</a>
                        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
                            Delete
                        </button>
                    </td>
                </tr>

                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Thông báo</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      Bạn có muốn xóa user này không!
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Hủy</button>
                      <a href="#" class="btn btn-success" onclick="deleteUser(${ user.id})">Thực hện</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            `;
        });

        document.querySelector('#list_users').innerHTML = html;
    });
