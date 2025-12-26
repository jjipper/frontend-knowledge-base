const onClickAdd = () => {
    // Input value saves
    const textEl = document.getElementById("add-text");
    const text = textEl.value;

    // Input Clear
    textEl.value = "";

    // create li, div, p
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "memo-wrap"
    const p = document.createElement("p")
    
    // place text value into p
    p.textContent = text;
    // create Delete button
    const button = document.createElement("button");
    button.textContent = "Delete"

    button.addEventListener("click", () => {
        // find closest li
        const deleteTarget = button.closest("li");

        // delete li
        document.getElementById("memo-list").removeChild(deleteTarget);

        // show memo length
        total.textContent = document.getElementById("memo-list").childElementCount;
    })

    // add li > div > p, button
    div.appendChild(p);
    div.appendChild(button);

    li.appendChild(div);

    document.getElementById("memo-list").append(li);

    // show memo length
    const total = document.getElementById("memo-total");
    total.textContent = document.getElementById("memo-list").childElementCount;
}

document
    .getElementById("add-btn")
    .addEventListener("click", () => onClickAdd());