let add_task_button = document.querySelector(".add-task-button");
let task_number = 0;
let completed_tasks = 0;
let incompleted_tasks = 0;
let incomplete_btn = document.querySelector(".incomplete-btn")

add_task_button.addEventListener("click", ()=>{
    let tasks = document.querySelector(".tasks")
    let input_element = document.querySelector(".input-element").value;


    if(!input_element  == "")
    {
        incompleted_tasks++
        task_number++;
        incomplete_btn.innerText = `Incomplete ${incompleted_tasks}`
        
        let added_task =  document.createElement('div')
        added_task.classList.add("task") 
        added_task.innerHTML = `
                    <div class="task-left">
                        <div class="task-number-and-tick">
                            <p class="task-number">${task_number}.</p>
                        <button id ="tick-task-btn">
                            <ion-icon name="ellipse-outline"></ion-icon>
                        </button>


                        <button id ="tick">
                           <ion-icon name="checkmark-circle-outline"></ion-icon>
                        </button>


                        </div>
                        <div class="">
                            <p id="task-p">${input_element}</p>
                        </div>
                    </div>
                    <div class="right-icons">
                    <button>
                        <ion-icon name="create-outline"></ion-icon>
                    </button>
                    <button id="cancel-task-btn">
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
                   </div>
                `
        tasks.appendChild(added_task)

        let tick = added_task.querySelector("#tick");
        let tick_task_btn = added_task.querySelector("#tick-task-btn");
        let task_p = added_task.querySelector("#task-p")
        let cancel_task_btn = added_task.querySelector("#cancel-task-btn")
        


        cancel_task_btn.addEventListener("click", ()=>{

            let dialog_container = document.createElement('div');
            dialog_container.classList.add("dialog-container");
            dialog_container.innerHTML = `
             
        <p>Delete the task above? </p>
        <div>
            <button id="dialog-yes-btn">Yes</button>
            <button id="dialog-no-btn">No</button>
        </div>
    
            `
           

            tasks.appendChild(dialog_container)

            let dialog_yes_btn = document.querySelector("#dialog-yes-btn");
            let dialog_no_btn = document.querySelector("#dialog-no-btn")
            dialog_yes_btn.addEventListener("click", ()=>{
                added_task.remove()
                dialog_container.remove()
                incompleted_tasks--
                incomplete_btn.innerText = `incomplete tasks ${incompleted_tasks}`

            })

            dialog_no_btn.addEventListener("click",()=>{
                dialog_container.remove();
            })


        
        })


        tick_task_btn.addEventListener("click", () => {
             task_p.style.textDecoration = "line-through";
             tick.style.display = "block"
             tick_task_btn.style.display = "none"
             completed_tasks++
             incompleted_tasks--
             document.querySelector(".complete-btn").innerText = `Completed ${completed_tasks}`
              incomplete_btn.innerText = `Incomplete.. ${incompleted_tasks}`
         });

         tick.addEventListener("click", ()=>{
            tick_task_btn.style.display = "block"
            tick.style.display = "none"
            task_p.style.textDecoration = "none";

            completed_tasks--

             document.querySelector(".complete-btn").innerText = `Completed ${completed_tasks}`
              incompleted_tasks++
              incomplete_btn.innerText = `Incomplete.. ${incompleted_tasks}`
            

         })
        
        document.querySelector(".input-element").value = ""
    }
    else{
        prompt(`Please insert a task`)
    }
  
})
