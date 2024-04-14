# ✨ Start making a new app

{% hint style="info" %}
If you don't know what editor to use, take a look at the [editor.md](../tips/editor.md "mention") page.
{% endhint %}

## Create a new app

You can create 2 types of community apps:\
\
The `Droptop App` option is recommended if you intend for your app to read local files on the PC, or display any system information, like volume control or CPU usage. A `WebView App` is recommended for displaying websites.

{% tabs %}
{% tab title="Droptop App" %}
A `Droptop app` is  for creating an app using Rainmeter code, and can either be a simple button in the bar that launches a shortcut, or expands into a dropdown menu with various options when clicked.

1. Start off by going `Droptop settings >> Community apps >> Create new app`
2. A window will open. Select `Droptop App`
3. Choose a name for your app and the author's name, pressing `Enter` to confirm your entry
4. Select `Choose an icon for your app`. Select a `.png` image of your choice, preferably `32x32` pixels. This icon is what will appear in the bar. You can find icons for your app at [flaticon.com](https://flaticon.com), or you can make your own.
5. There are two options available to create your Droptop App, select an option based on the type of app you want to make:
   * `App has a dropdown menu`: clicking on the button on droptop, the app will open a dropdown menu.
   * `App is just a button`: clicking on the button no droptop, the app will perform an action.
6. Use the option `Use full color icon` if you want the icon in the bar to always be the same color as the image uploaded - Otherwise, the color of the icon will follow the user's current theme and color settings.
7. Select `Generate app` when ready.
{% endtab %}

{% tab title="WebView App" %}
A `WebView app` is for displaying a web page of your choice in a dropdown menu. This can already exists or you can create your own with some html & css!

1. Start off by going `Droptop settings >> Community apps >> Create new app`
2. A window will open. Select `Webview app`
3. Choose a name for your app and the author's name, pressing `Enter` to confirm your entry
4. Select `Choose an icon for your app`. Select a `.png` image of your choice, preferably `32x32` pixels. This icon is what will appear in the bar. You can find icons for your app at [flaticon.com](https://flaticon.com), or you can make your own.
5. Use the option `Use full color icon` if you want the icon in the bar to always be the same color as the image uploaded - Otherwise, the color of the icon will follow the user's current theme and color settings.
6. Select `Generate app` when ready.
{% endtab %}
{% endtabs %}

## Editing your new app

1. Your new app will now appear in the bar. If you selected `WebView app` or `Droptop app` with `App has a dropdown menu` enabled, clicking on the app icon will open your app.
2. Right-click twice (Double right-click) anywhere inside of your app to open a quick navigation menu. Here you can access the essential files and folders that make-up your app. Select `Edit skin (Custom app.ini)`
3. The code for your app's main dropdown menu will appear.
4. If you're making a WebView app, go to the Variables\VariablesData.inc file in your app folder to change the website(s), with WebViewURL1= being the default website.&#x20;
5. See the [Variables](variables.md) section.&#x20;

## Understanding the basics

If you haven't already, refer to the Rainmeter Documentation ([https://docs.rainmeter.net/](https://docs.rainmeter.net/)) to familiarize yourself with concepts such as Bangs, Sections, Variables, and other essential parts of how Rainmeter works.&#x20;

If another Droptop Community App has a similar feature or special function that you would like to include in your app, you can edit that app and see exactly how it was implemented. Use that knowledge to learn and assist in adding that feature to your app.
