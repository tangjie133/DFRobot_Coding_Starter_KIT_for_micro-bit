# Maqueen+

Based on micro:bit, this kit includes 13 well selected modules, covering most popular digital and analog sensors, logic modules and actuators, supporting sound, light and motion interaction.
## Basic usage

* Use the key to turn on the LED and fan

```blocks
 basic.forever(function () {
    if (boson.button(PIN.P2) == 1) {
        boson.switchLED(Switch.ON, PIN.P8)
        boson.fan(Switch.ON, PIN.P15)
    } else {
        boson.switchLED(Switch.OFF, PIN.P8)
        boson.fan(Switch.ON, PIN.P15)
    }
})
```
* Steering gear control
```blocks
basic.forever(function () {
    boson.servo(PIN.P12, 0)
    basic.pause(200)
    boson.servo(PIN.P12, 90)
    basic.pause(200)
    boson.servo(PIN.P12, 180)
    basic.pause(200)
    boson.servo(PIN.P12, 90)
    basic.pause(200)
    boson.servo(PIN.P12, 0)
    basic.pause(200)
})
```
* RGB light band control
```blocks
let strip = boson.create(PIN.P16, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
```
* Print sound intensity and knob parameters
```blocks
basic.forever(function () {
    serial.writeValue("Loudness:", boson.readLoudness(PIN.P0))
    serial.writeValue("Rotation:", boson.readRotation(PIN.P1))
})
```
## License
MIT
Copyright (c) 2020, microbit/micropython Chinese community  
## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
