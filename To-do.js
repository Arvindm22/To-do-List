let toDoList = [];
let options=["new","list","delete","quit"];
input = prompt(`please select what you want to do from the given options: ${options}`).toLowerCase();
if((!options.includes(input))){
    alert("Enter a proper option")
}
while (input !== "quit") {
    if (input === 'new') {
        input = prompt('Please enter the item to add');
        toDoList.push(input.toUpperCase());
        console.log(`${input} is added to the list`);
    }
    else if (input === "list") {
        console.log("******")
        for (let i = 0; i < toDoList.length; i++) {

            console.log(`${i}:${toDoList[i]}`);
        }
        console.log("******")
    }
    else if (input === "delete") {
        index = prompt("Enter the index to be deleted:");
        toDoList.splice(index, 1);
        console.log("Todo removed")
        console.log("******")
        for (let i = 0; i < toDoList.length; i++) {
            console.log(`${i}:${toDoList[i]}`);
        }
        console.log("******")
    }
    input = prompt('please select what you want to do from the given options:').toLowerCase();
}
console.log("Okay you have quit the app");