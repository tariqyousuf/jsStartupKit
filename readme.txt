jsStartupKit:
=============

Editor:
---------
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

Pollyfill.io can be used to send polyfill only to the required browsers and not to every one

Why mocking API:
----------------
1. can do unit testing with it
2.keep working even when the service is down
3. rapid prototying of the services
4. avoid inter team bottlenects:just need to have contract for the werb services
5. work offline

How to Mock Http:
----------------
Nock:
static Json
create development web-servers like api-mock or Json server (that's what he is using) or Json schema faker, Browser sync or Express

Plan in this project for Mock API:
----------------------------------
3 step process:

step1:
Declare our shcema using Json Schema faker

step2:
Generting random data
multiple choices are faker, chance, randexp.js

step3:
Server Data via API
Json Server

Minification:
-------------
using uglify through webpack

git Commands:
-------------
stage all changes: git add .
commit all changes to local branch: git commit -m "comments"
push all changes from local branch to server: git push
git status

reactJS template project:
-------------------------
https://github.com/coryhouse/react-slingshot#initial-machine-setup 


production build:
----------------- 
minification and other stuff using webpack but i totally missed that

production deploy:
------------------
Keep ui and apis(means server side apis) as seperte project
Heroku: for hosting the apis
Surge: for hosting the ui

How to keep the template/startup kit updated:
---------------------------------------------
YEOMAN: you can keep your startup kit on yeoman that creates project templates or scaffolding - so you can update your youman template from github
or GitHub and fork
or using an npm package

Note:
completed code till start of production build - the second last chapter
