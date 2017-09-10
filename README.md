# Example gulp file for Magento 2
Install Gulp with the following command globally:

    npm install --global gulp-cli

Next, install Gulp with dependencies in your Magento 2 project:

    cd /path/to/magento2
    npm install gulp gulp-less gulp-csso gulp-watch -D

Prepare the Magento LESS files:

    bin/magento dev:source-theme:deploy

Copy the `gulpfile.js` to your project and modify the theme folder.
You're done.

    gulp
    gulp less
    gulp watch
