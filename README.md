# Extension_Cord
An easy way for users of Ungoogled Chromium to add extensions from the Google Chrome WebStore

This extension was a rework of the JS script found here:
https://github.com/Eloston/ungoogled-chromium/issues/226

Rather than F12ing and pasing the code everytime, I made a dymanic extension. 

When it detects that you've visited a Chrome WebStore extension's detail page, it will load an overlay button for installation. 
When that button is clicked, it simply runs the JS code specified in the 226 issue discussion.

This has been tested and working with Ungoogled Chromium 73.0.3683.103 on MacOS 10.14.5. 

Although it needs no user interaction (with the extension itself), Chrome code has recently made it impossible to hide extensions by default.
Once installed, right-click on the icon next to your address bar, and select 'Hide in Chromium Menu' to get it out of the way.

