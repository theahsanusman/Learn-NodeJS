var todos = [];
function getElement(eid) {
    return document.getElementById(eid);
}
function showTodos() {
    $.ajax({
        url: "https://todo-app-101.herokuapp.com/allTodos",
        success: function (data) {
            todos = data.data;
            getElement("todos_tbody").innerHTML = "";
            todos.forEach(eachTodo => {
                getElement("todos_tbody").innerHTML += `
                <tr id=${eachTodo._id}>
                    <td class="col-md-8 each_todo_td" id='${eachTodo._id}_value'>${eachTodo.txt}</td>    
                    <td class="col-md-2"><i class="fas fa-pencil-alt" onclick="editTodo('${eachTodo._id}')"></i></td>
                    <td class="col-md-2"><i class="fas fa-trash-alt" onclick="removeTodo('${eachTodo._id}')"></i></i></td>
                </tr>
                `;
            });
        }
    });
}
function saveTodo() {
    var todoFieldValue = getElement("todoField").value.trim();
    if (todoFieldValue !== "") {
        $.ajax({
            url: "https://todo-app-101.herokuapp.com/todo",
            method: "POST",
            data: { txt: todoFieldValue },
            success: function (res) {
                if (res.status) {
                    getElement("todoField").value = "";
                    showTodos();
                }
            }
        });
    }
}
function removeTodo(id) {
    $.ajax({
        url: `https://todo-app-101.herokuapp.com/removeTodo/${id}`,
        method: "delete",
        success: function (res) {
            if (res.status) {
                showTodos();
            }
        }
    });
}
function editTodo(id) {
    var initialValue = getElement(`${id}_value`).innerText;
    getElement(`${id}`).innerHTML = `
        <td class="col-md-8 each_todo_td" id='${id}_value'><input type="text" autoFocus class="col-md-12 editTodo" id="edit_todo_field" name"todoValue" value=${initialValue} /></td>
        <td class="col-md-4"><button class="btn" onclick="updateTodo('${id}');">Save</button></td>
    `;
}
function updateTodo(id) {
    var newTodoValue = getElement("edit_todo_field").value;
    $.ajax({
        url: `https://todo-app-101.herokuapp.com/todo/${id}`,
        method: "put",
        data: { txt: newTodoValue },
        success: function (res) {
            if (res.status) {
                showTodos();
            }
        }
    })
}