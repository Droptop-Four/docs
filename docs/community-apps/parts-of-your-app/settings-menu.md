# Settings Menu

## How to create a settings menu for your app

Right-click on your app and select `Options`. Here you will see your app's options. When you're ready to start adding any user-configurable options to your app, edit this settings menu in the same fashion as you would the primary app.

Generally, you should work on your settings menu last so you know exactly what you what options you want to be user-configurable (if any). But you can work on the Settings Menu at any point in your app's development.

If you do not want to include any user-configurable options in your app, set `#NumberOfItems#` to 1 and set the value of `ItemText1` to `#SettingsNoAppOptions#` (eg. `ItemText1=#SettingsNoAppOptions#`) and remove the dividers if necessary as described in the [Dividers](dividers.md) section of this tutorial.

## Settings Menu Toggles

By default, the third item in your Settings Menu is a toggle. A toggle allows you to switch between two values, usually 1 and 0. The 1 and 0 can be used to toggle Meters or Measures.

For example:

{% code overflow="wrap" lineNumbers="true" %}
```ini
[MouseX] 
Measure=Plugin 
Plugin=MouseXY 
Dimension=X 
MaxValue=#SCREENAREAWIDTH# 
DynamicVariables=1 
UpdateDivider=-1 
Group=MouseXY
Disabled=(#CustomSetting3#=1?1:0)
```
{% endcode %}

The parameter `Disabled=` contains a condition. Does the value equal 1? If so, set the value of `Disabled=` to 1 (Disabled). If not, set the value to 0 (Not disabled).

Navigate to `[3Icon]` and notice two lines: ImageAlpha and ImageFlip

`ImageAlpha=(#CustomSetting3#<>1?(#DropdownItemOpacity#/3):#DropdownItemOpacity#)` \
`ImageFlip=[#IconFlip0[#CustomSetting3]]`

See `#CustomSetting3#?` That's the same variable we were playing with. Here we have a condition that determines the Alpha (Or opacity) of the toggle icon. If the value does not equal 1, make its Alpha transparent. If it does equal 1, make the Alpha solid.

For `ImageFlip`, the current value of `#CustomSettings3#` determines the flip of the icon. Generally, solid would be in the ON position, and transparent would be in the OFF position - If you find that this is not the case in your app, just change IconFlip0 to IconFlip1, or vice-versa.

## Settings Menu Checkmarks

Checkmarks allow you to set the value of a variable with more than 2 options. When any checkmark is clicked, it is set to that static value and doesn't toggle on or off. Take a look at the code and you'll see what I mean.

`[Icon6]` through `[Icon10]` represent each checkmark icon. Here we have just a single ImageAlpha parameter. \
\
`ImageAlpha=(#CustomCheckmark#<>1?(#DropdownItemOpacity#/3):#DropdownItemOpacity#)`\
\
Here, if `#CustomCheckmark#` does not equal 1, Alpha is transparent. If it does equal 1, Alpha is solid.

## How variables are written to Variables.inc

Variables are written to `"#MyVariablesLoc#"`, which returns the path to your app's `Variables.inc` file. Go ahead and play with the toggles and checkmarks in the menu. Afterwards, open or reload your `Variables.inc` file and see how these values are changing.

Remember, all of these variables and their values exist in all other parts of your app, including in Droptop itself. Add or modify the existing variable names, values, and how those variables are used to modify the conditions of your app. You're on your way to making a settings menu!
