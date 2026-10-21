function registerStudent() {
    let name = document.getElementById("name").value.trim();
    let roll = document.getElementById("roll").value.trim();

    if (name === "" || roll === "") {
        alert("Student registration completed");
        return;
    }

    let li = document.createElement("li");
    li.textContent = name + " - " + roll;
    document.getElementById("list").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";

}