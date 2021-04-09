var dog,database,position, dogimage,happydogimage,foodstock;





function preload(){
    dogimage=loadImage("DOG1/Dog(2).png")
happydogimage=loadImage("DOG1/happydog(1).png")
}

function setup(){
    database = firebase.database();
    console.log(database);
    createCanvas(500,500);
    dog = createSprite(250,250,10,10);
dog.addImage("dogimage")

    foodstock=database.ref('Food')
    foodstock.on("value",readStock)
}

function draw(){
    background("green");
    if(keyWentDown(UP_ARROW)){
        writeStock(foods);
        dog.addImage("happydog");
    }
    
    drawSprites();
}

function readStock(data){
foods=data.val();
}


function writeStock(x){
database.ref('/').update({
    Food:x
})

}
