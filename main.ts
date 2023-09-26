/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Jack
 * Created on: Sep 2023
 * This program prints the temperature on a microbit
*/

// variable for microbits temperature
let microbitTemperature: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)
basic.pause(1000)

input.onButtonPressed(Button.A, function () {
  microbitTemperature = (input.temperature() + 273.15)
  basic.showString(' The temperature is: ' + microbitTemperature.toString() + 'K .')
})
