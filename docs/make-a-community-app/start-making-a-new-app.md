# ✨ Start making a new app

## Install Notepad++

It's recommended you install an application such as Notepad++ for creating your skin. You can download Notepad++ from its official website here: [https://notepad-plus-plus.org/downloads/](https://notepad-plus-plus.org/downloads/). Set Notepad++ as your official editor for Rainmeter by following these steps:&#x20;

1. In the system tray, right-click on the Rainmeter icon
2. Select `Manage`
3. Go to the `Settings` tab
4. Next to `Editor`, select the `...` button (Image 1)
5. Navigating to the Notepad++ executable in `C:\Program Files\Notepad++\notepad++.exe`
6. It's also recommended you install the addon for Notepad++ called RainLexer. [https://poiru.github.io/rainlexer/](https://poiru.github.io/rainlexer/)
7. Restart Notepad++ and in the Notepad++ menu bar, go to `Language` and select `Rainmeter`(Image 2)

<figure><img src="../.gitbook/assets/Annotation 2023-04-24 074059 (1).png" alt=""><figcaption><p>Image 1</p></figcaption></figure>

<figure><img src="../.gitbook/assets/Annotation 2023-04-24 074130.png" alt=""><figcaption><p>Image 2</p></figcaption></figure>

## Create a new app

1. Start off by going `Droptop settings >> Community apps >> Create new app`
2. Choose a name for your app and the author's name, pressing `Enter` to confirm your entry
3. Select `Choose an icon for your app`. Select a .png image of your choice, preferably 32x32 pixels. This icon is what will appear in the bar
4. Select `Generate app`

## Duplicate an existing app (Optional)

If you want to make your own app, but base it off the work someone else has already done, follow these steps:

1. Download & install that app on your PC
2. Navigate to `C:\Users\%USERNAME%\Documents\Rainmeter\Skins\Droptop Community Apps\Apps\`
3. Copy & paste the app you want to duplicate so there are two folders for that app
4. Rename the copy to the name of your new app in this format: `App_Name-Your_Name`
5. Go to `App_Name-Your_Name\Variables\` and in Variables.inc and VariablesDefault.inc, change the value of `MyAppID`, `MyAppName`, `MyAppAuthor`, and `MyVariablesLoc` to replace any references to the old app name with the new app name. Save the file.
6. Refresh Rainmeter
7. Navigate to `Droptop settings >> Community apps`
8. Select your app in one of the five available Community App slots
9. Your app will now be editable in Droptop and will appear in the bar

## Editing your new app

1. Your new app will now appear in the bar. Click on the icon and your app will appear. If you created an app from scratch, this will contain some sample text and icons.
2. Right-click twice (Double right-click) anywhere inside of your app to open a quick navigation box. Here you can access the essential files and folders that make-up your app. Select `Edit skin (Custom app.ini)`
3. The code for your app's main dropdown menu will appear.

## Understanding the basics

If you haven't already, refer to the Rainmeter Documentation ([https://docs.rainmeter.net/](https://docs.rainmeter.net/)) to familiarize yourself with concepts such as Bangs, Sections, Variables, and other essential parts of how Rainmeter works.&#x20;

If another Droptop Community App has a similar feature or special function that you would like to include in your app, you can edit that app and see exactly how it was implemented. Use that knowledge to learn and assist in adding that feature to your app.
