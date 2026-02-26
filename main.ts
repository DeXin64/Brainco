//%color=#921AFF icon="\uf118" block="Brainco" blockId="Brainco"
namespace Brainco{


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
    
    /**
    * Low:Attention greater than 35,Middle:Attention greater than 50,High:Attention greater than 65.
    */
    //% block="Attention %level" blockId="GetAttentionValue"
    export function get_Attention_Value(level:value_level):boolean {
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
    * Check if received "up" brainwave data (brainwave value == 1)
    */
    //% block="received \"up\"" blockId="GetUpData"
    export function get_Up_Data(): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == 1
    }

    /**
    * Check if received "down" brainwave data (brainwave value == 2)
    */
    //% block="received \"down\"" blockId="GetDownData"
    export function get_Down_Data(): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == 2
    }

    /**
    * Check if received "left" brainwave data (brainwave value == 3)
    */
    //% block="received \"left\"" blockId="GetLeftData"
    export function get_Left_Data(): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == 3
    }

    /**
    * Check if received "right" brainwave data (brainwave value == 4)
    */
    //% block="received \"right\"" blockId="GetRightData"
    export function get_Right_Data(): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == 4
    }

    /**
    * Check if received "shoot" brainwave data (brainwave value == 5)
    */
    //% block="received \"shoot\"" blockId="GetShootData"
    export function get_Shoot_Data(): boolean {
        let value = 0
        serial.setRxBufferSize(1)
        value = serial.readBuffer(1)[0]
        return value == 5
    }
}
