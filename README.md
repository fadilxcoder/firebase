# NOTES

- Create new app on https://console.firebase.google.com
- - See **IOS**, **Android**, **Web**. GOTO *Web* & add hosting
- - Create **Real Time Database** in **test mode** for development
- `npm i -g firebase-tools` : update firebase node package
- APP URL : https://gfx-project-single-form-54856.web.app/
- In app folder : ` php -S 127.0.0.1:7591 -t public/`
- Deploy on firebase
- - `firebase init`
- - - `Are you ready to proceed? (Y/n) y`
- - - `Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys`
- - - `Don't set up a default project`
- - - `What do you want to use as your public directory? (public) ENTER`
- - - `Configure as a single-page app (rewrite all urls to /index.html)? (y/N) y`
- - - `Set up automatic builds and deploys with GitHub? n`
- - - ` File public/index.html already exists. Overwrite? (y/N) n`
- - `firebase projects:list` - List of projects
- - Delete project: `firebase hosting:disable --project <your_project_id>` -> Delete from **release history**
- - Deploy app `firebase deploy --project <your_project_id>`

## Help manual

```
$ firebase
Usage: firebase [options] [command]

Options:
  -V, --version                                             output the version number
  -P, --project <alias_or_project_id>                       the Firebase project to use for this command
  --account <email>                                         the Google account to use for authorization
  -j, --json                                                output JSON instead of text, also triggers non-interactive mode
  --token <token>                                           supply an auth token for this command
  --non-interactive                                         error out of the command instead of waiting for prompts
  -i, --interactive                                         force prompts to be displayed
  --debug                                                   print verbose debug output and keep a debug log file
  -c, --config <path>                                       path to the firebase.json file to use for configuration
  -h, --help                                                output usage information

Commands:
  appdistribution:distribute [options] <distribution-file>  upload a distribution
  apps:create [options] [platform] [displayName]            create a new Firebase app. [platform] can be IOS, ANDROID or WEB (case insensitive).
  apps:list [platform]                                      list the registered apps of a Firebase project. Optionally filter apps by [platform]:
                                                            IOS, ANDROID or WEB (case insensitive)
  apps:sdkconfig [options] [platform] [appId]               print the Google Services config of a Firebase app. [platform] can be IOS, ANDROID or WEB
                                                            (case insensitive)
  apps:android:sha:list <appId>                             list the SHA certificate hashes for a given app id.
  apps:android:sha:create <appId> <shaHash>                 add a SHA certificate hash for a given app id.
  apps:android:sha:delete <appId> <shaId>                   delete a SHA certificate hash for a given app id.
  auth:export [options] [dataFile]                          Export accounts from your Firebase project into a data file
  auth:import [options] [dataFile]                          import users into your Firebase project from a data file(.csv or .json)
  database:get [options] <path>                             fetch and print JSON data at the specified path
  database:instances:create [options] <instanceName>        create a realtime database instance
  database:instances:list                                   list realtime database instances, optionally filtered by a specified location
  database:profile [options]                                profile the Realtime Database and generate a usage report
  database:push [options] <path> [infile]                   add a new JSON object to a list of data in your Firebase
  database:remove [options] <path>                          remove data from your Firebase at the specified path
  database:set [options] <path> [infile]                    store JSON data at the specified path via STDIN, arg, or file
  database:settings:get [options] <path>                    read the realtime database setting at path
  database:settings:set [options] <path> <value>            set the realtime database setting at path.
  database:update [options] <path> [infile]                 update some of the keys for the defined path in your Firebase
  deploy [options]                                          deploy code and assets to your Firebase project
  emulators:exec [options] <script>                         start the local Firebase emulators, run a test script, then shut down the emulators
  emulators:export [options] <path>                         export data from running emulators
  emulators:start [options]                                 start the local Firebase emulators
  experimental:functions:shell [options]                    launch full Node shell with emulated functions. (Alias for `firebase functions:shell.)
  ext                                                       display information on how to use ext commands and extensions installed to your project
  ext:configure [options] <extensionInstanceId>             configure an existing extension instance
  ext:info [options] <extensionName>                        display information about an extension by name (extensionName@x.y.z for a specific
                                                            version)
  ext:install [options] [extensionName]                     install an official extension if [extensionName] or [extensionName@version] is provided;
                                                            or run with `-i` to see all available extensions.
  ext:list                                                  list all the extensions that are installed in your Firebase project
  ext:uninstall [options] <extensionInstanceId>             uninstall an extension that is installed in your Firebase project by instance ID
  ext:update <extensionInstanceId> [updateSource]           update an existing extension instance to the latest version
  firestore:delete [options] [path]                         Delete data from Cloud Firestore.
  firestore:indexes [options]                               List indexes in your project's Cloud Firestore database.
  functions:config:clone [options]                          clone environment config from another project
  functions:config:get [path]                               fetch environment config stored at the given path
  functions:config:set [values...]                          set environment config with key=value syntax
  functions:config:unset [keys...]                          unset environment config at the specified path(s)
  functions:delete [options] [filters...]                   delete one or more Cloud Functions by name or group name.
  functions:log [options]                                   read logs from deployed functions
  functions:shell [options]                                 launch full Node shell with emulated functions
  help [command]                                            display help information
  hosting:channel:create [options] [channelId]              create a Firebase Hosting channel
  hosting:channel:delete [options] <channelId>              delete a Firebase Hosting channel
  hosting:channel:deploy [options] [channelId]              deploy to a specific Firebase Hosting channel
  hosting:channel:list [options]                            list all Firebase Hosting channels for your project
  hosting:channel:open [options] [channelId]                opens the URL for a Firebase Hosting channel
  hosting:clone <source> <targetChannel>                    clone a version from one site to another
  hosting:disable [options]                                 stop serving web traffic to your Firebase Hosting site
  hosting:sites:create [options] [siteId]                   create a Firebase Hosting site
  hosting:sites:delete [options] <siteId>                   delete a Firebase Hosting site
  hosting:sites:get <siteId>                                print info about a Firebase Hosting site
  hosting:sites:list                                        list Firebase Hosting sites
  init [feature]                                            set up a Firebase project in the current directory
  login [options]                                           log the CLI into Firebase
  login:add [options] [email]                               authorize the CLI for an additional account
  login:ci [options]                                        generate an access token for use in non-interactive environments
  login:list                                                list authorized CLI accounts
  login:use <email>                                         set the default account to use for this project directory
  logout [email]                                            log the CLI out of Firebase
  open [link]                                               quickly open a browser to relevant project resources
  projects:addfirebase [projectId]                          add Firebase resources to a Google Cloud Platform project
  projects:create [options] [projectId]                     creates a new Google Cloud Platform project, then adds Firebase resources to the project
  projects:list                                             list all Firebase projects you have access to
  remoteconfig:get [options]                                get a Firebase project's Remote Config template
  remoteconfig:rollback [options]                           roll back a project's published Remote Config template to the one specified by the
                                                            provided version number
  remoteconfig:versions:list [options]                      get a list of Remote Config template versions that have been published for a Firebase
                                                            project
  serve [options]                                           start a local server for your static assets
  setup:emulators:database                                  downloads the database emulator
  setup:emulators:firestore                                 downloads the firestore emulator
  setup:emulators:pubsub                                    downloads the pubsub emulator
  setup:emulators:storage                                   downloads the storage emulator
  setup:emulators:ui                                        downloads the ui emulator
  target [type]                                             display configured deploy targets for the current project
  target:apply <type> <name> <resources...>                 apply a deploy target to a resource
  target:clear <type> <target>                              clear all resources from a named resource target
  target:remove <type> <resource>                           remove a resource target
  use [options] [alias_or_project_id]                       set an active Firebase project for your working directory
```                                                            