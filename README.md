# Url-Shortener
### Technologies
NPM, Prisma, Next JS
### Installation
##### 1) Clone the project.
```
Git clone https://github.com/CarSeP/Url-Shortener.git
```
##### 2) Environment variables.
Create an **.env** file in the root of the project with the following values:
```
DATABASE_URL="file:./dev.db"
NEXT_PUBLIC_PAGEURL="http://localhost:3000"
```
##### 3) Install dependencies.
```
npm i
```
##### 4) Initialize Prisma.
```
npx prisma migrate dev --name init
```
##### 5) Run the project.
```
npm run dev
```