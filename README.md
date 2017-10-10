This project is a fork of Chris Price's [react-app-webdriver](https://github.com/chrisprice/react-app-webdriver "Github link") project and aims to utilise the fundamentals to provide a bootstrap for testers to set up UI automation.

You can read up the on the fundamentals there, then come back here for more.

# Contents

* [Running Specs](#running-specs)
* [Project Structure](#project-structure)
* [Upgrading the Bootstrap](#upgrading-the-bootstrap)
* [Adding to an Existing Project](#adding-to-an-existing-project)

# Disclaimer

This project should be for everyone! (okay, maybe not for everyone, but this is hopefully a good starting point for most that will help to set up a project structure with examples on how to go about amending this to your own needs)

# Running Specs

You should be familiar with the basics starting from a terminal -

```bash
$ yarn install
$ yarn run e2e-update
$ yarn run e2e-start
```
You should now have a local selenium server running.

For now, if  you want to continue and get the specs running, leave it as is, start a new terminal and kick off Jest to run the specs. Here's a reminder of options - 

## Running the basics

```bash
$ yarn run e2e
```
## Automatically running the tests on code changes

```bash
$ yarn run e2e -- --watch
```

## Using environment specific values

```bash
$ yarn run e2e -- --globals "{\"baseUrl\": \"https://example.com\"}
```
You should see some stuff executing. Chrome opening and, all being well, a number of passes in the console.

# Project Structure

Typically, a project will need a few relevant groupings of files. Here, we've used the following as a starting point for a top level structure - 

```Project Structure
  e2e
  --data
  --helpers
  --pageObjects
  --specs
```

## Data
Here's where your static data goes. You can use this for login details, checkable text such as error messages, maybe some enumerated lists with transforms to make your specs more readable. And, any input data that you may reuse throughout your specs.

## Helpers
Here's where your helpers go. These are the bits of reusable code that'll keep your specs tidy and readable. 

## Page Objects
Some like to create page objects full of functional code. I prefer to keep these simple. This is one place where you want to be concise. 

## Specs
Specs should be executable by themselves, not reliant on any other spec. That being said, particularly for end to end, you may want to group these for brevity. 

# Upgrading the Bootstrap

This is a bootstrap. You're going to want to change things around. Here's some options.

## Configure globals

You can configure the default values for these globals and other Jest settings in `package.json`.

As this is meant as a starter for your own project, amend the `__baseUrl__` in the globals object to point to your own hosted environment. 

```package.json
    "jest"{
      "globals": {
        "__baseUrl__": "https://demcnamee.github.io/ui-automation-bootstrap/"
      }
    }
```

## One stop execution

I don't like having a separate terminal window open with the selenium server running. I tend to forget it's there. Whilst it's useful when developing, as a tester, I'm not changing dev code, but writing checks. We may also want it running on a CI server, so starting a selenium server instance as part of the execution is probably needed.

So here's what you need to do - 

In the package.json add the following into the scripts section:

```package.json
    "e2e-all" "run-p -r e2e-start e2e"
```

Make sure you terminate any terminals running webdriver-manager, then

```bash
  yarn run e2e-all  
```

This utilises the npm-run-all package to run both 'e2e-start' and 'e2e' in parallel. This also leaves the option for developers to use a different terminal for webdriver-manager.

## Adding in new packages

## Adding to an Existing Project

To convert an existing project to use these features -

* Copy the `e2e` folder into the root of the project
```bash
$ cp -r react-app-webdriver/e2e <react-app>
```
* Install the additional dev dependencies -
```bash
$ yarn add --dev @types/jest jest selenium-webdriver webdriver-manager
```
* Add the following to the `scripts` section in the project's `package.json` -
```js
{
  // ...
  "scripts: {
    // ...
    "e2e": "jest -c e2e/jestConfig.json",
    "e2e-update": "webdriver-manager update --out_dir ../../e2e/selenium",
    "e2e-start": "webdriver-manager start --out_dir ../../e2e/selenium"
  }
}
```
