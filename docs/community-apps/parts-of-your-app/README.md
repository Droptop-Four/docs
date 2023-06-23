# ⭐ Parts of your app

There are a few key components of any app

## The main config

The main portion of your app is the first dropdown to appear when your app is clicked on. `CustomApp.ini` and `MainConfig.inc` handle this portion of the app.

In the main section of your app's folder you will also find the Icons folder. Inside you will find `1Icon.png` to `10Icon.png` representing items 1 through 10 in `CustomApp.ini` respectively. You can edit these files with a program such as GIMP to create your own icons, or use existing icons from the web.

**Note:** All icons should be white (255,255,255 or FFFFFF) in color and be 32x32 sized .png images.

## Submenus

Inside your app's folder is a folder aptly titled "`Folder`". Inside you will have `Folder1.ini` to `Folder10.ini`. `Folder1.ini` will be accessible when `ItemIsFolder1` in `CustomApp.ini` is equal to 1. `Folder2.ini` will be accessible when `ItemIsFolder2` in `CustomApp.ini` is equal to 1. etc.

Each submenu contains its own `#NumberOfItems#` and `#NumberOfDividers#` variables, similar to `CustomApp.ini`. Submenu items cannot be folders, only clickable items that perform some action, or display some information.

All 10 submenus share any meters or measures that are contained within `FolderConfig.inc`.

Icons for each submenu are located in the `Folder\Icons\` folder, with each numbered folder representing each `Folder1.ini` to `Folder10.ini` submenu respectively. Inside each Icons folder are `1Icon.png` to `10Icon.png`, representing the icon for each item in that specific submenu.

**Note:** All icons should be white (255,255,255 or FFFFFF) in color and be 32x32 sized .png images.

## Variables

For more information about Variables, see the **Variables Files** section of this tutorial.

## Background Processes

For more information about Variables, see the **Background Processes** section of this tutorial.

## Settings menu

For more information about Variables, see the **Settings Menu** section of this tutorial.

## Other parts

For more information about Variables, see the **Other Parts** section of this tutorial.
