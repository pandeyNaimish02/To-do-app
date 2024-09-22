let todoList=[
    {item:'Buy Milk',dueDate:'15/10/2024'},
    {item:'GoToCollege',dueDate:'15/10/2024'},
];
displayResult();
function addToDo(){
    let inputElemnt=document.querySelector('#todo-input');
    let dateElemnt=document.querySelector('#todo-date');
    let todoItem=inputElemnt.value;
    let todoDate=dateElemnt.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElemnt.value='';
    dateElemnt.value='';
    displayResult();
}
function displayResult(){
    let displayContainer=document.querySelector('.todo-container');

    let newHTML='';
    
    
    for(let i=0;i<todoList.length;i++){
    let {item,dueDate}=todoList[i];
        newHTML+=`
       
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="del-btn" onclick="todoList.splice(${i},1);
        displayResult();"
        >Delete</button>
    
        `;
    }
    displayContainer.innerHTML=newHTML;
}
