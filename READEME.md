#Render js dynamic page

These are the source files that show you a basic demo, which is based on [react](https://github.com/facebook/react).

## Requirements
Make sure you have installed follow items.

* phantomJS

## Run

```sh
  $ cd MY_PROJECT
  $ npm install
  $ npm start
```

Then you can open your broswer and input http://localhost:3000.You can see something rendered by reactJS.By default, if you run the follow shell,you will get nothing in container div whose id is content.Because curl won't run js.

```sh
curl http://localhost:3000/
```

This project is a demo to show how to render content rendered by js when the request comes from some agent,that can't run js,such as googlebot,curl and so on.
Under this demo,if you type above shell commond,you can get something like below:

```
<html><head><title>Express</title><link rel="stylesheet" href="/stylesheets/style.css"></head><body><div id="content"><h4 data-reactid=".0">React features!</h4></div></body></html>
```
