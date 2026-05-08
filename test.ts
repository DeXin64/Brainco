input.onButtonPressed(Button.A, function () {
    basic.showNumber(0)
})
serial.redirectToUSB()
basic.forever(function () {
    if (Brainco.get_Command_Data(Brainco.command_type.down)) {
        basic.showNumber(1)
    } else if (Brainco.get_Command_Data(Brainco.command_type.up)) {
        basic.showNumber(2)
    } else if (Brainco.get_Command_Data(Brainco.command_type.honk)) {
        basic.showNumber(3)
    } else if (Brainco.get_Command_Data(Brainco.command_type.left)) {
        basic.showNumber(4)
    } else if (Brainco.get_Command_Data(Brainco.command_type.right)) {
        basic.showNumber(5)
    } else if (Brainco.get_Command_Data(Brainco.command_type.shoot)) {
        basic.showNumber(6)
    }
    basic.pause(100)
})
