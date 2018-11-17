# To run:

## backend server

> cd backend/
> Install dependencies
> yarn
> Run server
> yarn startWatch

## frontend APP

from the root folder:

> cd frontend/frontend2/
> Install dependencies
> yarn
> Run APP
> yarn start

## I missed time due to 2 big issue I face:

1. The APP was no reaching the server via HTTP responses -> I had to start from the base up again (This new attempt worked)
2. Component 'NewItem' is not recognizing 'this.state' -> I properly can't find the bug.
3. An action creator 'addingItems' can post to server DB and there create a new mongoose Document, but is not dispatching the actions as expected.

This issues slow me down, I was no able to implement test for the backend and fronten.
