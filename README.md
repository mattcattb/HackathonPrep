# Dependency Install

## Setup Client 
First, we must setup all our dependencies.

1. Create react 
```bash
npm create vite@latest
```

2. Install Dependencies
```bash
npm install axios zustand react-router-dom tailwindcss @tailwindcss/vite

```

3. Setup Directory Structure
```bash
cd src
mkdir store 
mkdir components
mkdir pages
mkdir hooks
mkdir styles
mv index.css styles
touch routing.jsx
```

4. Setup Tailwind
add tailwind plugin to vite config
```bash
npx tailwindcss init
```
add to vite configuration

Add to index.css
```
@import "tailwindcss";
```

## Setup Backend

1. Create folder with Node

```bash
mkdir server
cd server
npm init -y 
```

2. Install Dependencies 
```bash
npm install express nodemon mongoose dotenv cors jsonwebtoken
```

3. Setup src folder structure

```bash
mkdir src
cd src
touch server.js
mkdir controllers
mkdir routes
mkdir lib
mkdir middleware
mkdir models
```

4. create express
 
## Setup Database 

We will be using Mongodb. Create a .env file in our server dir with the following: 

```
MONGODB_URI=
PORT=
JWT_SECRET=
NODE_ENV=
```

# Source Structure
After installing all dependencies, we must put our folders in the proper filestructure.


## Frontend 

1. Delete following files: 
- src/app.css
- src/assets/react.svg
- public/vite.svg


2. Change files to remove deleted: 
-  

3. Add Routing to App.jsx