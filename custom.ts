//% color=#2e8b57 icon="\uf2c9" block="Sensors"
namespace sensors {
    export enum DHT11Mode {
        //% block="Temperature (°C)"
        Temperature,
        //% block="Humidity (%)"
        Humidity
    }

    // BLOCK 1: DHT11 (Temp & Humidity)
    //% blockId="sensor_dht11" block="read DHT11 %mode| at pin %pin"
    export function readDHT11(mode: DHT11Mode, pin: DigitalPin): number {
        // ... (Insert the timing logic from the previous response here)
        return 0; // Placeholder
    }

    // BLOCK 2: Analog (General)
    //% blockId="sensor_read_analog" block="read analog sensor at %pin| (0-100)"
    export function readAnalog(pin: AnalogPin): number {
        return Math.map(pins.analogReadPin(pin), 0, 1023, 0, 100);
    }

    // BLOCK 3: Digital (General)
    //% blockId="sensor_is_triggered" block="sensor at %pin| is triggered?"
    export function isTriggered(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1;
    }
    // BLOCK 4: Blank (General)
    //% block=" Blank "
    export function blankBlock(): void {
        // This is intentionally left blank. 
        // It does nothing when executed.
    
}
