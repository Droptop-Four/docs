# Dividers

## Removing the default divider

By default when an app is created, a divider is placed between the third and fouth item in the main dropdown menu. First change the value of `NumberOfDividers` to 0.

Navigate to the section `[Divider1]` and remove the section entirely, or comment it out using `;`

Navigate to `[4]` and `[4Icon]` and remove or comment out the `Y=` line. This will both both into their proper position below the third item.

## Moving a divider

Let's move `[Divider1]` to a new position. Let's say we want the divider to go between the first and second item.

Navigate to the section `[Divider1]`, cut the entire section and paste it between `[1]` and `[2]`.

Cut and paste the `Y=` line under `[4]` and `[4Icon]` and paste it under `[2]` and `[2Icon]` respectively.

The divider should not appear between item 1 and 2.

## Adding additional dividers

We've moved `[Divider1]` to its new position between `[1]` and `[2]`. Now let's put another divider between the fourth and fifth item.

Change the value of `NumberOfDividers` to 2.

Copy and paste the section `[Divider1]` and paste it between `[4]` and `[5]`. Rename the section to `[Divider2]`. Copy and paste the `Y=` lines under `[2]` and `[2Icon]` and paste them under `[5]` and `[5Icon]`.

You now have a second divider. One between items 1 and 2, and another between items 4 and 5.
