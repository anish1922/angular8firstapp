
export class Model
{
    user;
    items:ToDoItem[];

    constructor()
    {
        this.user="Adam";
        this.items= [new ToDoItem("Buy flower",false),
        new ToDoItem("Get shoes",false),
        new ToDoItem("Collects tickets",false),
        new ToDoItem("Call joe",false)
    ]
    }
}

export class ToDoItem {
    action;
    done;

    constructor(action, done) {
        this.action = action;
        this.done = done;
    }
}