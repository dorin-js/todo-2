const addForm = document.querySelector(".add");
const list = document.querySelector(".todos");
const searchForm = document.querySelector(".search");
const search = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

const generateTemplate = (todo) => {
  const html = `
     <li class="list-group-item d-flex justify-content-between align-items-center text-light">
          <span>${todo}</span>
          <i class="far fa-trash-alt delete"></i>
     </li>
     `;
  list.innerHTML += html;
};
addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todo = addForm.add.value.trim();
  if (todo.length) {
    generateTemplate(todo);
    addForm.reset();
  }
});

list.addEventListener("click", deleteTodo);

function deleteTodo(e) {
  if (e.target.classList.contains("delete")) {
    e.target.parentElement.remove();
  }
}

// search todos
search.addEventListener("keyup", () => {
  const term = search.value.trim();
  filterTodos(term);
});
searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  searchForm.reset();
  const term = search.value.trim();
  filterTodos(term);
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter((todo) => {
      return !todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.add("filtered");
    });

  Array.from(list.children)
    .filter((todo) => {
      return todo.textContent.toLowerCase().includes(term);
    })
    .forEach((todo) => {
      todo.classList.remove("filtered");
    });
};
