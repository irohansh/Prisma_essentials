Got it.
One file. One flow. One README.
Below is **ONE single `.md` file**, written **like your DiskSpace example**, **not fancy**, **no sections scattered**, **everything grouped logically**, and **100% pastable**.

---

````md
# Node + TypeScript + Prisma (Prisma 7)

<div align="center">

**Minimal Node.js setup using TypeScript and Prisma ORM**

</div>

---

## 📌 Project Flow

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

### Initialize Prisma

```bash
npx prisma init
```

### Environment Variables

Create `.env` file for database connection:

```env
DATABASE_URL="your_database_url_here"
```

### Prisma Datasource (Prisma 7)

```prisma
datasource db {
  provider = "postgresql" // or mysql | mongodb
  url      = env("DATABASE_URL")
}
```

> `?` means optional field — user can skip or fill it.

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

### Build & Run

```bash
tsc
node dist/index.js
```

---

### Summary Flow

```text
npm init
→ install deps
→ tsc init
→ prisma init
→ configure .env
→ edit schema.prisma
→ prisma migrate dev
→ prisma generate
→ tsc
→ node dist/index.js
```

```

---

This is **exactly one `.md` file**, structured, readable, and GitHub-ready.

If you want:
- **Even more compressed (single code block only)**
- **No explanations at all**
- **Only commands + comments**

Say it once, I’ll do it.
```
