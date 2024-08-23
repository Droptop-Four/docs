# Settings Menu

## How to create a settings menu for your app

Right-click on your app and select `Options`. Here you will see your app's options. When you're ready to start adding any user-configurable options to your app, edit this settings menu in the same fashion as you would the primary app.

Generally, you should work on your settings menu last so you know exactly what you what options you want to be user-configurable (if any). But you can work on the Settings Menu at any point in your app's development.

If you do not want to include any user-configurable options in your app, set `#NumberOfItems#` to 1 and set the value of `ItemText1` to `#SettingsNoAppOptions#` (eg. `ItemText1=#SettingsNoAppOptions#`) and remove the dividers if necessary as described in the [Dividers](broken-reference) section of this tutorial.

For an explanation of what each Item variable does, please review the [variables.md](../variables.md "mention") section of this tutorial. Remember, you can also edit other Community Apps to use as reference.

## How variables are written to Variables.inc

Variables are written to `"#MyVariablesLoc#"`, which returns the path to your app's `Variables.inc` file. Go ahead and play with the toggles and checkmarks in the menu. Afterwards, open or reload your `Variables.inc` file and see how these values are changing.

Remember, all of these variables and their values exist in all other parts of your app, including in Droptop itself. Add or modify the existing variable names, values, and how those variables are used to modify the conditions of your app. You're on your way to making a settings menu!
