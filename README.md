This is the initial configuration for working with:

- jspm with Typescript as transpiler
- Marionette


Additional info:

*installed jspm local for dev
*installed TypeScript as a transpiler
*installed http-server for dev with npm (jspm still does not support server packages to be installed):
    - Used to start a server and developing the app
*installed grunt-cli with npm for ordinary tasks

GRUNT TASKS:

- Compile typescript and watch for changes
- Copy static files (.html, .png) under project folder to deployed folder

GRUNT PLUGINS

- grunt-contrib-clean: Delete files in paths
- grunt concurrent: Used for concurrent tasks like compiling ts, copying js, or copying html to develop path
- load-grunt-task: Automatic load grunt tasks
- grunt ts: Compile typescript
- grunt-notify: Notifies when sources are compiled with changes in a modal popup
- grunt-contrib-copy: Copy html files, js files to deploy dir App/www
- grunt-contrib-watch: Watch for changes in configured files