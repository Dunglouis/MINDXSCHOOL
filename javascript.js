var todo = [
    "I will wake up at 8 in the morning",
    "I will practice html for 1 hour",
    "I will ive time for 2 hours css",
    "Then i will have breakfast",
   
]

var list = document.getElementById("list-infor-id")

function computeListHtml(){
    list.innerHTML = ""
    for(let i in todo){
        list.innerHTML += `
            <div class="list-infor-child">
                <p>${todo[i]}</p>
                <div class="list-infor-waste"> 
                    <i class="far fa-trash-alt" onClick="onClickremoveitem(${i})"></i>
                </div>
            </div>
        `
    }
}

computeListHtml()

function onClickadditem(){
    const input = document.getElementById("input-todo-item")
    todo.push(input.value)
    computeListHtml()
    input.value = ""
}

function onClickremoveitem(i){ // tai sao chuyen remove vaof div lai ko ddc
    todo.splice(i, 1)
    computeListHtml()
}