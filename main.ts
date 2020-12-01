let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    for (let index = 0; index <= 24; index++) {
        x = randint(0, 4)
        y = randint(0, 4)
        led.plot(x, y)
        basic.pause(300)
    }
})
basic.forever(function () {
	
})
