# Variables Files

## What is the difference between a .INI and a .INC?

An INI file is a config file that can contain Meters and Measures that can be opened by Rainmeter and visually displayed on your screen. Your app's dropdown menu, submenus, and the Droptop top bar are examples of an INI.

An INC is an @Include file. It can be used to add additional Meters and Measures to an INI file. Multiple INIs can use the same INC file simultaneously, and can include things like Variables you want multiple INI files to have access to. For example, if an INC file contains a variable `ExampleVariable=123` and two or more INIs @Include this INC file, all of those INIs will have a variable called `ExampleVariable` and it will equal `123`. Though they all share this same variable, it is important to note that they aren't then connected in any way. Modifying the value of the variable in one INI has no effect on the value of that same variable in another INI.

You can however use the bangs `[!SetVariableGroup ExampleVariable "456" "DroptopSuite"][!UpdateGroup "DroptopSuite"]` to modify the same variable to the same value to multiple Droptop skins simultaneously.

#### VariablesDefault.inc

The `VariablesDefault.inc` should contain the same variables as `Variables.inc`, but with each variable's default setting. When your app is compiled, it removes the `Variables.inc` file from the install file. When your app is installed on a user's PC, the Variables.inc file is then created as a copy of the `VariablesDefault.inc` file.&#x20;

After this occurs, `VariablesDefault.inc` acts only as a backup to restore the app to its default settings should the user need to.

#### Variables.inc

The `Variables.inc` will be created automatically when the user installs your app for the first time. It is created as a copy of the `VariablesDefault.inc` file. All `[!WriteKeyValue]` bangs should be written to this file. Although both `VariablesDefault.inc` and `Variables.inc` both contain identical variables, the `Variables.inc` values will always display in your app.

Variables in this file will exist inside of your app and all of its submenus, its settings menu, and inside of the Droptop bar and `BackgroundProcesses.ini`.

Values in this file will stay the same for the user even if you release an update for your app, allowing users to keep their settings. They will not need to reconfigure their settings each time they update your app.

#### VariablesData.inc

`VariablesData.inc` is a convenient place to put any variables you want to create that are not set by the user. Using this file is convenient because unlike `Variables.inc`, the variables and values in this file will not be preserved by an update. This is a file to place any variable that the author uses for the general functionality of your app that can be subject to change as your app changes or improves. Like the other INC files, Variables placed in this file will also exist in the app, its submenus, app settings, the Droptop bar, and `BackgroundProcesses.ini`.
