# 🚀 Quick Start - Catan MVP

Guia rápido para começar a desenvolver o projeto Catan MVP.

---

## ⚡ Setup Rápido (5 minutos)

### 1️⃣ Instalar Dependências
```bash
npm install
```

### 2️⃣ Configurar Ambiente
```bash
# Copiar arquivos de exemplo
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

**Edite os arquivos .env com:**
- `apps/web/.env.local`:
  ```env
  NEXT_PUBLIC_SUPABASE_URL=http://localhost:54323
  NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  NEXT_PUBLIC_API_URL=http://localhost:3001
  NEXT_PUBLIC_WS_URL=ws://localhost:3001
  NEXT_PUBLIC_APP_URL=http://localhost:3000
  ```

- `apps/api/.env`:
  ```env
  NODE_ENV=development
  PORT=3001
  DATABASE_URL=postgresql://postgres:postgres@localhost:5432/catan_dev
  REDIS_URL=redis://:catan_redis_pass@localhost:6379
  JWT_SECRET=catan-local-secret
  CORS_ORIGIN=http://localhost:3000
  LOG_LEVEL=debug
  ```

### 3️⃣ Iniciar Docker
```bash
docker-compose up -d
```

Aguarde ~30 segundos para os serviços iniciarem.

### 4️⃣ Verificar Saúde dos Serviços
```bash
# PostgreSQL
docker ps | grep catan-postgres

# Redis
docker ps | grep catan-redis

# Supabase Studio
docker ps | grep catan-studio
```

### 5️⃣ Rodar Projeto
```bash
npm run dev
```

---

## 🌐 Acessar Aplicação

| Serviço | URL | Status |
|---------|-----|--------|
| **Frontend** | http://localhost:3000 | ✅ |
| **API Health** | http://localhost:3001/health | ✅ |
| **Supabase Studio** | http://localhost:54323 | ✅ |

---

## 📁 Estrutura de Diretórios

```
catan-mvp/
├── apps/
│   ├── web/          ← Frontend Next.js
│   └── api/          ← Backend Express
├── packages/
│   ├── types/        ← Tipos compartilhados
│   ├── game-engine/  ← Lógica do jogo
│   └── ui/           ← Componentes UI
└── docker-compose.yml
```

---

## 🛠️ Comandos Úteis

### Desenvolvimento
```bash
# Rodar tudo
npm run dev

# Rodar apenas frontend
cd apps/web && npm run dev

# Rodar apenas backend
cd apps/api && npm run dev

# Rodar apenas Docker
docker-compose up -d
```

### Build
```bash
# Build tudo
npm run build

# Build apenas frontend
cd apps/web && npm run build

# Build apenas backend
cd apps/api && npm run build
```

### Testes
```bash
# Rodar todos os testes
npm run test

# Rodar testes do game-engine
cd packages/game-engine && npm run test:watch
```

### Docker
```bash
# Iniciar serviços
docker-compose up -d

# Ver logs
docker-compose logs -f

# Parar serviços
docker-compose down

# Reiniciar do zero (apaga volumes)
docker-compose down -v
docker-compose up -d
```

### Linting & Formatação
```bash
# Lint
npm run lint

# Format
npm run format
```

---

## 🐛 Troubleshooting

### Problema: Porta já em uso
**Solução:**
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill -9
```

### Problema: Docker não inicia
**Solução:**
```bash
# Limpar tudo e reiniciar
docker-compose down -v
docker system prune -a
docker-compose up -d --build
```

### Problema: Módulos não encontrados
**Solução:**
```bash
# Limpar node_modules e reinstalar
npm run clean
rm -rf node_modules
npm install
```

### Problema: TypeScript errors
**Solução:**
```bash
# Rebuildar tipos
npx turbo run build --force
```

---

## 📝 Próximas Tarefas

### Para começar a desenvolver:

1. **Implementar Autenticação**
   - Arquivo: `apps/web/app/(auth)/login/page.tsx`
   - Integrar com Supabase Auth

2. **Criar Database Schema**
   - Criar migrations em: `apps/api/src/infrastructure/database/migrations/`
   - Tabelas: `games`, `players`, `game_players`, `game_states`

3. **Implementar Use Cases**
   - Criar em: `apps/api/src/application/use-cases/game/`
   - Começar com: `create-game.use-case.ts`

4. **Implementar Game Engine**
   - Criar em: `packages/game-engine/src/core/board/`
   - Começar com: `board-generator.ts`

---

## 🎯 Fluxo de Desenvolvimento

```mermaid
graph LR
    A[Criar Feature] --> B[Escrever Testes]
    B --> C[Implementar]
    C --> D[Lint/Format]
    D --> E[Commit]
    E --> F[Push]
    F --> G[CI/CD]
```

---

## 📚 Recursos

- [README.md](./README.md) - Documentação completa
- [IMPLEMENTACAO.md](./IMPLEMENTACAO.md) - Detalhes da implementação
- [SETUP_CATAN.MD](./SETUP_CATAN.MD) - Setup original
- [Clean Architecture](./.claude/agents/clean-architecture.md) - Guia de arquitetura

---

## 🆘 Precisa de Ajuda?

1. Verifique os logs: `docker-compose logs -f`
2. Teste a API: `curl http://localhost:3001/health`
3. Consulte o [README.md](./README.md)

---

**Bom desenvolvimento! 🎲🚀**
