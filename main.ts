function decrease_kompor2 () {
    if (kompor2 > 0) {
        kompor2 = kompor2 - Math.map(10, 0, 100, 0, 1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
}
function decrease_kompor1 () {
    if (kompor1 > 0) {
        kompor1 = kompor1 - Math.map(10, 0, 100, 0, 1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 400, 600, 255, 0, 100, SoundExpressionEffect.Warble, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
}
function increase_kompor2 () {
    if (kompor2 < 1000) {
        kompor2 = kompor2 + Math.map(10, 0, 100, 0, 1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
}
control.onEvent(EventBusSource.MES_DPAD_CONTROLLER_ID, EventBusValue.MICROBIT_EVT_ANY, function () {
    if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_A_DOWN) {
        increase_kompor1()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_B_DOWN) {
        increase_kompor2()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_C_DOWN) {
        decrease_kompor1()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_D_DOWN) {
        decrease_kompor2()
    } else if (control.eventValue() == EventBusValue.MES_DPAD_BUTTON_1_DOWN) {
        if (num < 10) {
            num = num + 1
        }
    }
})
function increase_kompor1 () {
    if (kompor1 < 1000) {
        kompor1 = kompor1 + Math.map(10, 0, 100, 0, 1000)
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.InBackground)
    }
}
let num = 0
let kompor2 = 0
let kompor1 = 0
kompor1 = 0
kompor2 = 0
num = 0
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, kompor1)
    pins.analogWritePin(AnalogPin.P2, kompor2)
})
