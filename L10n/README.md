# HPE Elements Seed

Element Seed Project provides a skeleton which can be used to build an application using [Elements](https://pages.github.hpe.com/caf/elements/documentation.html).

## Getting Started

##### Install with Bower
* Install [Git](https://git-scm.com/downloads)
* run ``` git clone https://github.hpe.com/caf/elements-seed.git  ```
* Install [Nodejs](https://nodejs.org/en/)
  * Note: Node comes with [npm](https://docs.npmjs.com/getting-started/installing-node) installed but npm is updated more frequently than Node
* Run  ```npm install``` from the folder where the code will be downloaded (with package.json)
  * Note: The inner folder(elements-seed) contains the package.json
* Run ```npm install -g grunt-cli```
* Install [bower(>v1.5)](http://bower.io/#install-bower) using npm ```npm install -g bower```
* Install [bower-art-resolver](https://www.npmjs.com/package/bower-art-resolver#installation) ```npm install -g bower-art-resolver```
* Run ```bower install``` in the seed project folder
* Run ```grunt```
* Run ```grunt connect```
* Browse "http://localhost:10000/dist/index.html"
