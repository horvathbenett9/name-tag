let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.clearScreen()
        for (let index_2 = 0; index_2 <= 32; index_2++) {
            x = randint(0, 4)
            y = randint(0, 4)
            led.toggle(x, y)
            basic.pause(300)
        }
        basic.pause(9000)
    }
})
basic.forever(function () {
	
})
