function addTodo(elem) {
    const inputBoxElem = document.querySelector("#input-box");
    const inputBoxValue = inputBoxElem.value;
    if (inputBoxValue.trim()) {
        document.querySelector(".to-do-list").innerHTML += `
  <li>
  <input type="checkbox" class="checkbox" onclick="onClickCheckbox(this)" />
  <span>${inputBoxValue}</span>
  <input type="button" id="delete-button" value="x" onclick="deleteTodo(this)" />
</li>
  `;
        inputBoxElem.value = "";
    }
}

function enterKey(e) {
    if (e.keyCode == 13) {
        addTodo();
    }
}

function deleteTodo(deleteElem) {
    deleteElem.parentElement.remove();
}

function onClickCheckbox(checkboxElem) {
    const liElem = checkboxElem.parentElement;
    const spanElem = liElem.querySelector("span");
    if (checkboxElem.checked) {
        spanElem.innerHTML = `<s>${spanElem.innerText}</s>`;
        spanElem.style.color = "gray";
    } else {
        spanElem.innerHTML = `${spanElem.innerText}`;
        spanElem.style.color = "black";
    }
}
