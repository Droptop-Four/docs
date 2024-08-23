---
description: >-
  The following list of variables can be used inside any Droptop Community App
  to relay the specified information:
---

# 🔢 Variables

## <mark style="color:yellow;">#NumberOfItems#</mark>

The NumberOfItems variable will determine the how many items will be present in the menu. These can either be individual items that launch a shortcut or perform some function, or they can be folders that open a submenu containing additional options. Each menu can contain up to a maximum of 10 items.

## <mark style="color:yellow;">#ItemText1#  - #ItemText10#</mark>

The text that will appear for each item. These variables are labelled 1 through 10 in order as the items appear in the menu. (eg. To edit the text of the 5th item in the menu, edit the value for `ItemText5`)

## <mark style="color:yellow;">**#ItemIsFolderX#, #ItemIsToggleX#, #ItemIsCheckmarkX#**</mark>

Set the value of these variables to 1 to designate that item as either a folder (That opens a submenu), a toggle (That changes the value of a single key to either a 1 or 0, or a checkmark (That changes the value of a single key to one of many possible values)

## <mark style="color:yellow;">**#ItemAction1# - #ItemAction10#**</mark>

Here you enter the bangs (actions) that will take place when the item is clicked. `ItemIsFolder` must equal 0 for these actions to occur. Actions can be set to occur if `ItemIsToggle` or `ItemIsCheckmark` is used, but are not required.

## <mark style="color:yellow;">#NumberOfBoxes#</mark>

The NumberOfBoxes can be any number between 0 and 5. Boxes can be used to display additonal information, shortcuts, or separate functions from the rest of the app. Most apps will not require the use of Boxes, in which case, set the value of this variable to 0.

## <mark style="color:yellow;">#BoxHeight1# - #BoxHeight5#</mark>

Select the height in pixels for each respective box. The height of the box will automatically scale up or down depending on the size setting in Droptop.

## <mark style="color:yellow;">#DividerExists1# - #DividerExists9#</mark>

Set to 1 to enable a divider at that position - eg. DividerExists1=1 will enable a divider between item 1 and item 2. Add up to 9 dividers between up to 10 items.

## <mark style="color:yellow;">#CheckmarkKeyA#, #CheckmarkKeyB#, #CheckmarkKeyC#</mark>

Assign a key name (ie. a Variable name) to a Checkmark Key group A, B, or C. You can assign multiple items to associate with this key group. For example:\
\
`CheckmarkKeyA=MyKey`\
\
`ItemIsCheckmark1=1`\
`ItemCheckmarkGroup1=A`\
`ItemCheckmarkValue1=1`\
\
`ItemIsCheckmark2=1`\
`ItemCheckmarkGroup2=A`\
`ItemCheckmarkValue2=2`\
\
The above example assigned MyKey to Checkmark Group A. Items 1 and 2 are both designated as checkmarks (ItemIsCheckmarkX=1), and assigned to Group A (ItemCheckmarkGroupX=A). Clicking on Item 1 will assign the value of MyKey to 1 (ItemCheckmarkValue1=1) and clicking on Item 2 will assign the value of MyKey to 2 (ItemChekmarkValue2=2).\
\
A single menu can have up to 3 different checkmark groups.

## <mark style="color:yellow;">#ItemToggleKey1# - #ItemToggleKey10#</mark>

When using ItemIsToggleX=1, enter the name of the Key (ie. Variable name) of that clicking on that item will change. For example:

`ItemIsToggle1=1`\
`ItemToggleKey1=MyKey`

Clicking on Item 1 will toggle the value of MyKey between 1 and 0. This is useful for turning off a feature (0 or false) or turning on a feature (1 or true).

## <mark style="color:yellow;">#ItemIconFileName1# - #ItemIconFileName10#</mark>

Add .png icons to the `Documents\Rainmeter\Skins\App_Name-Author_Name\Icons` folder. In ItemIconFileNameX=, enter the filename of that icon you want to assign to the item. Eg. If you have a file in the Icons folder called "World.png" and you want to assign that icon to Item 5, use ItemIconFileName5=World.

## <mark style="color:yellow;">#MyAppID#</mark>

Can be used to return the folder name for your app (Eg. "`Sample_App-Cariboudjan`")\
\
You can also use `[##MyAppID#]` to return the app's current slot number (1 to 10).

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">#MyAppName#</mark>

Can be used to return the formatted name of your app (Eg. "`Sample App`")

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">#MyAppAuthor#</mark>

Can be used to return the formatted name of the author (Eg. "`Cariboudjan`")

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">#MyVariablesLoc#</mark>

Can be used to return the location of the Variables.inc file (Eg. "`C:\Users\%USERNAME%\Documents\Rainmeter\Skins\Droptop Community Apps\Apps\Sample_App-Cariboudjan\Variables\Variables.inc`")

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">#MyAppLoc#</mark>

Returns `"Droptop Community Apps\Apps\App_Name-Author_Name"`

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">**\[#CustomAppInstallDate\[##MyAppID#]]**</mark>

Returns the date the app was installed on the user's PC in `YY.MMDD` format.

{% hint style="warning" %}
This variable cannot be used in `BackgroundProcesses.inc` or `BarModifier.inc`
{% endhint %}

## <mark style="color:yellow;">#DroptopSize#</mark>

Returns the current scale multiplier of Droptop, from 0.8 (80%) to 2.5 (250%). More information on `#DroptopSize#` can be found in the "How to Scale w/ Examples" section of this tutorial.

## <mark style="color:yellow;">#DropdownMenuWidth#</mark>

Will return the current width of the app or submenu. You can also use `[#CURRENTCONFIGWIDTH]`. This variable does not need to be scaled with `#DroptopSize#`.

Add `DropdownMenuWidth=(999*#DroptopSize#)` to the `[Variables]` section of any of your menus to set any specific width. By default, your app's width is determined by the current theme the user has enabled.

## <mark style="color:yellow;">#DropdownItemHeight#</mark>

Will return the height of a single item in a dropdown or submenu. This variable does not need to be scaled with `#DroptopSize#`.

By default, your app's item height is determined by the current theme the user has enabled.

## <mark style="color:yellow;">\[#PlayerTitle\[#PlayerTypeNum]]</mark>

Returns the title of any song or media playing, if any.

## <mark style="color:yellow;">\[#PlayerArtist\[#PlayerTypeNum]]</mark>

Returns the artist of any song or media playing, if any.
