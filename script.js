document.getElementById("contactForm").addEventListener("submit",function(e) {
    e.preventDefault();

    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const message=document.getElementById("message").value.trim();
    const formMessage=document.getElementById("formMessage");

    if(!name || !email ||!message) {
        formMessage.textContent="Please fill in all fields";
        return;
    }
    const emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email)) 
        {
        formMessage.textContent="enter a valid email address.";
        return;
        }
        formMessage.style.color="green";
        formMessage.textContent="Form submitted succesfully!";
});

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
  
    if (taskInput.value.trim() === "") return;
  
    const li = document.createElement("li");
    li.textContent = taskInput.value;
  
    const btn = document.createElement("button");
    btn.textContent = "Remove";
    btn.style.marginLeft = "10px";
    btn.onclick = () => li.remove();
  
    li.appendChild(btn);
    taskList.appendChild(li);
  
    taskInput.value = "";
  }