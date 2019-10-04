/**
 * This script is run whenever the devtools are open. (F12)
 * In here, we can create our panel with the React app inside.
 */

browser.devtools.panels.create(
    "Foobar",
    "/logo192.png",
    "/index.html"
);