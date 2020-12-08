class Form{
constructor(){
     this.title = createElement('h2')
     this.input = createInput('Name')
    this.button = createButton('Start')
    this.greeting = createElement('h3')
}
hide(){
    this.title.hide() 
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
}
display(){
    //createElement is used to create heading and h2 is the size of the heading
    //.html is used to give the content in the heading
    this.title.html('Car Racing')
    this.title.position(displayWidth/2 -20,0)
    
    //createInput creates the input place
    
    this.input.position(displayWidth/2 -40,displayHeight/2 -80)

    //createButton creates a button
    
    this.button.position(displayWidth/2 +40,displayHeight/2 )

    this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name = this.input.value()
        playerCount += 1
        player.index = playerCount
        player.updateInfo()
        player.updateCount(playerCount)
    
        this.greeting.html('Hello '+ player.name)
        this.greeting.position(displayWidth/2 - 20,displayHeight/4)
    })
}
}