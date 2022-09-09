# # Problem Statement

Create a REST API in Nodejs with MongoDb as database for creating tasks with a
duration (in minutes).
User can insert a todo record with a sample schema like:
Task name
Task description
Creator
Duration
createdAt

There will be two endpoints:
/add - POST endpoint which adds the data
/list - GET endpoint which lists all the data


# Requirements:

Use ExpressJS (https://expressjs.com) to setup your project.
Use MongoDB as your database. You can get a free mongodb instance at
MongoDB Atlas (https://www.mongodb.com/cloud/atlas).
If you know typescript and choose to do the task in it, it will be a plus point.
Use Heroku for your deployment purpose.




## Install & Run the server
step 1) install project
```
git clone _project url_
```
step 2) change directory to the project directory
download the project from github 
```
cd "board infinity_api"
```
step 3)  install all dependencies in package.json
```
yarn install 
```
step 4) Change mongooes db link in .env file

step 5) start server  
```
yarn start
```

# Tech

1) we need postman to test our rest api

2) we need mongodb atlas account 

3) IDE for code execution 

4) Installed node js
 

# API
We have 3 end points for api 
### / 
response : {
message:"Hello Board Infinity"
}
### /list  GET request
This end point will show all the collection from data base

### /add => POST request
body : {
"name",
"description",
"creator",
"duration",
"createdAt"
}
we have to send this as a body to the /add post request
#### NOTE createdAt is a date, so pass a date string only

