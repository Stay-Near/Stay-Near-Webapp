# Python + React [Flask + node]

Python + React is a repo for a quick setup of a web application.

Characteristics:
  - Python 3 (uses env).
  - React (uses babel | as front-end).
  - Flask (as back-end).

# Cloning
  - Using HTTP: `git clone https://github.com/cesarau04/python-react-webapp.git`
  - Using SSH: `git clone git@github.com:cesarau04/python-react-webapp.git`

You can also:
  - Download a [zip file][link-zip]


# Installation
#### Requirements
- python3
- python3-venv
- python3-pip
- node
- npm


#### Steps
1. Activate python env and install dependencies
```sh
$ cd path/to/repo
$ python3 -m venv env
$ source ./env/bin/activate
$ pip install -r requirements.txt
```
In the future to activate the virtual env use `$ source ./env/bin/activate`

2. Install npm dependencies
```sh
$ cd ./templates/static
$ npm install
```

# Running
1. In one terminal move to `./templates/static` and init webpack module bundler
```sh
$ npm run watch
```
2. In other terminal move to root folder and init flask back-end
```sh
$ python3 ./run.py
```

# Stopping
1. `CTRL+C` in both terminals
2. If you want you can terminate the python env with 
```sh 
$ deactivate
```

License
----
ISC

Credits
-------
Based on [eyong kevin][author] tutorial

[link-zip]: <https://github.com/cesarau04/python-react-webapp/archive/master.zip>
[author]: <https://itnext.io/a-template-for-creating-a-full-stack-web-application-with-flask-npm-webpack-and-reactjs-be2294b111bd>

