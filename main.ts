input.onButtonPressed(Button.A, function () {
    if (led.point(2, 2)) {
        score_player_1 += 1
        led.unplot(2, 2)
    }
})
input.onButtonPressed(Button.B, function () {
    if (led.point(2, 2)) {
        score_player_2 += 1
        led.unplot(2, 2)
    }
})
led.unplot(0, 0)
let gameover = 0
let score_player_1 = 0
let score_player_2 = 0
basic.forever(function () {
    if (gameover == 0) {
        basic.pause(randint(100, 5000))
        led.plot(2, 2)
    }
})
basic.forever(function () {
    if (gameover == 0) {
        led.plot(0, score_player_1 - 1)
        led.plot(4, score_player_2 - 1)
    }
})
basic.forever(function () {
    if (score_player_1 == 5) {
        gameover = 1
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
basic.forever(function () {
    if (score_player_2 == 5) {
        gameover = 1
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
})
