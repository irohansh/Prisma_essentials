---

````md
# Node + TypeScript + Prisma (Prisma 7)

Minimal Node.js setup using TypeScript and Prisma ORM

---

## Setup & Installation

### Initialize Node Project
```bash
npm init -y
````

### Add Dependencies

```bash
npm install prisma typescript ts-node @types/node --save-dev
```

### Initialize TypeScript

```bash
npx tsc --init
```

Update `tsconfig.json`:

* `rootDir` → `src`
* `outDir` → `dist`

### Update `package.json`

```json
{
  "type": "module"
}
```

### Initialize Prisma

```bash
npx prisma init
```

---

## Environment Variables

Create a `.env` file for the database URL used by Prisma:

```env
DATABASE_URL="your_database_url_here"
```

---

## Prisma Configuration (Prisma 7)

```prisma
datasource db {
  provider = "postgresql" // or mysql | mongodb
}

model <meaningful_prisma_model_name> { }
```

`?` indicates an optional field — user can skip or fill it.

---

## Prisma Client & Database

### Install Prisma Client

```bash
npm install @prisma/client
```

### Install PostgreSQL Adapter + Driver

```bash
npm install @prisma/adapter-pg pg
```

### Run Database Migration

```bash
npx prisma migrate dev --name <meaningful_name>
```

Example:

```bash
npx prisma migrate dev --name add-user-model
```

### Generate Prisma Client

```bash
npx prisma generate
```

---

## Build & Run

```bash
tsc -b
node dist/index.js
```

---

````
