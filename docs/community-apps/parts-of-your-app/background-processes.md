# Background Processes

## How BackgroundProcesses.inc works

`BackgroundProcesses.inc` can be used to run Measures in the background even when your app isn't open. This can be used to parse data from the web or monitor system information, and pre-write that data to your app's `VariablesData.inc` file, or dynamically update your app's icon in the bar to display new information on the fly.

Any measures that are created in this file will run inside of Droptop's `BackgroundProcesses.ini`. You can view the current values of your measures by right-clicking on the Rainmeter icon in the Windows system tray >> Selecting "About" >> "Skins" tab >> Select "Droptop\Other\BackgroundProcesses" from the side panel >> Scroll down to find your measure, or typing it to find the measure automatically.

## Example 1

The below example is used with the Recycle Bin app, created by Phan. Here, the `[PhanRecycleSize]` measure updates every 30 seconds (`UpdateDivider=30`), and checks the current size of the recycle bin. Depending on its size, it uses the !SetOption bang to dynamically adjust the Recycle Bin app's icon in the Top Bar.\
\
Notice that at the end of each `!SetOption` bang we include `"Droptop\DropdownBar"` to tell the bang which config we are sending this command to. If this parameter is not included, it will assume you are referring to the same config the bang exists in (`Droptop\Other\BackgroundProcesses`).

```ini
[Rainmeter]

[Variables]

;----------------------------------------------------
; # # ADD BACKGROUND PROCESSES BELOW # # # # # # # #
; # # Measures that run even when the app isn't open
;----------------------------------------------------

[PhanRecycleSize]
Measure=RecycleManager
RecycleType=Size
Drives=ALL
IfCondition=PhanRecycleSize <= 214748364
IfTrueAction=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button0[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition2=PhanRecycleSize > 214748364
IfTrueAction2=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button1[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition3=PhanRecycleSize > 429496729
IfTrueAction3=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button2[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition4=PhanRecycleSize > 644245094
IfTrueAction4=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button3[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition5=PhanRecycleSize > 858993459
IfTrueAction5=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button4[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition6=PhanRecycleSize > 1073741824
IfTrueAction6=[!SetOption CustomApp#Recycle_Bin-Phan# ImageName "#SKINSPATH#Droptop Community Apps\Apps\Recycle_Bin-Phan\Button\#TopIconSize#\Button5[#TopIconShadows[#*TopBarFontShadow*][#*ChamLum1*][#LockTopBarShadow[#*LockTopBarShadowNum*]]].png" "Droptop\DropdownBar"]
IfCondition7=1=1
IfTrueAction7=[!UpdateMeter CustomApp#Recycle_Bin-Phan# "Droptop\DropdownBar"][!Redraw "Droptop\DropdownBar"]
DynamicVariables=1
UpdateDivider=30
```

## Example 2

The below example is used with the Media Control app, created by Yaron. Here we reference measures such as `[MeasurePlayerWebTitle]`, `[MeasureWebArtist]`, and `[MeasureRepeatWeb]`. These measures exist in Droptop's BackgroundProcesses.ini config, and can be directly referenced inside your app's BackgroundProcesses.inc file. Any measure in BackgroundProcesses.ini can be directly referenced in the .inc file.\
\
Here we have measures that monitor the current value of the Song Title, Artist Name, and the status of the Repeat function in the currently-playing music or video. When these values change, it triggers the `OnChangeAction` in \[MediaControlCheckChange] measure, which changes the text of the Media Control app in the Top Bar to display the current Song and Artist information.&#x20;

```ini
[Rainmeter]

;----------------------------------------------------
; # # ADD BACKGROUND PROCESSES BELOW # # # # # # # #
; # # Measures that run even when the app isn't open
;----------------------------------------------------

;----------------------------------------------------------------------
; Example # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
; Updates the top bar when CPU temperature changes
; 
; UpdateDivider=10 rechecks the temperature every 10 seconds
; Recommended this number be no lower than 10 to prevent high CPU usage
;----------------------------------------------------------------------

[MediaControlCheckChange]
Measure=String
String=[MeasurePlayerWebTitle] - [&MeasureWebArtist]
OnChangeAction=[!SetOption CustomApp#Media_Control-Yaron# Text "  [MediaControlCheckChange]  " "Droptop\DropdownBar"][!SetVariable PlayerTitle1 "[&MeasurePlayerWebTitle]" "Droptop Community Apps\Apps\Media_Control-Yaron"][!SetVariable PlayerArtist1 "[&MeasureWebArtist]" "Droptop Community Apps\Apps\Media_Control-Yaron"][!UpdateMeter CustomApp#Media_Control-Yaron# "Droptop\DropdownBar"][!UpdateMeterGroup SysTray "Droptop\DropdownBar"][!UpdateMeterGroup HL "Droptop\DropdownBar"][!UpdateMeterGroup NotificationBar "Droptop\DropdownBar"][!Redraw "Droptop\DropdownBar"][!UpdateMeasure MeasureSongArtistName "Droptop Community Apps\Apps\Media_Control-Yaron"][!UpdateMeterGroup SongText "Droptop Community Apps\Apps\Media_Control-Yaron"][!Redraw "Droptop Community Apps\Apps\Media_Control-Yaron"]
RegExpSubstitute=1
Substitute="^ - $":"    ...    ","^(.{40})(.{0,})":"\1..."
DynamicVariables=1

[MediaControlCheckRepeat]
Measure=String
String=[MeasureRepeatWeb]
DynamicVariables=1
```
