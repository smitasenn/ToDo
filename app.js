const title=document.getElementById("title");
const desc=document.getElementById("description");
const form =document.querySelector("form");
const container =document.querySelector(".container");
const tasks=localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
show();

function show()
{
    tasks.forEach((task,index)=>{
        const div=document.createElement("div");
        div.setAttribute("class","task");
        const innerDiv=document.createElement("div");
        div.append(innerDiv);
        const p=document.createElement("p");
        p.innerText=task.title;
        const span=document.createElement("span");
        span.innerText=task.desc;
        innerDiv.append(p);
        innerDiv.append(span);


        const btn=document.createElement("button");
        btn.setAttribute("class","rmv");
        btn.innerText="-";
        btn.addEventListener("click",()=>{
            removeTask();
            tasks.splice(index,1);
            localStorage.setItem("tasks",JSON.stringify(tasks));
            show();
        });
        div.append(btn);
        container.append(div);


    });
}
function removeTask()
{
    for(let task of tasks)
    {
        const div=document.querySelector(".task");
        div.remove();
    }
}
form.addEventListener("submit",(e)=>{
    //e.preventDefault();
    removeTask();
    tasks.push({
        title:title.value,
        desc:desc.value
    });
    
    localStorage.setItem("tasks",JSON.stringify(tasks));
    show();
   

})