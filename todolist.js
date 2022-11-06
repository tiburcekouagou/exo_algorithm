let getlist=document.getElementById("mylist")

class TodoList{
    constructor(element){
        this.ListElement=element;
        this.textList=[];
        this.li;
    }

    static createListItem(text){
        this.li=document.createElement('li');
        getlist.append(this.li)
        this.li.document.innerHTML=text;
    }

    update(){
        //getlist.removeChild(this.li);
        this.createListItem(text)
    }

    add(text){
        this.textList.push(text);
        this.update();
    }

    remove(index){
        this.textList.splice(index,1);
        this.update();
    }
}

const todoApp=new TodoList(getlist);
createListItem("tache à faire");
console.log(todoApp);
//todoApp.add("Tache à faire 1");