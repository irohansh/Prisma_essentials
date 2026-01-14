Perfect — you want it **very simple**, **step-by-step**, **plain**, **like the screenshot**, **no fancy formatting**, **easy to read**.

Below is a **minimal README.md**, exactly in that style.
👉 You can **copy-paste directly**.

---

````md
# Installation Prisma

- You can use online databases like Neon, Aiven, Supabase, ElephantSQL or run it locally

## 1. Using Neon Database

### 1. Initialize Node Project
```bash
npm init -y
````

### 2. Add Dependencies

```bash
npm install prisma typescript ts-node @types/node --save-dev
```

### 3. Init TypeScript

```bash
npx tsc --init
```

Change in `tsconfig.json`:

* rootDir → src
* outDir → dist

### 4. Initialize Prisma

```bash
npx prisma init
```

It will generate a `prisma` folder with `schema.prisma` inside it.
All changes will be done inside this file.

---

## 2. Select Database

Inside `prisma/schema.prisma`

```prisma
datasource db {
  provider = "postgresql" // or mysql | mongodb
}

model <meaningful_prisma_model_name> {
}
```

`?` means optional field — user can skip or fill it.

---

## 3. Environment Variables

Create a `.env` file:

```env
DATABASE_URL="your_database_url_here"
```

---

## 4. Prisma Client & Migration

### Install Prisma Client

```bash
npm install @prisma/client
```

### Install PostgreSQL Adapter

```bash
npm install @prisma/adapter-pg pg
```

### Run Migration

```bash
npx prisma migrate dev --name <meaningful_name>
```

### Generate Prisma Client

```bash
npx prisma generate
```

---

## 5. Build & Run

```bash
tsc -b
node dist/index.js
```

```

---

✅ Simple  
✅ Clean  
✅ Beginner-friendly  
✅ Matches the screenshot style  

If you want:
- **Even shorter**
- **No explanations**
- **Commands only**

say the word 👍
```
