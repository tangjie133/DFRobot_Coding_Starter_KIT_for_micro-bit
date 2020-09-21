
enum PIN {
    P0,
    P1,
    P2,
    P8,
    P12,
    P15,
    P16,
};
enum Switch{
    //% block="ON"
    ON,
    //%block="OFF"
    OFF
};
//% weight=10 color=#00A654 icon="\uf032" block="BOSON Coding Kit"
namespace boson {

    /**
     * 获取声音强度
     */
    //% blockID=BOSON_Loudness block="read pin %pin Loudness"
    //%weight=100
    export function readLoudness(pin:PIN):number{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = AnalogPin.P0; break;
            case PIN.P1: _pin = AnalogPin.P1; break;
            case PIN.P2: _pin = AnalogPin.P2; break;
            case PIN.P8: _pin = AnalogPin.P8; break;
            case PIN.P12: _pin = AnalogPin.P12; break;
            case PIN.P15: _pin = AnalogPin.P15; break;
            default: _pin = AnalogPin.P16; break;
        }
        return pins.analogReadPin(_pin);
    }
    /**
     * 获取角度传感器值
     */
    //% blockID=BOSON_Rotation_Sensor block="read pin %pin Rotation Sensor"
    //%weight=99
    export function readRotation(pin:PIN):number{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = AnalogPin.P0; break;
            case PIN.P1: _pin = AnalogPin.P1; break;
            case PIN.P2: _pin = AnalogPin.P2; break;
            case PIN.P8: _pin = AnalogPin.P8; break;
            case PIN.P12: _pin = AnalogPin.P12; break;
            case PIN.P15: _pin = AnalogPin.P15; break;
            default: _pin = AnalogPin.P16; break;
        }
        return pins.analogReadPin(_pin);
    }
    /**
     * LED灯控制
     */
    //% blockID=BOSON_LED block="Turn %_switch pin %pin LED"
    //%weight=98
    export function switchLED(_switch:Switch, pin:PIN):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P16; break;
        }
        switch(_switch){
            case Switch.ON: pins.digitalWritePin(_pin, 1);break;
            default:pins.digitalWritePin(_pin, 0);break;
        }
    }
    /**
     * LED写入模拟值
     */
    //% blockID=BOSON_LEDbrigheness block="pin %pin LED brightness %data"
    //% weight=97
    //% data.min=0 data.max=1023
    export function ledBrigheness(pin:PIN, data:number):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = AnalogPin.P0; break;
            case PIN.P1: _pin = AnalogPin.P1; break;
            case PIN.P2: _pin = AnalogPin.P2; break;
            case PIN.P8: _pin = AnalogPin.P8; break;
            case PIN.P12: _pin = AnalogPin.P12; break;
            case PIN.P15: _pin = AnalogPin.P15; break;
            default: _pin = AnalogPin.P16; break;
        }
        pins.analogWritePin(_pin, data);
    }
    /**
     * 舵机控制
     */
    //% blockID=BOSON_SERVO block="set pin %pin servo to %data degree"
    //% weight=96
    //% data.min=0 data.max=180
    export function servo(pin:PIN, data:number):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = AnalogPin.P0; break;
            case PIN.P1: _pin = AnalogPin.P1; break;
            case PIN.P2: _pin = AnalogPin.P2; break;
            case PIN.P8: _pin = AnalogPin.P8; break;
            case PIN.P12: _pin = AnalogPin.P12; break;
            case PIN.P15: _pin = AnalogPin.P15; break;
            default: _pin = AnalogPin.P16; break;
        }
        pins.servoWritePin(_pin, data);
    }
    /**
     * 风扇控制
     */
    //% blockID=BOSON_Fan block="Turn %_switch pin %pin fan"
    //% weight=95
    export function fan(_switch:Switch, pin:PIN):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P16; break;
        }
        switch(_switch){
            case Switch.ON: pins.digitalWritePin(_pin, 1);break;
            default:pins.digitalWritePin(_pin, 0);break;
        }
    }
    /**
     * 控制风扇速度
     */
    //% blockID=BOSON_FanSpeed block="pin %pin Fan speed %data"
    //% weight=94
    //% data.min=0 data.max=1023
    export function fanSpeed(pin:PIN, data:number):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = AnalogPin.P0; break;
            case PIN.P1: _pin = AnalogPin.P1; break;
            case PIN.P2: _pin = AnalogPin.P2; break;
            case PIN.P8: _pin = AnalogPin.P8; break;
            case PIN.P12: _pin = AnalogPin.P12; break;
            case PIN.P15: _pin = AnalogPin.P15; break;
            default: _pin = AnalogPin.P16; break;
        }
        pins.analogWritePin(_pin, data);
    }
    /**
     * 运动传感器
     */
    //% blockID=BOSON_Digital block="read pin %pin Digital infrared motion sensor"
    //% weight=94
    export function readDigital(pin:PIN):number{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P16; break;
        }
        return pins.digitalReadPin(_pin);
    }
    /**
     * 按键
     */
    //% blockID=BOSON_Button block="pin %pin button pressed"
    //% weight=93
    export function button(pin:PIN):number{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P16; break;
        }
        return pins.digitalReadPin(_pin);
    }
    /**
     * 录音模块
     */
    //% blockID=BOSON_Voice_Recorder_Module block="Turn %_switch pin %pin Voice Recorder Module"
    //% weight=92
    export function voice(_switch:Switch, pin:PIN):void{
        let _pin;
        switch(pin){
            case PIN.P0: _pin = DigitalPin.P0; break;
            case PIN.P1: _pin = DigitalPin.P1; break;
            case PIN.P2: _pin = DigitalPin.P2; break;
            case PIN.P8: _pin = DigitalPin.P8; break;
            case PIN.P12: _pin = DigitalPin.P12; break;
            case PIN.P15: _pin = DigitalPin.P15; break;
            default: _pin = DigitalPin.P16; break;
        }
        switch(_switch){
            case Switch.ON: pins.digitalWritePin(_pin, 1);break;
            default:pins.digitalWritePin(_pin, 0);break;
        }
    }
    
}