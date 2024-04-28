# Todo Application

## Tech Stack
- React  Js
- Node Js
- Tailwind
- Typescript
- Prisma
- Postgress

## Run the application Locally

 > FrontEnd
 ```
 cd .\frontEnd
 ```
 ```
 npm install
 ```
 ```
 npm run dev
 ```
 ##
 >Backend
 ```
 cd .\backendExpress
 ```
 ```
 npm install
 ```
 - Either run prisma locally using docker 
	 ```
	 docker run -e POSTGRES_PASSWORD=your_password -d -p 5432:5432 postgres
	```
    or 
    
 - Run it on cloud providers ([neon](https://neon.tech/)) 

 ```
 npx prisma migrate dev --name addedschema
 ```
  ```
 npx prisma generate
 ```
If running postgres on docker add **.env** file with url as :
```
postgresql://postrges:password@localhost:5432/postgres
```
other wise add the postgres url from the cloud provider

```
npm run dev
```
