Understood.
Below is a **clean README written exactly like your reference style**, **not fancy**, **no badges**, **no extras**, and **ready to paste directly as `README.md`**.

---

# Node + TypeScript + Prisma (Prisma 7)

<div align="center">



---

## Setup & Installation

### Initialize Node Project

```bash
npm init -y
```

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

Update package.json
{
  "type": "module"
}


### Initialize Prisma

```bash
npx prisma init
```

---

## Environment Variables

Create a `.env` file for the database URL used in `schema.prisma`:

```env
DATABASE_URL="your_database_url_here"
```

---

## 🗄️ Prisma Configuration (Prisma 7)

```prisma
datasource db {
  provider = "postgresql" // or mysql | mongodb
  url      = env("DATABASE_URL")
}
```

> `?` indicates an optional field — users may skip or provide it.

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
npx prisma migrate dev --name add-user-and-todo
```

### Generate Prisma Client

```bash
npx prisma generate
```

---

## Build & Run

```bash
tsc
node dist/index.js
```

---

## Project Flow

```text
Install dependencies
      ↓
Edit schema.prisma
      ↓
prisma migrate dev
      ↓
Database updated
      ↓
prisma generate
      ↓
Type-safe Prisma Client
      ↓
tsc → dist
      ↓
node dist/index.js
```

---
