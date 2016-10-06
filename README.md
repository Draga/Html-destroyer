# Html-destroyer, an [Epiphany Search](https://www.epiphanysearch.co.uk/) production
A Chrome plugin to test front end builds.

# Installation
Head to the [latest release](https://github.com/epiphanysearch/Html-destroyer/releases/latest) and grab the .crx file. Open chrome extensions page ( chrome://extensions/ ), drag and drop the file in the page.

# What does it do?
This tool will help us spot style that can be problematic, especially once a CMS is implemented in the build and the editors are free to change content.

![destroyh](https://cloud.githubusercontent.com/assets/1428893/18010941/bf7b024c-6baa-11e6-98ac-64dbfbcf36fc.gif)


![destroyimg](https://cloud.githubusercontent.com/assets/1428893/18010942/bf8066b0-6baa-11e6-9615-81710178e04c.gif)

# Develop
`npm start` will start typescript on watch mode.

From the Chrome exntesion page check "Developer mode" at the top and click on "Load unpacked extension...". Point to the root directory of this project and the plugin will be loaded in Chrome. Use "Reload" on the same page to refresh the extension after changes are made.
