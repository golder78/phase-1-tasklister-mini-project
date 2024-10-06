document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  // Event listener for form submission
  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get input values
    const taskDescription = document.getElementById("new-task-description").value;
    const priority = document.getElementById("priority").value;
    const dueDate = document.getElementById("due-date").value;

    // Create task
    const newTask = document.createElement("li");
    newTask.innerHTML = `
      <span>${taskDescription} - Due: ${dueDate} </span>
      <button class="delete-btn">X</button>
    `;

    // Set task priority color
    if (priority === "high") {
      newTask.style.color = "red";
    } else if (priority === "medium") {
      newTask.style.color = "orange";
    } else {
      newTask.style.color = "green";
    }

    // Append task to the list
    taskList.appendChild(newTask);

    // Delete functionality
    newTask.querySelector(".delete-btn").addEventListener("click", function() {
      newTask.remove();
    });

    // Clear the form
    form.reset();
  });
});