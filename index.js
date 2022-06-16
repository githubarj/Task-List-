 window.addEventListener('load', ()=>){  /*listens to an event happening on the html*/

        const form = document.querySelector("#new-task-form");
        const input = document.querySelector("#new-task-input");
        const list_el = document.querySelector('tasks');

        form.addEventListener('submit', (e) => {
            e.preventDefault; /* to prevent a reload*/


            task = input.value;
            const task_el = document.createElement('div'); 
        })

 }