function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  var task = taskInput.value;
  
  if (task.trim() !== "") {
    var li = document.createElement("li");
    li.textContent = task;
    li.onclick = function() {
      li.classList.toggle("completed");
    };
    taskList.appendChild(li);
    taskInput.value = "";
  }
}
