### 1. Initialize node project
```bash
npm init -y

2. Add dependencies

npm install prisma typescript ts-node @types/node --save-dev

3. Init TypeScript

npx tsc --init

Change rootDir to src
Change outDir to dist
4. Initialize Prisma

npx prisma init

It will generate a prisma folder with schema.prisma in it.
2. Select Database

Inside prisma/schema.prisma

datasource db {
  provider = "postgresql" // or mysql | mongodb
}

model User {
  id    Int    @id @default(autoincrement())
  name  String?
  email String @unique
}

? means optional field.
3. Environment Variables

Create .env file

DATABASE_URL="your_database_url_here"

4. Prisma Client & Migration
Install Prisma Client

npm install @prisma/client

Install PostgreSQL Adapter

npm install @prisma/adapter-pg pg

Run Migration

npx prisma migrate dev --name add-user-model

Generate Prisma Client

npx prisma generate

5. Build & Run

tsc -b
node dist/index.js
