# Setup Command

Initialize the entire Catan MVP project structure.

## Usage

```
/setup [option]
```

## Options

- `quick` - Minimal setup (structure + configs only)
- `full` - Complete setup (includes Docker, dependencies)
- `database` - Setup database migrations only

## Full Setup Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Files
```bash
# Copy example env files
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env

# Edit with your actual credentials
```

### 3. Start Docker Services
```bash
docker-compose up -d
```

Wait for services to be healthy:
- PostgreSQL (port 5432)
- Redis (port 6379)
- Supabase Studio (port 54323)

### 4. Run Database Migrations
```bash
cd apps/api
npm run db:migrate
```

### 5. Seed Initial Data (Optional)
```bash
npm run db:seed
```

### 6. Start Development Servers
```bash
# From root
npm run dev
```

This starts:
- Next.js (http://localhost:3000)
- API (http://localhost:3001)
- Supabase Studio (http://localhost:54323)

## Verification

Visit:
- Frontend: http://localhost:3000
- API Health: http://localhost:3001/health
- Supabase Studio: http://localhost:54323

## Troubleshooting

### Docker Issues
```bash
docker-compose down -v
docker-compose up -d --build
```

### Port Conflicts
Check if ports 3000, 3001, 5432, 6379, 54323 are available

### Database Connection
Verify Supabase is running:
```bash
docker ps | grep catan-postgres
```
