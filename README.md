oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g aws-cdk-v2-typescript-migrator
$ aws-cdk-v2-typescript-migrator COMMAND
running command...
$ aws-cdk-v2-typescript-migrator (--version)
aws-cdk-v2-typescript-migrator/0.0.0 linux-x64 node-v16.13.1
$ aws-cdk-v2-typescript-migrator --help [COMMAND]
USAGE
  $ aws-cdk-v2-typescript-migrator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`aws-cdk-v2-typescript-migrator hello PERSON`](#aws-cdk-v2-typescript-migrator-hello-person)
* [`aws-cdk-v2-typescript-migrator hello world`](#aws-cdk-v2-typescript-migrator-hello-world)
* [`aws-cdk-v2-typescript-migrator help [COMMAND]`](#aws-cdk-v2-typescript-migrator-help-command)
* [`aws-cdk-v2-typescript-migrator plugins`](#aws-cdk-v2-typescript-migrator-plugins)
* [`aws-cdk-v2-typescript-migrator plugins:install PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsinstall-plugin)
* [`aws-cdk-v2-typescript-migrator plugins:inspect PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsinspect-plugin)
* [`aws-cdk-v2-typescript-migrator plugins:install PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsinstall-plugin-1)
* [`aws-cdk-v2-typescript-migrator plugins:link PLUGIN`](#aws-cdk-v2-typescript-migrator-pluginslink-plugin)
* [`aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsuninstall-plugin)
* [`aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsuninstall-plugin-1)
* [`aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`](#aws-cdk-v2-typescript-migrator-pluginsuninstall-plugin-2)
* [`aws-cdk-v2-typescript-migrator plugins update`](#aws-cdk-v2-typescript-migrator-plugins-update)

## `aws-cdk-v2-typescript-migrator hello PERSON`

Say hello

```
USAGE
  $ aws-cdk-v2-typescript-migrator hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/mainawycliffe/aws-cdk-v2-typescript-migrator/blob/v0.0.0/dist/commands/hello/index.ts)_

## `aws-cdk-v2-typescript-migrator hello world`

Say hello world

```
USAGE
  $ aws-cdk-v2-typescript-migrator hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

## `aws-cdk-v2-typescript-migrator help [COMMAND]`

Display help for aws-cdk-v2-typescript-migrator.

```
USAGE
  $ aws-cdk-v2-typescript-migrator help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for aws-cdk-v2-typescript-migrator.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `aws-cdk-v2-typescript-migrator plugins`

List installed plugins.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ aws-cdk-v2-typescript-migrator plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `aws-cdk-v2-typescript-migrator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ aws-cdk-v2-typescript-migrator plugins add

EXAMPLES
  $ aws-cdk-v2-typescript-migrator plugins:install myplugin 

  $ aws-cdk-v2-typescript-migrator plugins:install https://github.com/someuser/someplugin

  $ aws-cdk-v2-typescript-migrator plugins:install someuser/someplugin
```

## `aws-cdk-v2-typescript-migrator plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ aws-cdk-v2-typescript-migrator plugins:inspect myplugin
```

## `aws-cdk-v2-typescript-migrator plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ aws-cdk-v2-typescript-migrator plugins add

EXAMPLES
  $ aws-cdk-v2-typescript-migrator plugins:install myplugin 

  $ aws-cdk-v2-typescript-migrator plugins:install https://github.com/someuser/someplugin

  $ aws-cdk-v2-typescript-migrator plugins:install someuser/someplugin
```

## `aws-cdk-v2-typescript-migrator plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ aws-cdk-v2-typescript-migrator plugins:link myplugin
```

## `aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aws-cdk-v2-typescript-migrator plugins unlink
  $ aws-cdk-v2-typescript-migrator plugins remove
```

## `aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aws-cdk-v2-typescript-migrator plugins unlink
  $ aws-cdk-v2-typescript-migrator plugins remove
```

## `aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ aws-cdk-v2-typescript-migrator plugins unlink
  $ aws-cdk-v2-typescript-migrator plugins remove
```

## `aws-cdk-v2-typescript-migrator plugins update`

Update installed plugins.

```
USAGE
  $ aws-cdk-v2-typescript-migrator plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
