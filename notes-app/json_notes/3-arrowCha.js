

const task={
    tasks:[{
        text:'Grocery Shopping',
        completed:true
    },{
        text:'Clean Yard',
        completed:false
    },{
        text:'Film Course',
        completed:false
    }],
    /*Method 1
    printIncomplite(){
        this.tasks.forEach((tsk)=>{
            if(!tsk.completed){
                console.log(tsk)
            }
        })
    }
    task.printIncomplite()*/
    printIncomplite(){
        const incTask=this.tasks.filter((tsk)=>{
            return tsk.completed===false
        })
        return incTask
    }

}

console.log(task.printIncomplite())