function updateTime() {
  const time = document.getElementById("currentTime");
  const now = new Date();
  time.textContent = now.toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();

const add = document.getElementById("add");

add.addEventListener("click", function () {
  const input = document.getElementById("todoInput");
  const todo = document.getElementById("todoList");

  if (input.value === "") {
    alert("Please enter a todo item");
    return;
  }
  const li = document.createElement("div");
  li.className = "todoItem";
  li.id = "todoItem";

  const timestamp = new Date().toLocaleString();

  li.innerHTML = `
    <div class="list-item">
                    <p class="task">${input.value}</p>
                    <p class="time">Added: ${timestamp}</p>
                </div>
                <div class="actions">
                    <button class="btn-delete" id="delete"><i class="fa-solid fa-trash"></i></button>
                </div>
                
            `;
  todo.appendChild(li);
  input.value = "";
});

document.getElementById("todoList").addEventListener("click", function (e) {
  if (e.target && e.target.classList.contains("btn-delete")) {
    const item = e.target.closest(".todoItem");
    item.remove();
  }
});
