
let add_task_button = document.querySelector(".add-task-button");
let task_number = 0;
let completed_tasks = 0;

add_task_button.addEventListener("click", ()=>{
    let tasks = document.querySelector(".tasks")
    let input_element = document.querySelector(".input-element").value;


    if(!input_element  == "")
    {
        task_number++;
        
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
                    <button class="cancel-task-btn">
                        <ion-icon name="trash-outline"></ion-icon>
                    </button>
                </div>
                   </div>
                `
        tasks.appendChild(added_task)

        let tick = added_task.querySelector("#tick");
        let tick_task_btn = added_task.querySelector("#tick-task-btn");
        let task_p = added_task.querySelector("#task-p")


        
        tick_task_btn.addEventListener("click", () => {
             task_p.style.textDecoration = "line-through";
             tick.style.display = "block"
             tick_task_btn.style.display = "none"
             completed_tasks++
             document.querySelector(".complete-btn").innerText = `Completed ${completed_tasks}`
         });



         tick.addEventListener("click", ()=>{
            tick_task_btn.style.display = "block"
            tick.style.display = "none"
            task_p.style.textDecoration = "none";
            completed_tasks--
             document.querySelector(".complete-btn").innerText = `Completed ${completed_tasks}`

           
         })
        

        
        //  tick.addEventListener("click", ()=>{


        //  })

        // $(document).on("click", "#tick-task-btn", function (){
        //     let task_p = $(this).closest("div").closest("p");
        //     console.log(task_p);
        // })
        document.querySelector(".input-element").value = ""
    }
    else{
        prompt(`Please inert a`)
    }
})
