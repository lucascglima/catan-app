# Development Command

Start all development servers concurrently.

## Usage

```
/dev [service]
```

## Options

- (no args) - Start all services
- `web` - Start Next.js only
- `api` - Start Node.js API only
- `docker` - Start Docker services only

## Full Development

```bash
npm run dev
```

This runs:
- `apps/web`: Next.js on port 3000
- `apps/api`: Node.js API on port 3001
- Docker: PostgreSQL, Redis, Supabase Studio

## Individual Services

### Frontend Only
```bash
cd apps/web
npm run dev
```

### Backend Only
```bash
cd apps/api
npm run dev
```

### Docker Services
```bash
docker-compose up -d
```

## Environment Requirements

Ensure these are set in `.env.local` and `.env`:

**apps/web/.env.local**:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001
NEXT_PUBLIC_SUPABASE_URL=http://localhost:54323
```

**apps/api/.env**:
```
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/catan_dev
REDIS_URL=redis://:catan_redis_pass@localhost:6379
PORT=3001
```

## Hot Reload

All services support hot reload:
- Next.js: Fast Refresh
- API: tsx watch mode
- Docker: Volume mounting

## Logs

View logs:
```bash
# All Turbo logs
npm run dev

# Docker logs
docker-compose logs -f

# API logs only
cd apps/api && npm run dev

# Frontend logs only
cd apps/web && npm run dev
```
