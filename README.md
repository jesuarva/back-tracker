# To run:

## backend server

> cd backend/
> Install dependencies
> yarn
> Run server
> yarn startWatch

Models routes were implemented with an NPM library I wrote [express-router-factory](https://www.npmjs.com/package/express-router-factory)

## frontend APP

from the root folder:

> cd frontend/frontend2/
> Install dependencies
> yarn
> Run APP
> yarn start

## Some issues slow me down:

1. The APP was no reaching the server via HTTP calls, I'm used to setup a 'proxy' in the frontend/package.json. -> I had to start from the base up again (This new attempt worked)
2. Component 'NewItem' is not recognizing 'this.state' -> I properly can't find the bug. (FIXED! I was missing binding this to handlers)
3. An action creator 'addingItems' can post to server DB and there create a new mongoose Document, but is not dispatching the actions as expected.

This issues slow me down, I was no able to implement test for the backend and fronten.
