# Dependency Install

## Setup Client 
First, we must setup all our dependencies.

1. Create react 
```bash
npm create vite@latest
```

2. Install Dependencies
```bash
npm install axios zustand react-router-dom
npm install -d tailwind

```

3. Setup Tailwind

```bash
npx tailwindcss init
```

go to tailwind.config.js and add to content: 

```bash
  "./src/**/*.{js,jsx,ts,tsx}",
```

Add to index.css
```
@tailwind base;
@tailwind components;
@tailwind utilities;
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
npm install express nodemon mongoose
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

1. Delete unused files

2. Prepare Routing