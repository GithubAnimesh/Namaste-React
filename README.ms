
Steps To make Production ready App:

NPM: Its a package manger. Its a standard repository.
command: npm init
package.json: it's a configuration of NPM.
to get packages in our project: bundler:- its package our properties. Its bundle our app.

:- To install any dependencies use command npm install -D parcel (Here -d is dev dependencies )

:- Transitive dependencies:= 
: Node_modules: its a collections of dependencies
:- .gitignore:= It will push only file which we want on GitHub

:- npx parcel index.html It will execute package and its host our app.
#parcel:=- Dev Build, Local Server, HMR(Hot Module Replacement), File watching Algorithm - written in c++, Caching - Faster Builds, Image Optimization, Minification, Bundling, Compress, Consistent Hashing, Code splitting, Differential Bundling - Support older Browsers, Diagnostic, Error Handling, Host app on HTTPs, Tree Shaking

:- CDN is not good approaches to do react app

:- Install react as a packages:- npm install react  
:- Install react DOM:- npm install react-dom 

/************ Episode - 03 Laying the foundation *************/

:- to generate production file = npx parcel build index.html
:- dist folder: its set of 

:- to support browsers in your app = add browsers list in package.json : "browserslist": [
  "last 2 version"
  ]
  

:- npx parcel index.html means that we are executing a npm package parcel and you give a source file index.html.

To ignore execute every time command npx parcel index.html we add scripts in package.json 

"scripts":{
"start": "parcel index.html", // for dev
"build": "parcel build index.html" // for prod
}

:- now we use command npm run starts or npm starts 

:- for build project run: npm run build


JSX:- Its java script syntax which is create react element. Its a convention were we merged HTML and js together. JSX transpiled before its reaches the JS Engine. Its take attribute name in camel case. JSX sanitize data.

@babel:- Its convert the code which react will understand. It is java script compiler. 


React Component:- There is two types of components.
1: Class Based Component:- Old way of writing code.
2: Functional Component:- Its just a normal JS function. Which return some JSX code or react element. All JS featured worked in side JSX.
Any thing written in {} is treat like JS.

Component composition: Functional component in side functional component.

/*************Episode - 03 End here***************************/


