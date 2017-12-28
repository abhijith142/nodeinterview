we are using Koa as the server and we are using dynamo db for the database.
we have a collection Client with id,sso,origins and secret as its fields.
we provide the below services
 get the list of clients
 get a client based on the id
 get all the clients based on the origin
 we can aso validate a given api key
 we can get the health of the application by navigating to /health end point
In index file We can import App in the beginning
We can create a different package for errors and put all the error classes there.
