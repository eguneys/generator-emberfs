# generator-ember-fullstack [![Build Status](https://secure.travis-ci.org/eguneys/generator-ember-fullstack.png?branch=master)](https://travis-ci.org/eguneys/generator-ember-fullstack)

> Yeoman generator for creating MEAN stack applications, using Express, Ember, RequireJS and Gulp build tool - lets you quickly set up a project following best practices.

## Example project

https://github.com/TODO

## Getting Started

## Usage

Install `generator-ember-fullstack`:
```bash
npm install -g generator-ember-fullstack
```

Make a new directory, and `cd` into it:
```bash
mkdir my-new-project && cd $_
```

Run `yo ember-fullstack`, optionally passing an app name:
```bash
yo ember-fullstack [app-name]
```

Run `gulp` for building, `gulp devserver` for development, and `grunt build` for a preview of the built app. // TODO

## Supported Configurations

**Client**

* Scripts: `JavaScript`
* Markup: `Handlebars`
* Stylesheets: `Sass`
// TODO

**Server**

// TODO

## Injection // TODO

## Generators

Available generators:

* App
  - [ember-fullstack] (#app) (aka [ember-fullstack:app](#app))
* Server side
  // TODO
* Client Side
  - [ember-fullstack:route](#route)
  - [ember-fullstack:controller](#controller)
  - [ember-fullstack:model](#model)
  - [ember-fullstack:template](#template)
  - [ember-fullstack:component](#component)
  - [ember-fullstack:view](#view)
* Deployment
  // TODO

### App
Sets up a new EmberJS + Express app, generating all the boilerplate you need to get started.

Example:
```bash
yo ember-fullstack
```

### Route
Generated a new route.

Example:
```bash
yo ember-fullstack:route myroute
   [?] Where would you like to create this route? client/app
   [?] What will the url of your route be? /myroute
```

Produces:
   // TODO
   client/app/myroute/myroute.js

### Controller
Generates a controller.

Example:
```bash
yo ember-fullstack:controller user
   [?] Where would you like to create this controller? client/app
```

Produces:
   client/app/user/userController.js

   ...

## Bower Components

The following packages are installed by default

    * ember
    * ember-data
    * jquery
    * bootstrap
    * font-awesome
    // TODO

You can install new packages with bower, they will be available in your requirejs paths config.

## Configuration


## Testing

Running `gulp test` will run the client and server unit tests with qunit. // TODO

Use `gulp test-server` to only run server tests.

Use `gulp test-client` to only run client tests.

## Environment Variables

// TODO

## Project Structure

Overview

// TODO tree
.
|-- app                         
|   |-- client                  - Client side application assets
|   |   |-- scripts             - Client side scripts
|   |   |   |-- controllers
|   |   |   |-- mixins
|   |   |   |-- models
|   |   |   |-- routes
|   |   |   `-- views
|   |   |-- styles              - Client side styles
|   |   |   |-- layout
|   |   |   `-- pages
|   |   |-- templates           - Client side templates
|   |   |   `-- guides
|   |   `-- vendor              - Client side vendor assets
|   `-- views                   - Server side view templates
|       `-- layouts
`-- config                      - Server side configuration files

## Contribute

See the [contributing docs](https://TODO)

When submitting an issue, please follow the [guidelines](https://TODO)

When submitting a bugfix, try to write a test that exposes the bug and fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that covers the feature.

## License

MIT