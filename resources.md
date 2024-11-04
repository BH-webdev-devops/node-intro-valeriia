##CRUD : Create Read Update Delete
1. Create : post
2. Read: get the data
3. Update: put/modify the data
4. Delete: delete the data

npm init  //to initialise node package.json
tsc --init  //to initialise tsconfig.json
npm install express
npm install -D typescript ts-node @types/node @types/express
npm i -g nodemon

npm install dotenv

In Express I need to reload running when there is changes because we need listening to changes. We can use NODEMON: command npm i -g nodemon and running programm with nodemon index.ts OR npm run dev if add to package.json scripts  "dev": "nodemon index.ts"

Middleware for checking (authentication, verification)