//%color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco {


    export enum value_level{
        /**
         * Attention greater than 35
         */
        //% block="low"
        low = 35,
        /**
         * Attention greater than 50
         */
        //% block="middle"
        middle = 50,
        /**
         * Attention greater than 65
         */
        //% block="high"
        high = 65
    }

    export enum command_type {
        /**
         * Up command
         */
        //% block="up"
        up = 1,
        /**
         * Down command
         */
        //% block="down"
        down = 2,
        /**
         * Left command
         */
        //% block="left"
        left = 3,
        /**
         * Right command
         */
        //% block="right"
        right = 4,
        /**
         * Shoot command
         */
        //% block="shoot"
        shoot = 5
    }

    /**
    * Low:Attention greater than 35,Middle:Attention greater than 50,High:Attention greater than 65.
    */
    //% block="Attention %level" blockId="GetAttentionValue"
    export function get_Attention_Value(level: value_level): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]

        switch (level) {
            case value_level.low:
                if (value > value_level.low)
                    return true
                else
                    return false
            case value_level.middle:
                if (value > value_level.middle)
                    return true
                else
                    return false
            case value_level.high:
                if (value > value_level.high)
                    return true
                else
                    return false
            default:
                return false
        }
    }

    /**
    * Check if received specific command brainwave data
    */
    //% block="Get command %command"
    //% command.fieldEditor="gridpicker"
    //% command.fieldOptions.columns=3
    export function get_Command_Data(command: command_type): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == command
    }
}
