# Frequently Asked Questions

## I paid for the Supporter Version, but lost it.

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Need to restore Supporter Version purchase.</mark>

Solution: Try...

* &#x20;<mark style="color:green;background-color:green;">Check your email for the download link</mark>&#x20;
  1. Go to your email provider (Gmail, Outlook, etc.)
  2. Search your inbox for "Droptop" or "Gumroad", and see if you have a download link
  3. Note: Droptop's core (basic version) needs to be installed prior to applying the "Supporter Version" upgrade

## I can't install the update

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Receiving an error when installing the update</mark>

Solution: Try...

1. Log off of your Windows account and log back in
2. Re-run the install file

## I want to change the name of an application in the bar

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">An application I'm using isn't the name I want displayed on the bar</mark>

Solution:

* &#x20;<mark style="color:green;background-color:green;">Create your own substitution</mark>&#x20;
  1. To add your own substitution, with the app selected, click on the application's name in the Droptop bar
  2. In the dropdown menu, select "More options", then "Change app name".
  3. The file UserSettings.inc will open. In this file, find the variable `UserAppSubstitutions=`
  4. Select the end of this line. A template for a new app substitution has been added to your clipboard. Select the end of this line and paste (Ctrl + V)
     * The end of the line would look like, for example: `,"Discord":"NEW-APP-NAME"`
  5. Replace `NEW-APP-NAME` with your application's new name.
     * **Tip:** If the first character of the application's name is a lowercase letter (eg. iTunes), use a non-space character as the first letter in your substitution. For example: `,"iTunes","[\x200B]iTunes"`
     * Tip: If the substitution doesn't work, try adding `(?is)` to the beginning of your app name to make the line case-insensitive. For example: `,"(?is)Explorer":"Finder"`
     * Note: Must be exact words and is case-sensitive.
     * Substitutions use RegEx.

## Droptop is running slowly

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Droptop is slow</mark>

Solution: Try...

* &#x20;<mark style="color:green;background-color:green;">Enable Hardware Acceleration</mark>&#x20;
  1. Right-click on the Rainmeter icon in the Windows system tray (it's rain drop shaped)
  2. Select "Manage"
  3. Select the Settings tab
  4. Check box "Use hardware acceleration (Requires restart)"
  5. Right click on an empty portion of the Droptop bar. Select More options >> Restart Rainmeter.
  6. Note: Some PCs may have issues with hardware acceleration turned on, including slower performance and graphical glitches. If these occur, disable hardware acceleration.
* &#x20;<mark style="color:green;background-color:green;">Disable "Use heavy blur"</mark>&#x20;
  1. Go to Droptop settings >> Options >> Blur effects
  2. Disable "Use heavy blur effect">
  3. Note: This setting is theme-specific. You may need to re-disable this setting if you switch to another theme.

## How do I optimize Droptop for good battery life?

Although Droptop uses very few resources when sitting idle in the background, you may want to optimize Droptop for extended laptop battery life. Here are some solutions:

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">I need to maximize my battery life</mark>

Solution: Try...

* &#x20;<mark style="color:green;background-color:green;">Disable unused system tray apps</mark>&#x20;
  1. Right-click on a system tray app in the top-right corner
  2. De-select any apps you don't frequently use. Apps can be re-enabled later at any time.
* &#x20;<mark style="color:green;background-color:green;">Enable "Game mode"</mark>&#x20;
  1. When not using Droptop for an extended period of time, you can go to the Windows system tray, right-click on the Rainmeter icon (the rain drop icon), and select "Game mode". Droptop will deactivate completely
  2. To reactivate Droptop, de-select the "Game mode" option.

## My Music & videos aren't showing up in the Volume app or on the top bar

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">Not displaying song title & artist in the Volume app</mark>

Solution: Try...

* &#x20;<mark style="color:green;background-color:green;">Restart Rainmeter or Restart your PC</mark> \


{% hint style="info" %}
If you are on Windows 11 and you have a non-English date format the plugin might not work. Try changing your date format for the operating system to English.\
\
**Example:** Someone reported that with Turkish date format the plugin wasn't working, but after changing the date format to English (USA) or English (UK) the issue was fixed.
{% endhint %}

## My weather, browser media, or email aren't updating

<mark style="color:yellow;">**Problem:**</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">The webparser isn't retrieving data</mark>

Solution: Try...

* &#x20;<mark style="color:green;background-color:green;">Exit and re-open Rainmeter</mark>&#x20;
  1. Right click on an empty portion of the Droptop bar. Select More options >> Restart Rainmeter.

You can also try: Check your internet connection or restart your PC, and make sure your Gmail username/password is correct in the Mail app.\




1. Check your internet connection or restart your P
