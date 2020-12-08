class Game{
    constructor(){}

    //Read the gameState value from the database
    getState(){
        database.ref("gameState").on("value", function(data){
            gameState = data.val()
        })
    }

    //write the gameState value to the database
    updateState(state){
        database.ref("/").update({
            gameState : state
        })
    }
    //start screen of the game
start(){
    if(gameState === 0){
        form = new Form()
        form.display()
        player = new Player()
        player.getCount()
    }
    car1 = createSprite(100,200)
    car2 = createSprite(300,200)
    car3 = createSprite(500,200)
    car4 = createSprite(700,200)
    car1.addImage(car1img)
    car2.addImage(car2img)
    car3.addImage(car3img)
    car4.addImage(car4img)
    cars = [car1,car2,car3,car4]
}

play(){
form.hide()
Player.getPlayersInfo()
if(players !== undefined){
    background("black")
    image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
    var index = 0
    var x = 200
    var y
    for(var i in players){
        index = index + 1
        x = x + 200
        y = displayHeight - players[i].distance
        cars[ index - 1].x = x
        cars[ index - 1].y = y
        if(index === player.index){
            cars[ index - 1].shapeColor = "red"
            camera.position.x = displayWidth/2
            camera.position.y = cars[ index - 1].y
        }
    }
}
if(keyDown('up')&& player.index !== null){
    player.distance += 10
    player.updateInfo()
}
if(player.distance > 4400){
    gameState = 2
}
drawSprites()
}

end(){
    console.log("Game Completed")
}
}