jsStartupKit:
=============

Editor:
-------
vsCode
.editorconfig and put it in root of your project

package manager:
----------------
npm

development web server:
-----------------------
webpack and express

automation / build process:
---------------------------
grunt, gulp and npm sripts
npm scripts is the best choice:
no extra layer of plugins like gulp and grunt
no need for seperate plugins
simpler debugging
just use the tools directly

Transpiling:
------------
Babel, TypeScript and Elm
Babel: plain javascript so compatability with other js based frameworks is very high

Bundlers:
---------
Browseify
webpack
rollup
jspm

Linter:
-------
jsline,
jshint,
eslint this one we are using
eslint watch npm package

automated unit testing:
-----------------------

AUT: testing framework:
-----------------------
Mocha, jasmine, tape, qunit, AVA, jest(a nice wrapper over jasmine)

AUT: Assertion library:
-----------------------
chai,

AUT:Helperlibrary:
------------------
jsDom:runs test without a browser
chereio

AUT:Where to run our tests:
-----------------------------
browser,
HeadlessBrowser - phantomJS
or in memory DOM like JSDPM
both above options are good to go

AUT:Where to put my test files:
-------------------------------
centralized: all tests in one folder called tests
Alongside: with the actual source code, this is what we will b following

AUT: when shall we run our tests:
---------------------------------
Unit tests: should run as soon as you save, increases test visibility
automatic = low friction

Continous Integration Server:
-----------------------------
Travis and Appveyor

Http calls and mocking the Http calls:
--------------------------------------
In node: http, request (use this if you are only working on node)
In Browser: XmlHttpRequest, JQuery, Framework based - like angular has got its service, Fetch (use this if you are only working with browser)
Node & Browser: isomorphic-fetch : works on both node and browser,xhr, super agent, Axios (any of these listed technologies can be used)

*Centralized API calls:
configure all calls in a single spot
Handler preloader logic again in one place
Handle errors
Single seam for mocking

git Commands:
-------------
stage all changes: git add .
commit all changes to local branch: git commit -m "comments"
push all changes from local branch to server: git push
git status
