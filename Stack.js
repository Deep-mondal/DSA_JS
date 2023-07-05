const a=require("prompt-sync")();
top=-1;
stack=[];
function push(x){
    stack[++top]=x;
    console.log("Element inserted");
}
function pop(){
    console.log("Poped item is",stack[top]);
    top--;
}
function display(){
        console.log(stack);

}
while(true){
    console.log("=========Menu========");
    console.log("1.Push");
    console.log("2.Pop");
    console.log("3.Display");
    console.log("4.Exit");
    let ch=parseInt(a("Enter a choice by a number:"));
    console.log("=========************========");
    switch(ch){
        case 1:let x=parseInt(a("Enter the element to be inserted:"));
                push(x);
                break;
        case 2:
                 if(top==-1)
                    console.log("Stack is empty");
                 else
                    pop();
                break;
        case 3: display();
                break;
        case 4: return;
    }

}