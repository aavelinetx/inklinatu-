basic.forever(function () {
    if (input.isGesture(Gesture.TiltLeft)) {
        led.plot(0, 2)
    } else {
        led.unplot(0, 2)
    }
    if (input.isGesture(Gesture.TiltRight)) {
        led.plot(4, 2)
    } else {
        led.unplot(4, 2)
    }
    if (input.isGesture(Gesture.ScreenUp)) {
        led.plot(2, 2)
    } else {
        led.unplot(2, 2)
    }
    if (input.isGesture(Gesture.ScreenDown)) {
        led.plot(2, 0)
    } else {
        led.unplot(2, 0)
    }
})
