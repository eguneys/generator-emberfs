# generator-emberfs
  [![Build Status](https://travis-ci.org/eguneys/generator-emberfs.svg?branch=master)](https://travis-ci.org/eguneys/generator-emberfs)

> Yeoman generator for creating MEAN stack applications, using
  Express, Ember, RequireJS and Gulp build tool - lets you quickly set
  up a project following best practices.

## Example project

The project template is available at
[gulp-ember-requirejs](https://github.com/eguneys/gulp-ember-requirejs).

## Getting Started

## Usage

Install `generator-emberfs`:
```bash
npm install -g generator-emberfs
```

Make a new directory, and `cd` into it:
```bash
mkdir my-new-project && cd $_
```

Run `yo emberfs`, optionally passing an app name:
```bash
yo emberfs [app-name]
```

Run `gulp` for building, `gulp devserver` for development, and `gulp
build` for a preview of the built app. For more commands see project
template [gulp-ember-requirejs](https://github.com/eguneys/gulp-ember-requirejs).

## Supported Configurations

**Client**

* Scripts: `JavaScript`
* Markup: `Handlebars`
* Stylesheets: `Sass`
* Modules: `RequireJS`
* MVC: `EmberJS`

**Server**

* Framework: `Express`
* View Engine: `Handlebars`

## Generators

Available generators:

* App

    - [emberfs](#app) (aka [emberfs:app](#app))
  
* Server side

Currently there are no server side generators.

* Client Side

    - [emberfs:route](#route)
    - [emberfs:controller](#controller)
    - [emberfs:model](#model)
    - [emberfs:template](#template)
    - [emberfs:component](#component)
    - [emberfs:view](#view)
  
* Deployment

Currently there are no deployment generators.

### App

Sets up a new EmberJS + Express app, generating all the boilerplate
you need to get started.

```bash
$ yo emberfs
```

### Route

Generates a new route.

```bash
$ yo emberfs:route myroute
   create app/client/scripts/routes/myroute_route.js
   create app/client/templates/myroute.hbs
```

By default it will inject the route to `router.js` file, visit:

`http://localhost:3000/myroute` to see the new route.

####Options

* `--skip-inject` will skip the route injection.

* `--lazy-load` this will scaffold a lazy route, that is, it's
dependencies will be loaded only when the route is visited. For more
information see:
[gulp-ember-requirejs](https://github.com/eguneys/gulp-ember-requirejs).

### Controller

Generates a controller.

```bash
$ yo emberfs:controller user
   create app/client/scripts/controllers/user_controller.js
   create tests/unit/controllers/user-test.js
```

### Model

Generates a model.

`yo emberfs:model modelName field[:type] field[:type]`

```bash
$ yo emberfs:model user
   create app/client/scripts/models/user_model.js
   create tests/unit/models/user-test.js
```
## Configuration

This generator is scaffolding support for gulp-ember-requirejs
project. For more information about how to use the project see
[gulp-ember-requirejs](https://github.com/eguneys/gulp-ember-requirejs).

## Contribute

When submitting a bugfix, try to write a test that exposes the bug and
fails before applying your fix. Submit the test alongside the fix.

When submitting a new feature, add tests that covers the feature.

### Notes

* in `generator-emberfs` directory, run `npm link` to use what's in the local repo for `yo emberfs`.
* When running tests, run `npm install` and `bower install` inside
`test/fixtures` folder.

## License

MIT
