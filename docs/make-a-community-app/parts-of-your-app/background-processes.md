# Background Processes

## How BackgroundProcesses.inc works

`BackgroundProcesses.inc` can be used to run Measures in the background even when your app isn't open. This can be used to parse data from the web or monitor system information, and pre-write that data to your app's `VariablesData.inc` file, or dynamically update your app's icon in the bar to display new information on the fly.

Any measures that are created in this file will run inside of Droptop's `BackgroundProcesses.ini`.
