let strip = boson.create(PIN.P16, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    serial.writeValue("Loudness:", boson.readLoudness(PIN1.P0))
    serial.writeValue("Rotation:", boson.readRotation(PIN1.P1))
    boson.servo(PIN1.P0, 0)
    basic.pause(200)
    boson.servo(PIN1.P0, 90)
    basic.pause(200)
    boson.servo(PIN1.P0, 180)
    basic.pause(200)
    boson.servo(PIN1.P0, 90)
    basic.pause(200)
})
basic.forever(function () {
    if (boson.button(PIN.P2) == 1) {
        boson.switchLED(Switch.ON, PIN.P8)
        boson.fan(Switch.ON, PIN.P15)
    } else {
        boson.switchLED(Switch.OFF, PIN.P8)
        boson.fan(Switch.ON, PIN.P15)
    }
})
