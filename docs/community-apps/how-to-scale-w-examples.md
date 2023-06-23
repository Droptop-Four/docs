# ↕ How to Scale w/ Examples

## How to scale your app with the Size setting

Droptop can scale anywhere between 80% to 300% of its original size. In order for your app's meters to be position on their X/Y axis and to be the correct Width/Height regardless of the scale Droptop is set to, you will need to include the `#DroptopSize#` variable in all X/Y and W/H parameters for each meter you create, as well as anything that has to do with a Meter's size, such as a string's `FontSize` parameter, padding, etc.

Included meters, such as the dropdown menu, items, and default text and shapes all automatically scale with Droptop - Only meters you create will need to include the `#DroptopSize#` variable.

## Using the `#DroptopSize#` variable, Examples

The value of `DroptopSize` is equal to 1.0 at 100%, 0.8 at 80%, 1.5 at 150%, and 3.0 at 300%. If you are creating an app for the first time, it's recommended that you build your app with Droptop set to 100% scale - This way you can add the `#DroptopSize#` variable to your Meters later on in the development process.

## Example 1

### Example 1A - Without scaling

{% code overflow="wrap" lineNumbers="true" %}
```ini
[StringMeter]
Meter=String
FontSize=12
X=8
Y=15
W=#DropdownMenuWidth#
H=#DropdownItemHeight#
Padding=5,0,5,0
```
{% endcode %}

### Example 1B - With scaling

{% code overflow="wrap" lineNumbers="true" %}
```ini
[StringMeter]
Meter=String
FontSize=(12*#DroptopSize#)
X=(8*#DroptopSize#)
Y=(15*#DroptopSize#)
W=#DropdownMenuWidth#
H=#DropdownItemHeight#
Padding=(5*#DroptopSize#),0,(5*#DroptopSize#),0
```
{% endcode %}

### Let's review

In the above example, we multiplied `FontSize`, `X`, `Y`, and `Padding` by `#DroptopSize#`. We did not multiply `#DropdownMenuWidth#` or `#DropdownItemHeight#` because these variables already scale automatically with Droptop. In padding, we only multiplied the sections of padding containing a value - We do not need to scale a value if it equals 0.

Let's try another example...

## Example 2

### Example 2A - Without scaling

{% code overflow="wrap" lineNumbers="true" %}
```ini
[ImageMeter]
Meter=Image
ImageName=#SKINSPATH#Droptop Community Apps\Apps\#MyAppID#\Images\MyImage.png
X=[StringMeter:X]
Y=([StringMeter:YH]+5)
W=100
H=100
```
{% endcode %}

### Example 2B - With scaling

{% code overflow="wrap" lineNumbers="true" %}
```ini
[ImageMeter]
Meter=Image
ImageName=#SKINSPATH#Droptop Community Apps\Apps\#MyAppID#\Images\MyImage.png
X=[StringMeter:X]
Y=([StringMeter:YH]+(5*#DroptopSize#))
W=(100*#DroptopSize#)
H=(100*#DroptopSize#)
```
{% endcode %}

### Let's review

In the above example, we set the X position to match the X position of `StringMeter` and the Y position to match the Y plus its Height of `StringMeter` - These do not need to be scaled as the `X`, `Y`, and `H` of `StringMeter` are already scaled. But the 5 in the `Y` parameter does need to be scaled. We also scaled the Meter's Width and Height.
