
let add_task_button = document.querySelector(".add-task-button");
let task_number = 0;


add_task_button.addEventListener("click", ()=>{
    let tasks = document.querySelector(".tasks")
    let input_element = document.querySelector(".input-element").value;


    if(!input_element  == "")
    {
        
        task_number++;
        let added_task =  document.createElement('div')
        added_task.innerHTML = `<div class="task">
                    <div class="task-left">
                        <div class="task-number-and-tick">
                            <p class="task-number">${task_number}.</p>
                        <button class="tick-task-btn">
                            <ion-icon name="ellipse-outline"></ion-icon>
                        </button>
                        </div>
                        <div class="">
                            <p class="task-p">${input_element}</p>
                        </div>
                    </div>
                    <button class="cancel-task-btn">
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>`
        tasks.appendChild(added_task)

        let tick_task_btn = added_task.querySelector(".tick-task-btn");
        let task_p = added_task.querySelector(".task-p");
        tick_task_btn.addEventListener("click", () => {
            task_p.style.textDecoration = "line-through";
            console.log("Task completed!");
        });
        

        document.querySelector(".input-element").value = ""
       

    }
    else{
        prompt(`weeeee`)
    }

     
})
