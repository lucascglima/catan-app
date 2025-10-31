# 🎲 Catan MVP - Full Stack Setup Command

## Contexto do Projeto

Este comando criará a estrutura completa de um MVP do jogo Catan multiplayer/single-player com as seguintes características:

**Stack:**
- Frontend: Next.js 15, React 19, TypeScript, Radix UI, Tailwind CSS 4
- Backend: Node.js 22, TypeScript, Express, Socket.io
- Database: Supabase PostgreSQL
- Cache: Upstash Redis
- Monorepo: Turborepo
- Containerização: Docker

**Arquitetura:**
- Clean Architecture
- Feature-based folders
- Kebab-case naming convention
- Absolute imports

---

## 📋 COMANDO DE SETUP COMPLETO

Execute este comando no Claude Code:

```
Crie toda a estrutura de um projeto monorepo para o MVP do jogo Catan seguindo estas instruções exatas:

# PARTE 1: ESTRUTURA DE PASTAS

Crie a seguinte estrutura de diretórios:

catan-mvp/
├── .claude/
│   ├── agents/
│   ├── commands/
│   ├── hooks/
│   └── settings.json
├── apps/
│   ├── web/
│   │   ├── app/
│   │   │   ├── (auth)/
│   │   │   │   ├── login/
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── register/
│   │   │   │   │   └── page.tsx
│   │   │   │   └── layout.tsx
│   │   │   ├── (game)/
│   │   │   │   ├── lobby/
│   │   │   │   │   ├── page.tsx
│   │   │   │   │   └── components/
│   │   │   │   ├── room/
│   │   │   │   │   └── [id]/
│   │   │   │   │       └── page.tsx
│   │   │   │   ├── game/
│   │   │   │   │   └── [id]/
│   │   │   │   │       ├── page.tsx
│   │   │   │   │       └── components/
│   │   │   │   │           ├── board/
│   │   │   │   │           ├── player-hand/
│   │   │   │   │           ├── dice-roller/
│   │   │   │   │           └── trade-modal/
│   │   │   │   └── layout.tsx
│   │   │   ├── api/
│   │   │   │   ├── auth/
│   │   │   │   │   └── route.ts
│   │   │   │   ├── games/
│   │   │   │   │   └── route.ts
│   │   │   │   └── health/
│   │   │   │       └── route.ts
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── globals.css
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   └── shared/
│   │   ├── lib/
│   │   │   ├── supabase/
│   │   │   │   ├── client.ts
│   │   │   │   └── server.ts
│   │   │   ├── socket/
│   │   │   │   └── client.ts
│   │   │   └── utils.ts
│   │   ├── styles/
│   │   ├── public/
│   │   ├── next.config.ts
│   │   ├── tailwind.config.ts
│   │   ├── tsconfig.json
│   │   ├── package.json
│   │   └── .env.local.example
│   └── api/
│       ├── src/
│       │   ├── config/
│       │   │   ├── database.ts
│       │   │   ├── redis.ts
│       │   │   └── socket.ts
│       │   ├── domain/
│       │   │   ├── entities/
│       │   │   │   ├── game.entity.ts
│       │   │   │   ├── player.entity.ts
│       │   │   │   └── board.entity.ts
│       │   │   ├── repositories/
│       │   │   │   ├── game.repository.interface.ts
│       │   │   │   └── player.repository.interface.ts
│       │   │   └── value-objects/
│       │   │       ├── resources.vo.ts
│       │   │       └── position.vo.ts
│       │   ├── application/
│       │   │   ├── use-cases/
│       │   │   │   ├── game/
│       │   │   │   │   ├── create-game.use-case.ts
│       │   │   │   │   ├── join-game.use-case.ts
│       │   │   │   │   ├── start-game.use-case.ts
│       │   │   │   │   └── end-game.use-case.ts
│       │   │   │   ├── player/
│       │   │   │   │   ├── roll-dice.use-case.ts
│       │   │   │   │   ├── build-road.use-case.ts
│       │   │   │   │   └── trade.use-case.ts
│       │   │   │   └── bot/
│       │   │   │       └── execute-bot-turn.use-case.ts
│       │   │   └── dto/
│       │   ├── infrastructure/
│       │   │   ├── database/
│       │   │   │   ├── repositories/
│       │   │   │   │   ├── supabase-game.repository.ts
│       │   │   │   │   └── supabase-player.repository.ts
│       │   │   │   └── migrations/
│       │   │   ├── cache/
│       │   │   │   └── redis.service.ts
│       │   │   └── websocket/
│       │   │       ├── handlers/
│       │   │       │   ├── game.handler.ts
│       │   │       │   ├── lobby.handler.ts
│       │   │       │   └── room.handler.ts
│       │   │       └── middleware/
│       │   │           └── auth.middleware.ts
│       │   ├── presentation/
│       │   │   ├── controllers/
│       │   │   │   ├── game.controller.ts
│       │   │   │   └── player.controller.ts
│       │   │   ├── routes/
│       │   │   │   ├── game.routes.ts
│       │   │   │   └── health.routes.ts
│       │   │   └── middleware/
│       │   │       ├── error-handler.ts
│       │   │       └── validate.middleware.ts
│       │   ├── shared/
│       │   │   ├── errors/
│       │   │   │   └── app-error.ts
│       │   │   └── utils/
│       │   └── server.ts
│       ├── tests/
│       │   ├── unit/
│       │   ├── integration/
│       │   └── e2e/
│       ├── Dockerfile
│       ├── tsconfig.json
│       ├── package.json
│       └── .env.example
├── packages/
│   ├── game-engine/
│   │   ├── src/
│   │   │   ├── core/
│   │   │   │   ├── board/
│   │   │   │   │   ├── hexagon.ts
│   │   │   │   │   ├── board-generator.ts
│   │   │   │   │   └── board-validator.ts
│   │   │   │   ├── rules/
│   │   │   │   │   ├── building-rules.ts
│   │   │   │   │   ├── resource-rules.ts
│   │   │   │   │   ├── trading-rules.ts
│   │   │   │   │   └── victory-rules.ts
│   │   │   │   ├── game-state/
│   │   │   │   │   ├── game-state.ts
│   │   │   │   │   └── turn-manager.ts
│   │   │   │   └── dice/
│   │   │   │       └── dice-roller.ts
│   │   │   ├── bot/
│   │   │   │   ├── strategies/
│   │   │   │   │   ├── random-strategy.ts
│   │   │   │   │   ├── medium-strategy.ts
│   │   │   │   │   └── hard-strategy.ts
│   │   │   │   └── bot-player.ts
│   │   │   └── index.ts
│   │   ├── tests/
│   │   ├── tsconfig.json
│   │   └── package.json
│   ├── types/
│   │   ├── src/
│   │   │   ├── game.types.ts
│   │   │   ├── player.types.ts
│   │   │   ├── board.types.ts
│   │   │   ├── socket.types.ts
│   │   │   └── index.ts
│   │   ├── tsconfig.json
│   │   └── package.json
│   └── ui/
│       ├── src/
│       │   ├── components/
│       │   └── index.ts
│       ├── tsconfig.json
│       └── package.json
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── deploy.yml
├── docker-compose.yml
├── turbo.json
├── .gitignore
├── .prettierrc
├── .eslintrc.json
├── package.json
└── README.md

# PARTE 2: ARQUIVOS DE CONFIGURAÇÃO RAIZ

## package.json (raiz)
{
  "name": "catan-mvp",
  "version": "1.0.0",
  "private": true,
  "description": "Full-stack multiplayer Catan game MVP",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "format": "prettier --write \"**/*.{ts,tsx,md}\"",
    "clean": "turbo run clean && rm -rf node_modules",
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down",
    "db:migrate": "cd apps/api && npm run db:migrate",
    "db:seed": "cd apps/api && npm run db:seed"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@typescript-eslint/eslint-plugin": "^8.18.2",
    "@typescript-eslint/parser": "^8.18.2",
    "eslint": "^9.17.0",
    "prettier": "^3.4.2",
    "turbo": "^2.3.3",
    "typescript": "^5.7.2"
  },
  "packageManager": "npm@10.9.2",
  "engines": {
    "node": ">=22.21.1",
    "npm": ">=10.9.2"
  }
}

## turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "globalDependencies": ["**/.env.*local"],
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": []
    },
    "clean": {
      "cache": false
    }
  }
}

## docker-compose.yml
version: '3.9'

services:
  # Supabase Local (PostgreSQL + Auth + Realtime + Storage)
  postgres:
    image: supabase/postgres:15.1.1.54
    container_name: catan-postgres
    restart: unless-stopped
    ports:
      - "5432:5432"
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
      POSTGRES_DB: catan_dev
    volumes:
      - postgres-data:/var/lib/postgresql/data
      - ./apps/api/src/infrastructure/database/migrations:/docker-entrypoint-initdb.d
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - catan-network

  # Redis (Upstash compatible - local development)
  redis:
    image: redis:7-alpine
    container_name: catan-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    command: redis-server --appendonly yes --requirepass catan_redis_pass
    volumes:
      - redis-data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "--raw", "incr", "ping"]
      interval: 10s
      timeout: 5s
      retries: 5
    networks:
      - catan-network

  # Supabase Studio (Database UI)
  studio:
    image: supabase/studio:20231123-64a766a
    container_name: catan-studio
    restart: unless-stopped
    ports:
      - "54323:3000"
    environment:
      SUPABASE_URL: http://kong:8000
      STUDIO_PG_META_URL: http://meta:8080
      SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0MDcyMDAsImV4cCI6MTk4NTk4MzIwMH0.YZwo7CYJVrz6dKmOOOdE5qvQvDqxGzqcqWS5QTGWFZE
      SUPABASE_SERVICE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY2FsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3MDQwNzIwMCwiZXhwIjoxOTg1OTgzMjAwfQ.cZJqaB7ZKRM6GVxCqrqXhYZy9W2k9JoFdLpfN7wBD3U
    depends_on:
      - postgres
    networks:
      - catan-network

  # API Backend (Node.js)
  api:
    build:
      context: ./apps/api
      dockerfile: Dockerfile
    container_name: catan-api
    restart: unless-stopped
    ports:
      - "3001:3001"
    environment:
      NODE_ENV: development
      PORT: 3001
      DATABASE_URL: postgresql://postgres:postgres@postgres:5432/catan_dev
      REDIS_URL: redis://:catan_redis_pass@redis:6379
      JWT_SECRET: catan-local-jwt-secret-change-in-production
      CORS_ORIGIN: http://localhost:3000
    volumes:
      - ./apps/api:/app
      - /app/node_modules
    depends_on:
      postgres:
        condition: service_healthy
      redis:
        condition: service_healthy
    networks:
      - catan-network

  # Frontend (Next.js) - Opcional, pode rodar fora do Docker
  # web:
  #   build:
  #     context: ./apps/web
  #     dockerfile: Dockerfile.dev
  #   container_name: catan-web
  #   restart: unless-stopped
  #   ports:
  #     - "3000:3000"
  #   environment:
  #     NEXT_PUBLIC_API_URL: http://localhost:3001
  #     NEXT_PUBLIC_WS_URL: ws://localhost:3001
  #     NEXT_PUBLIC_SUPABASE_URL: http://localhost:54323
  #     NEXT_PUBLIC_SUPABASE_ANON_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxvY2FsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA0MDcyMDAsImV4cCI6MTk4NTk4MzIwMH0.YZwo7CYJVrz6dKmOOOdE5qvQvDqxGzqcqWS5QTGWFZE
  #   volumes:
  #     - ./apps/web:/app
  #     - /app/node_modules
  #     - /app/.next
  #   depends_on:
  #     - api
  #   networks:
  #     - catan-network

volumes:
  postgres-data:
  redis-data:

networks:
  catan-network:
    driver: bridge

## .gitignore
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/
*.log

# Next.js
.next/
out/
build/

# Environment variables
.env
.env*.local
.env.production

# Debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Build outputs
dist/
*.tsbuildinfo

# Docker
docker-compose.override.yml

# Turbo
.turbo/

## .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}

## .eslintrc.json
{
  "root": true,
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "no-console": ["warn", { "allow": ["warn", "error"] }]
  },
  "ignorePatterns": ["node_modules/", "dist/", ".next/", "build/"]
}

# PARTE 3: CONFIGURAÇÃO APPS/WEB (NEXT.JS)

## apps/web/package.json
{
  "name": "@catan-mvp/web",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "clean": "rm -rf .next"
  },
  "dependencies": {
    "next": "^15.1.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "@radix-ui/react-dialog": "^1.1.2",
    "@radix-ui/react-dropdown-menu": "^2.1.2",
    "@radix-ui/react-tooltip": "^1.1.5",
    "@radix-ui/react-avatar": "^1.1.1",
    "@supabase/supabase-js": "^2.48.1",
    "socket.io-client": "^4.8.1",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.5.5",
    "zod": "^3.24.1",
    "@catan-mvp/types": "workspace:*",
    "@catan-mvp/game-engine": "workspace:*"
  },
  "devDependencies": {
    "@types/node": "^22.10.2",
    "@types/react": "^19.0.6",
    "@types/react-dom": "^19.0.2",
    "typescript": "^5.7.2",
    "tailwindcss": "^4.0.0",
    "postcss": "^8.4.49",
    "autoprefixer": "^10.4.20",
    "eslint": "^9.17.0",
    "eslint-config-next": "^15.1.3"
  }
}

## apps/web/next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@catan-mvp/types', '@catan-mvp/game-engine', '@catan-mvp/ui'],
  experimental: {
    typedRoutes: true,
  },
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000',
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
    NEXT_PUBLIC_WS_URL: process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:3001',
  },
};

export default nextConfig;

## apps/web/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./app/*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@catan-mvp/types": ["../../packages/types/src"],
      "@catan-mvp/game-engine": ["../../packages/game-engine/src"],
      "@catan-mvp/ui": ["../../packages/ui/src"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

## apps/web/tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Catan color palette
        wood: '#8B4513',
        brick: '#CD5C5C',
        sheep: '#90EE90',
        wheat: '#FFD700',
        ore: '#708090',
        desert: '#F4A460',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
    },
  },
  plugins: [],
};

export default config;

## apps/web/.env.local.example
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# API
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001

# App
NEXT_PUBLIC_APP_URL=http://localhost:3000

## apps/web/app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Catan MVP - Multiplayer Board Game',
  description: 'Play Catan online with friends or against AI bots',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}

## apps/web/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-500 to-green-500">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">🎲 Catan MVP</h1>
        <p className="text-xl mb-8">Multiplayer Board Game</p>
        <div className="space-x-4">
          <a
            href="/login"
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Login
          </a>
          <a
            href="/register"
            className="bg-transparent border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
          >
            Register
          </a>
        </div>
      </div>
    </main>
  );
}

## apps/web/app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --foreground: #0a0a0a;
  --background: #ffffff;
}

@media (prefers-color-scheme: dark) {
  :root {
    --foreground: #ededed;
    --background: #0a0a0a;
  }
}

body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-inter), sans-serif;
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}

## apps/web/lib/supabase/client.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

## apps/web/lib/supabase/server.ts
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';

export async function createServerClient() {
  const cookieStore = await cookies();
  
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        storage: {
          getItem: async (key: string) => {
            return cookieStore.get(key)?.value ?? null;
          },
          setItem: async (key: string, value: string) => {
            cookieStore.set(key, value);
          },
          removeItem: async (key: string) => {
            cookieStore.delete(key);
          },
        },
      },
    }
  );
}

## apps/web/lib/socket/client.ts
import { io, Socket } from 'socket.io-client';

let socket: Socket | null = null;

export function getSocket(): Socket {
  if (!socket) {
    socket = io(process.env.NEXT_PUBLIC_WS_URL!, {
      autoConnect: false,
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionAttempts: 5,
    });
  }
  
  return socket;
}

export function connectSocket(token: string) {
  const socket = getSocket();
  socket.auth = { token };
  socket.connect();
  return socket;
}

export function disconnectSocket() {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
}

## apps/web/lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

# PARTE 4: CONFIGURAÇÃO APPS/API (NODE.JS)

## apps/api/package.json
{
  "name": "@catan-mvp/api",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "lint": "eslint src --ext .ts",
    "clean": "rm -rf dist",
    "db:migrate": "tsx src/infrastructure/database/migrations/run-migrations.ts",
    "db:seed": "tsx src/infrastructure/database/seeds/run-seeds.ts"
  },
  "dependencies": {
    "express": "^4.21.2",
    "socket.io": "^4.8.1",
    "cors": "^2.8.5",
    "helmet": "^8.0.0",
    "dotenv": "^16.4.7",
    "@supabase/supabase-js": "^2.48.1",
    "ioredis": "^5.4.2",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.24.1",
    "winston": "^3.17.0",
    "@catan-mvp/types": "workspace:*",
    "@catan-mvp/game-engine": "workspace:*"
  },
  "devDependencies": {
    "@types/express": "^5.0.0",
    "@types/cors": "^2.8.17",
    "@types/node": "^22.10.2",
    "@types/jsonwebtoken": "^9.0.7",
    "typescript": "^5.7.2",
    "tsx": "^4.19.2",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.14",
    "ts-jest": "^29.2.5",
    "supertest": "^7.0.0",
    "@types/supertest": "^6.0.2"
  }
}

## apps/api/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "lib": ["ES2022"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node",
    "baseUrl": "./src",
    "paths": {
      "@/domain/*": ["domain/*"],
      "@/application/*": ["application/*"],
      "@/infrastructure/*": ["infrastructure/*"],
      "@/presentation/*": ["presentation/*"],
      "@/shared/*": ["shared/*"],
      "@/config/*": ["config/*"],
      "@catan-mvp/types": ["../../packages/types/src"],
      "@catan-mvp/game-engine": ["../../packages/game-engine/src"]
    }
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}

## apps/api/.env.example
# Server
NODE_ENV=development
PORT=3001

# Database
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/catan_dev

# Redis
REDIS_URL=redis://:catan_redis_pass@localhost:6379

# JWT
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# Supabase (opcional, para usar auth do Supabase)
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_KEY=your-service-key

# CORS
CORS_ORIGIN=http://localhost:3000

# Logging
LOG_LEVEL=debug

## apps/api/Dockerfile
FROM node:22-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY turbo.json ./
COPY apps/api/package*.json ./apps/api/

# Install dependencies
RUN npm ci

# Build the app
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build --workspace=@catan-mvp/api

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 api-user

COPY --from=builder --chown=api-user:nodejs /app/apps/api/dist ./dist
COPY --from=builder --chown=api-user:nodejs /app/node_modules ./node_modules
COPY --from=builder --chown=api-user:nodejs /app/apps/api/package.json ./

USER api-user

EXPOSE 3001

CMD ["node", "dist/server.js"]

## apps/api/src/server.ts
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { errorHandler } from '@/presentation/middleware/error-handler';
import { logger } from '@/shared/utils/logger';

dotenv.config();

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    credentials: true,
  },
});

// Middleware
app.use(helmet());
app.use(cors({ origin: process.env.CORS_ORIGIN }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Routes
// TODO: Import and use routes

// Error handling
app.use(errorHandler);

// WebSocket connection
io.on('connection', socket => {
  logger.info(`Client connected: ${socket.id}`);

  socket.on('disconnect', () => {
    logger.info(`Client disconnected: ${socket.id}`);
  });

  // TODO: Setup socket handlers
});

const PORT = process.env.PORT || 3001;

httpServer.listen(PORT, () => {
  logger.info(`🚀 API Server running on port ${PORT}`);
  logger.info(`🎮 Environment: ${process.env.NODE_ENV}`);
});

export { app, io };

## apps/api/src/config/database.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY || '';

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Supabase credentials are missing');
}

export const supabase = createClient(supabaseUrl, supabaseServiceKey);

## apps/api/src/config/redis.ts
import Redis from 'ioredis';
import { logger } from '@/shared/utils/logger';

const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';

export const redis = new Redis(redisUrl, {
  retryStrategy: times => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
  maxRetriesPerRequest: 3,
});

redis.on('connect', () => {
  logger.info('✅ Redis connected');
});

redis.on('error', err => {
  logger.error('❌ Redis connection error:', err);
});

export default redis;

## apps/api/src/shared/utils/logger.ts
import winston from 'winston';

const logLevel = process.env.LOG_LEVEL || 'info';

export const logger = winston.createLogger({
  level: logLevel,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
    }),
  ],
});

## apps/api/src/shared/errors/app-error.ts
export class AppError extends Error {
  constructor(
    public message: string,
    public statusCode: number = 400,
    public isOperational: boolean = true
  ) {
    super(message);
    Object.setPrototypeOf(this, AppError.prototype);
    Error.captureStackTrace(this, this.constructor);
  }
}

export class NotFoundError extends AppError {
  constructor(message: string = 'Resource not found') {
    super(message, 404);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = 'Unauthorized') {
    super(message, 401);
  }
}

export class ValidationError extends AppError {
  constructor(message: string = 'Validation failed') {
    super(message, 422);
  }
}

## apps/api/src/presentation/middleware/error-handler.ts
import { Request, Response, NextFunction } from 'express';
import { AppError } from '@/shared/errors/app-error';
import { logger } from '@/shared/utils/logger';

export function errorHandler(
  err: Error | AppError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  logger.error('Unhandled error:', err);

  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
}

# PARTE 5: PACKAGES

## packages/types/package.json
{
  "name": "@catan-mvp/types",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "lint": "eslint src --ext .ts",
    "clean": "rm -rf dist"
  },
  "devDependencies": {
    "typescript": "^5.7.2"
  }
}

## packages/types/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

## packages/types/src/game.types.ts
export enum GameType {
  SINGLE_PLAYER = 'single',
  MULTIPLAYER = 'multiplayer',
}

export enum GameStatus {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
}

export interface Game {
  id: string;
  roomCode?: string;
  gameType: GameType;
  isPrivate: boolean;
  maxPlayers: number;
  currentPlayers: number;
  status: GameStatus;
  winnerId?: string;
  createdAt: Date;
  startedAt?: Date;
  finishedAt?: Date;
}

## packages/types/src/player.types.ts
export enum PlayerColor {
  RED = 'red',
  BLUE = 'blue',
  WHITE = 'white',
  ORANGE = 'orange',
}

export interface Player {
  id: string;
  username: string;
  email: string;
  avatarUrl?: string;
  totalGames: number;
  wins: number;
  createdAt: Date;
}

export interface GamePlayer {
  id: string;
  gameId: string;
  playerId: string;
  isBot: boolean;
  playerOrder: number;
  color: PlayerColor;
  victoryPoints: number;
  resources: Resources;
  developmentCards: DevelopmentCard[];
  joinedAt: Date;
}

export interface Resources {
  wood: number;
  brick: number;
  sheep: number;
  wheat: number;
  ore: number;
}

export enum DevelopmentCardType {
  KNIGHT = 'knight',
  VICTORY_POINT = 'victory_point',
  ROAD_BUILDING = 'road_building',
  YEAR_OF_PLENTY = 'year_of_plenty',
  MONOPOLY = 'monopoly',
}

export interface DevelopmentCard {
  type: DevelopmentCardType;
  played: boolean;
}

## packages/types/src/board.types.ts
export enum ResourceType {
  WOOD = 'wood',
  BRICK = 'brick',
  SHEEP = 'sheep',
  WHEAT = 'wheat',
  ORE = 'ore',
  DESERT = 'desert',
}

export interface HexTile {
  id: number;
  resourceType: ResourceType;
  diceNumber?: number; // 2-12, undefined for desert
  position: { q: number; r: number }; // Cube coordinates
  hasRobber: boolean;
}

export enum BuildingType {
  ROAD = 'road',
  SETTLEMENT = 'settlement',
  CITY = 'city',
}

export interface Building {
  type: BuildingType;
  playerId: string;
  position: Position;
}

export interface Position {
  q: number;
  r: number;
  s?: number;
}

export interface Board {
  hexagons: HexTile[];
  buildings: Building[];
  robberPosition: Position;
}

## packages/types/src/socket.types.ts
export enum SocketEvent {
  // Connection
  JOIN_ROOM = 'join:room',
  LEAVE_ROOM = 'leave:room',
  ROOM_UPDATED = 'room:updated',
  
  // Game flow
  GAME_START = 'game:start',
  TURN_START = 'turn:start',
  DICE_ROLLED = 'dice:rolled',
  
  // Actions
  BUILD_ROAD = 'build:road',
  BUILD_SETTLEMENT = 'build:settlement',
  BUILD_CITY = 'build:city',
  BUY_DEV_CARD = 'buy:devcard',
  
  // Trade
  TRADE_OFFERED = 'trade:offered',
  TRADE_ACCEPTED = 'trade:accepted',
  TRADE_DECLINED = 'trade:declined',
  
  // Updates
  RESOURCES_UPDATED = 'resources:updated',
  BOARD_UPDATED = 'board:updated',
  GAME_ENDED = 'game:ended',
  
  // Errors
  ERROR = 'error',
}

export interface SocketPayload<T = any> {
  event: SocketEvent;
  data: T;
  timestamp: Date;
}

## packages/types/src/index.ts
export * from './game.types';
export * from './player.types';
export * from './board.types';
export * from './socket.types';

## packages/game-engine/package.json
{
  "name": "@catan-mvp/game-engine",
  "version": "1.0.0",
  "private": true,
  "main": "./src/index.ts",
  "types": "./src/index.ts",
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "lint": "eslint src --ext .ts",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "@catan-mvp/types": "workspace:*"
  },
  "devDependencies": {
    "typescript": "^5.7.2",
    "jest": "^29.7.0",
    "@types/jest": "^29.5.14",
    "ts-jest": "^29.2.5"
  }
}

## packages/game-engine/tsconfig.json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}

## packages/game-engine/src/index.ts
export * from './core/board/board-generator';
export * from './core/rules/building-rules';
export * from './core/dice/dice-roller';
export * from './bot/bot-player';

## packages/game-engine/src/core/dice/dice-roller.ts
export class DiceRoller {
  /**
   * Roll two 6-sided dice
   * @returns Sum of two dice (2-12)
   */
  static roll(): number {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    return die1 + die2;
  }

  /**
   * Roll with a seed for deterministic testing
   */
  static rollWithSeed(seed: number): number {
    const random = Math.sin(seed) * 10000;
    const die1 = Math.floor((random - Math.floor(random)) * 6) + 1;
    const die2 = Math.floor((random * 2 - Math.floor(random * 2)) * 6) + 1;
    return die1 + die2;
  }
}

# PARTE 6: CONFIGURAÇÃO CLAUDE CODE

## .claude/settings.json
{
  "projectName": "catan-mvp",
  "description": "Full-stack multiplayer board game with clean architecture",
  "version": "1.0.0",
  
  "stack": {
    "frontend": "Next.js 15 + React 19 + TypeScript + Radix UI + Tailwind CSS 4",
    "backend": "Node.js 22 + TypeScript + Express + Socket.io",
    "database": "Supabase PostgreSQL",
    "cache": "Upstash Redis (local: Redis)",
    "orm": "Supabase JS SDK",
    "monorepo": "Turborepo",
    "containerization": "Docker + Docker Compose"
  },
  
  "architecture": {
    "pattern": "Clean Architecture",
    "layers": ["domain", "application", "infrastructure", "presentation"],
    "naming": "kebab-case for files/folders, PascalCase for classes/interfaces",
    "imports": "Absolute paths via tsconfig paths"
  },
  
  "conventions": {
    "naming": {
      "files": "kebab-case",
      "folders": "kebab-case",
      "classes": "PascalCase",
      "interfaces": "PascalCase (with I prefix for interfaces in domain layer)",
      "types": "PascalCase",
      "functions": "camelCase",
      "constants": "UPPER_SNAKE_CASE",
      "components": "PascalCase folders with index.tsx"
    },
    "structure": {
      "frontend": "Feature-based with colocation",
      "backend": "Clean architecture layers",
      "shared": "Packages for cross-cutting concerns"
    },
    "testing": {
      "unit": "Jest for business logic",
      "integration": "Supertest for API",
      "e2e": "Playwright (future)",
      "coverage": ">80% for game-engine package"
    }
  },
  
  "permissions": {
    "allow": [
      "Read",
      "Grep",
      "Glob",
      "LS",
      "Bash(npm *)",
      "Bash(pnpm *)",
      "Bash(turbo *)",
      "Bash(docker *)",
      "Bash(docker-compose *)",
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Write(apps/**/*.{ts,tsx,css,json})",
      "Write(packages/**/*.{ts,tsx})",
      "Write(**/*.md)",
      "Write(.env.*.example)",
      "Write(docker-compose.yml)",
      "Write(Dockerfile*)",
      "Write(.github/**/*.yml)"
    ],
    "deny": [
      "Read(.env*)",
      "Read(**/*.key)",
      "Read(**/*.pem)",
      "Bash(rm -rf *)",
      "Bash(git push *)",
      "Bash(git commit *)",
      "Bash(npm publish *)",
      "Write(node_modules/**)",
      "Write(dist/**)",
      "Write(.next/**)",
      "Write(build/**)"
    ]
  },
  
  "env": {
    "development": {
      "DATABASE_URL": "postgresql://postgres:postgres@localhost:5432/catan_dev",
      "REDIS_URL": "redis://:catan_redis_pass@localhost:6379",
      "NEXT_PUBLIC_API_URL": "http://localhost:3001",
      "NEXT_PUBLIC_WS_URL": "ws://localhost:3001",
      "NODE_ENV": "development",
      "PORT": 3001
    },
    "production": {
      "DATABASE_URL": "Use Supabase connection string",
      "REDIS_URL": "Use Upstash Redis URL",
      "NEXT_PUBLIC_API_URL": "Your Railway/Render URL",
      "NODE_ENV": "production"
    }
  },
  
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|MultiEdit|Write",
        "hooks": [
          {
            "type": "command",
            "command": "$CLAUDE_PROJECT_DIR/.claude/hooks/typescript-dev.sh",
            "description": "Type check and format TypeScript files"
          }
        ]
      }
    ]
  },
  
  "agents": [
    "code-reviewer",
    "debugger",
    "test-runner",
    "nextjs-expert",
    "websocket-expert",
    "game-engine-architect",
    "supabase-expert",
    "redis-cache-expert",
    "clean-architecture"
  ],
  
  "commands": [
    "/setup",
    "/dev",
    "/test",
    "/review",
    "/deploy",
    "/game-test",
    "/db-migrate"
  ]
}

## .claude/agents/clean-architecture.md
# Clean Architecture Expert

You are an expert in Clean Architecture principles and their application in TypeScript/Node.js projects.

## Core Principles

### 1. Dependency Rule
- Dependencies point inward only
- Inner layers know nothing about outer layers
- Domain layer is the core (no external dependencies)

### 2. Layer Structure
```
Domain Layer (Entities, Value Objects, Interfaces)
    ↑
Application Layer (Use Cases, DTOs)
    ↑
Infrastructure Layer (Repositories, External Services)
    ↑
Presentation Layer (Controllers, Routes, WebSocket Handlers)
```

### 3. Domain Layer
**Location**: `apps/api/src/domain/`

**Contains**:
- **Entities**: Core business objects with identity
  ```typescript
  // game.entity.ts
  export class Game {
    constructor(
      public readonly id: string,
      public roomCode: string,
      public status: GameStatus,
      // ... pure domain logic, no dependencies
    ) {}
    
    canStart(): boolean {
      return this.currentPlayers >= 3 && this.status === GameStatus.WAITING;
    }
  }
  ```

- **Value Objects**: Immutable objects without identity
  ```typescript
  // resources.vo.ts
  export class Resources {
    constructor(
      public readonly wood: number,
      public readonly brick: number,
      public readonly sheep: number,
      public readonly wheat: number,
      public readonly ore: number
    ) {
      if (wood < 0 || brick < 0) throw new Error('Resources cannot be negative');
    }
    
    add(other: Resources): Resources {
      return new Resources(
        this.wood + other.wood,
        this.brick + other.brick,
        // ...
      );
    }
  }
  ```

- **Repository Interfaces**: Contracts for data access
  ```typescript
  // game.repository.interface.ts
  export interface IGameRepository {
    create(game: Game): Promise<Game>;
    findById(id: string): Promise<Game | null>;
    update(game: Game): Promise<void>;
    delete(id: string): Promise<void>;
  }
  ```

**Rules**:
- No dependencies on outer layers
- No frameworks (Express, Socket.io, etc.)
- Pure TypeScript/JavaScript
- Business logic only

### 4. Application Layer
**Location**: `apps/api/src/application/`

**Contains**:
- **Use Cases**: Application-specific business rules
  ```typescript
  // create-game.use-case.ts
  export class CreateGameUseCase {
    constructor(
      private gameRepository: IGameRepository,
      private eventEmitter: IEventEmitter
    ) {}
    
    async execute(input: CreateGameInput): Promise<CreateGameOutput> {
      const game = new Game(
        generateId(),
        input.roomCode,
        GameStatus.WAITING
      );
      
      await this.gameRepository.create(game);
      await this.eventEmitter.emit('game:created', game);
      
      return { gameId: game.id };
    }
  }
  ```

- **DTOs**: Data Transfer Objects
  ```typescript
  // create-game.dto.ts
  export interface CreateGameInput {
    roomCode: string;
    gameType: GameType;
    isPrivate: boolean;
    maxPlayers: number;
  }
  
  export interface CreateGameOutput {
    gameId: string;
  }
  ```

**Rules**:
- Depends only on domain interfaces
- No knowledge of database/framework specifics
- Orchestrates domain objects
- Returns DTOs, not entities

### 5. Infrastructure Layer
**Location**: `apps/api/src/infrastructure/`

**Contains**:
- **Repository Implementations**:
  ```typescript
  // supabase-game.repository.ts
  export class SupabaseGameRepository implements IGameRepository {
    constructor(private supabase: SupabaseClient) {}
    
    async create(game: Game): Promise<Game> {
      const { data, error } = await this.supabase
        .from('games')
        .insert(this.toDatabase(game))
        .single();
      
      if (error) throw new Error(error.message);
      return this.toDomain(data);
    }
    
    private toDatabase(game: Game): any {
      // Map domain entity to database schema
    }
    
    private toDomain(data: any): Game {
      // Map database row to domain entity
    }
  }
  ```

- **External Services**:
  ```typescript
  // redis.service.ts
  export class RedisService implements ICacheService {
    constructor(private redis: Redis) {}
    
    async set(key: string, value: any, ttl?: number): Promise<void> {
      await this.redis.set(key, JSON.stringify(value), 'EX', ttl || 3600);
    }
  }
  ```

- **WebSocket Handlers**:
  ```typescript
  // game.handler.ts
  export class GameSocketHandler {
    constructor(
      private io: Server,
      private createGameUseCase: CreateGameUseCase
    ) {}
    
    handle(socket: Socket) {
      socket.on('game:create', async (data) => {
        try {
          const result = await this.createGameUseCase.execute(data);
          socket.emit('game:created', result);
        } catch (error) {
          socket.emit('error', { message: error.message });
        }
      });
    }
  }
  ```

**Rules**:
- Implements interfaces from domain
- Contains all external dependencies
- Handles data mapping (DB ↔ Domain)
- Framework-specific code lives here

### 6. Presentation Layer
**Location**: `apps/api/src/presentation/`

**Contains**:
- **Controllers**: HTTP request handlers
  ```typescript
  // game.controller.ts
  export class GameController {
    constructor(private createGameUseCase: CreateGameUseCase) {}
    
    async create(req: Request, res: Response) {
      try {
        const input: CreateGameInput = req.body;
        const result = await this.createGameUseCase.execute(input);
        res.status(201).json(result);
      } catch (error) {
        res.status(400).json({ error: error.message });
      }
    }
  }
  ```

- **Routes**: Express route definitions
  ```typescript
  // game.routes.ts
  export function createGameRoutes(controller: GameController): Router {
    const router = Router();
    router.post('/games', (req, res) => controller.create(req, res));
    return router;
  }
  ```

- **Middleware**: Express middleware
  ```typescript
  // validate.middleware.ts
  export function validateBody(schema: ZodSchema) {
    return (req: Request, res: Response, next: NextFunction) => {
      try {
        req.body = schema.parse(req.body);
        next();
      } catch (error) {
        res.status(422).json({ error: 'Validation failed' });
      }
    };
  }
  ```

**Rules**:
- Thin layer - just adapts use cases to HTTP/WebSocket
- No business logic
- Depends on application layer
- Framework-specific (Express, Socket.io)

## Dependency Injection

### Manual DI (for MVP)
```typescript
// server.ts
const supabase = createClient(/* config */);
const redis = new Redis(/* config */);

// Infrastructure
const gameRepository = new SupabaseGameRepository(supabase);
const cacheService = new RedisService(redis);

// Application
const createGameUseCase = new CreateGameUseCase(gameRepository, cacheService);
const joinGameUseCase = new JoinGameUseCase(gameRepository);

// Presentation
const gameController = new GameController(createGameUseCase, joinGameUseCase);
const gameRoutes = createGameRoutes(gameController);

app.use('/api', gameRoutes);
```

### Future: InversifyJS (if project grows)
```typescript
// di-container.ts
const container = new Container();
container.bind<IGameRepository>('GameRepository').to(SupabaseGameRepository);
container.bind<CreateGameUseCase>('CreateGameUseCase').to(CreateGameUseCase);
```

## Testing Strategy

### Domain Layer
```typescript
// game.entity.spec.ts
describe('Game Entity', () => {
  it('should not start with less than 3 players', () => {
    const game = new Game('1', 'ABC123', GameStatus.WAITING);
    game.currentPlayers = 2;
    
    expect(game.canStart()).toBe(false);
  });
});
```

### Application Layer
```typescript
// create-game.use-case.spec.ts
describe('CreateGameUseCase', () => {
  it('should create a game', async () => {
    const mockRepo: IGameRepository = {
      create: jest.fn().mockResolvedValue(mockGame),
    };
    
    const useCase = new CreateGameUseCase(mockRepo);
    const result = await useCase.execute(input);
    
    expect(mockRepo.create).toHaveBeenCalled();
    expect(result.gameId).toBeDefined();
  });
});
```

### Infrastructure Layer
```typescript
// supabase-game.repository.spec.ts (integration test)
describe('SupabaseGameRepository', () => {
  let repository: SupabaseGameRepository;
  
  beforeAll(async () => {
    // Setup test database
    repository = new SupabaseGameRepository(testSupabase);
  });
  
  it('should persist and retrieve a game', async () => {
    const game = new Game('1', 'TEST', GameStatus.WAITING);
    await repository.create(game);
    
    const retrieved = await repository.findById('1');
    expect(retrieved?.roomCode).toBe('TEST');
  });
});
```

## Common Mistakes to Avoid

❌ **Domain depending on infrastructure**:
```typescript
// game.entity.ts - WRONG
import { supabase } from '@/config/database';

export class Game {
  async save() {
    await supabase.from('games').insert(this); // NO!
  }
}
```

✅ **Correct**:
```typescript
// game.entity.ts - RIGHT
export class Game {
  // Pure domain logic only, no persistence
}

// supabase-game.repository.ts
export class SupabaseGameRepository implements IGameRepository {
  async save(game: Game) {
    await this.supabase.from('games').insert(game);
  }
}
```

❌ **Use case returning entity**:
```typescript
// WRONG
async execute(): Promise<Game> {
  return await this.repository.findById(id); // Leaking domain entity
}
```

✅ **Correct**:
```typescript
// RIGHT
async execute(): Promise<GameDTO> {
  const game = await this.repository.findById(id);
  return this.toDTO(game); // Return DTO
}
```

## Project-Specific Guidance

### For Catan MVP:
1. **Domain**: Game, Player, Board entities + building/trading rules
2. **Application**: Use cases for each game action (roll dice, build, trade)
3. **Infrastructure**: Supabase repos, Redis cache, Socket.io handlers
4. **Presentation**: Express controllers, WebSocket event handlers

### File Naming:
- Entities: `game.entity.ts`
- Value Objects: `resources.vo.ts`
- Use Cases: `create-game.use-case.ts`
- Repositories: `supabase-game.repository.ts`
- Controllers: `game.controller.ts`

### Folder Structure Example:
```
src/
├── domain/
│   ├── entities/
│   │   ├── game.entity.ts
│   │   └── player.entity.ts
│   ├── repositories/
│   │   └── game.repository.interface.ts
│   └── value-objects/
│       └── resources.vo.ts
├── application/
│   ├── use-cases/
│   │   └── game/
│   │       ├── create-game.use-case.ts
│   │       └── join-game.use-case.ts
│   └── dto/
│       └── game.dto.ts
├── infrastructure/
│   ├── database/
│   │   └── repositories/
│   │       └── supabase-game.repository.ts
│   └── websocket/
│       └── handlers/
│           └── game.handler.ts
└── presentation/
    ├── controllers/
    │   └── game.controller.ts
    └── routes/
        └── game.routes.ts
```

## Code Review Checklist

When reviewing code, check:
- [ ] Domain layer has no external dependencies
- [ ] Use cases depend only on domain interfaces
- [ ] Repositories implement domain interfaces
- [ ] Controllers are thin adapters
- [ ] DTOs used for data transfer
- [ ] Entities contain business logic
- [ ] Value objects are immutable
- [ ] Dependencies point inward only
- [ ] Tests are isolated per layer

## Additional Resources
- Clean Architecture by Robert C. Martin
- Domain-Driven Design by Eric Evans
- Implementing Domain-Driven Design by Vaughn Vernon

## .claude/hooks/typescript-dev.sh
#!/bin/bash

# TypeScript Development Hook
# Auto-formats and type-checks on file save

FILE_PATH="$1"

# Skip non-TypeScript files
if [[ ! "$FILE_PATH" =~ \.(ts|tsx)$ ]]; then
  exit 0
fi

# Skip generated/build directories
if [[ "$FILE_PATH" =~ (node_modules|\.next|dist|build|coverage) ]]; then
  exit 0
fi

echo "🔍 Processing: $FILE_PATH"

# Determine workspace
if [[ "$FILE_PATH" =~ apps/web ]]; then
  WORKSPACE="apps/web"
elif [[ "$FILE_PATH" =~ apps/api ]]; then
  WORKSPACE="apps/api"
elif [[ "$FILE_PATH" =~ packages/ ]]; then
  WORKSPACE=$(echo "$FILE_PATH" | grep -oP 'packages/[^/]+')
else
  WORKSPACE="."
fi

cd "$WORKSPACE" || exit 1

# Format with Prettier
echo "  ✨ Formatting..."
npx prettier --write "$FILE_PATH" 2>/dev/null

# Type check (fast, no emit)
echo "  🔎 Type checking..."
npx tsc --noEmit --pretty 2>&1 | head -20

# Lint (auto-fix)
echo "  🧹 Linting..."
npx eslint "$FILE_PATH" --fix --quiet 2>/dev/null || true

echo "✅ Done processing $FILE_PATH"

# PARTE 7: COMANDOS CUSTOMIZADOS

## .claude/commands/setup.md
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
Check if ports 3000, 3001, 5432, 6379, 54323 are available:
```bash
lsof -i :3000
lsof -i :3001
```

### Database Connection
Verify Supabase is running:
```bash
docker ps | grep catan-postgres
```

## .claude/commands/dev.md
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

## .claude/commands/game-test.md
# Game Testing Command

Run comprehensive tests for game logic and mechanics.

## Usage

```
/game-test [suite]
```

## Test Suites

### All Tests
```bash
npm run test
```

### Game Engine Tests
```bash
cd packages/game-engine
npm run test
```

Tests:
- Board generation
- Hexagon placement
- Resource distribution
- Building rules validation
- Victory point calculation

### Bot AI Tests
```bash
cd packages/game-engine
npm run test -- bot
```

Tests:
- Random strategy
- Medium strategy
- Hard strategy (Monte Carlo)
- Decision making

### API Integration Tests
```bash
cd apps/api
npm run test:integration
```

Tests:
- Game creation flow
- Player joining
- WebSocket events
- Database persistence

### E2E Tests
```bash
cd apps/web
npm run test:e2e
```

Tests:
- Complete game flow
- Multiplayer synchronization
- UI interactions

## Coverage

Generate coverage report:
```bash
npm run test:coverage
```

Target coverage: >80% for game-engine package

## Watch Mode

Run tests in watch mode during development:
```bash
cd packages/game-engine
npm run test:watch
```

## Performance Tests

Run performance benchmarks:
```bash
cd packages/game-engine
npm run test:perf
```

Tests:
- Board generation time
- Bot decision speed
- Rule validation performance

## .claude/commands/deploy.md
# Deployment Command

Deploy application to production environments.

## Platforms

### Frontend (Vercel)

#### Initial Setup
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Link project
cd apps/web
vercel link
```

#### Deploy
```bash
# Preview deployment
cd apps/web
vercel

# Production deployment
vercel --prod
```

#### Environment Variables
Set in Vercel dashboard:
- `NEXT_PUBLIC_API_URL`: Your Railway/Render API URL
- `NEXT_PUBLIC_WS_URL`: Your WebSocket URL
- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key

### Backend (Railway)

#### Initial Setup
```bash
# Install Railway CLI
npm i -g @railway/cli

# Login
railway login

# Create project
cd apps/api
railway init
```

#### Deploy
```bash
cd apps/api
railway up
```

#### Environment Variables
Set in Railway dashboard:
- `DATABASE_URL`: Supabase connection string
- `REDIS_URL`: Upstash Redis URL
- `JWT_SECRET`: Generate secure secret
- `CORS_ORIGIN`: Your Vercel URL
- `NODE_ENV`: production

### Alternative: Render

#### Deploy API to Render
1. Connect GitHub repo
2. Select `apps/api` as root directory
3. Build command: `npm install && npm run build`
4. Start command: `npm start`
5. Set environment variables

### Database (Supabase)

#### Create Project
1. Go to supabase.com
2. Create new project
3. Wait for database provisioning
4. Get connection string

#### Run Migrations
```bash
# Install Supabase CLI
npm i -g supabase

# Link project
supabase link --project-ref your-project-ref

# Push migrations
supabase db push
```

### Cache (Upstash Redis)

#### Setup
1. Go to upstash.com
2. Create Redis database
3. Copy REST URL
4. Add to environment variables

## Deployment Checklist

- [ ] Environment variables set in all platforms
- [ ] Database migrations applied
- [ ] CORS origins configured
- [ ] API keys rotated (not using dev keys)
- [ ] Monitoring setup (optional: Sentry, LogRocket)
- [ ] Domain configured (optional)

## Rollback

### Vercel
```bash
vercel rollback
```

### Railway
```bash
railway rollback
```

## Monitoring

Check application health:
- Vercel: https://vercel.com/dashboard
- Railway: https://railway.app/dashboard
- Supabase: https://app.supabase.com

## CI/CD (GitHub Actions)

See `.github/workflows/deploy.yml` for automated deployments.

# PARTE 8: TSCONFIG BASE

## tsconfig.base.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2022"],
    "module": "commonjs",
    "moduleResolution": "node",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "composite": true,
    "incremental": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true
  }
}

# PARTE 9: README

## README.md
# 🎲 Catan MVP - Full Stack Multiplayer Board Game

A modern, full-stack implementation of the classic Catan board game with both single-player (vs AI) and multiplayer modes.

## 🚀 Features

### Game Modes
- **Single Player**: Play against AI bots with adjustable difficulty
- **Multiplayer**: Create private or public rooms to play with friends or random players

### Tech Stack
- **Frontend**: Next.js 15, React 19, TypeScript, Radix UI, Tailwind CSS 4
- **Backend**: Node.js 22, TypeScript, Express, Socket.io
- **Database**: Supabase (PostgreSQL)
- **Cache**: Upstash Redis
- **Monorepo**: Turborepo
- **Containerization**: Docker

## 📁 Project Structure

```
catan-mvp/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Node.js backend (Clean Architecture)
├── packages/
│   ├── game-engine/  # Core game logic
│   ├── types/        # Shared TypeScript types
│   └── ui/           # Shared UI components
└── .claude/          # Claude Code configuration
```

## 🏗️ Architecture

This project follows **Clean Architecture** principles:

- **Domain Layer**: Pure business logic (entities, rules)
- **Application Layer**: Use cases (game actions)
- **Infrastructure Layer**: External services (DB, cache, WebSocket)
- **Presentation Layer**: Controllers and routes

## 🛠️ Getting Started

### Prerequisites
- Node.js ≥ 22.21.1
- npm ≥ 10.9.2
- Docker & Docker Compose

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd catan-mvp
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

Edit the files with your actual credentials.

4. **Start Docker services**
```bash
docker-compose up -d
```

5. **Run database migrations**
```bash
cd apps/api
npm run db:migrate
```

6. **Start development servers**
```bash
npm run dev
```

Visit:
- Frontend: http://localhost:3000
- API: http://localhost:3001
- Supabase Studio: http://localhost:54323

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run specific test suite
cd packages/game-engine && npm run test

# Run with coverage
npm run test:coverage
```

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd apps/web
vercel --prod
```

### Backend (Railway)
```bash
cd apps/api
railway up
```

See [deployment guide](.claude/commands/deploy.md) for detailed instructions.

## 📝 Development

### Available Commands
- `npm run dev` - Start all dev servers
- `npm run build` - Build all apps
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run format` - Format with Prettier

### Code Conventions
- **Naming**: kebab-case for files/folders, PascalCase for classes
- **Architecture**: Clean Architecture with DDD patterns
- **Testing**: Jest for unit tests, >80% coverage for game-engine

## 🤝 Contributing

This is a learning/portfolio project. Contributions are welcome!

1. Follow the Clean Architecture patterns
2. Write tests for new features
3. Follow the naming conventions
4. Update documentation

## 📄 License

MIT License - feel free to use this project for learning purposes.

## 🙏 Acknowledgments

- Inspired by the classic Catan board game
- Built with modern web technologies
- Powered by Claude Code for development assistance

---

**Note**: This is a MVP project created for learning and demonstration purposes. It is not affiliated with or endorsed by Catan Studio or the official Catan game.

# PARTE 10: GITHUB WORKFLOWS

## .github/workflows/ci.yml
name: CI

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main, develop]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [22.x]
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Lint
        run: npm run lint
      
      - name: Type check
        run: npx turbo run build --dry-run
      
      - name: Run tests
        run: npm run test
      
      - name: Generate coverage
        run: npm run test:coverage
      
      - name: Upload coverage
        uses: codecov/codecov-action@v4
        with:
          files: ./coverage/lcov.info

  build:
    runs-on: ubuntu-latest
    needs: test
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build

## .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy-frontend:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
      
      - name: Install Vercel CLI
        run: npm install -g vercel
      
      - name: Deploy to Vercel
        working-directory: apps/web
        env:
          VERCEL_TOKEN: ${{ secrets.VERCEL_TOKEN }}
          VERCEL_ORG_ID: ${{ secrets.VERCEL_ORG_ID }}
          VERCEL_PROJECT_ID: ${{ secrets.VERCEL_PROJECT_ID }}
        run: vercel --prod --token=$VERCEL_TOKEN

  deploy-backend:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v4
      
      - name: Deploy to Railway
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
        run: |
          npm install -g @railway/cli
          cd apps/api
          railway up

---

## ✅ PROJETO CRIADO COM SUCESSO

A estrutura completa do projeto Catan MVP foi criada seguindo:

✅ Clean Architecture com 4 camadas bem definidas
✅ Monorepo com Turborepo
✅ Next.js 15 + React 19 para frontend
✅ Node.js 22 + Express + Socket.io para backend
✅ Supabase PostgreSQL para database
✅ Redis para cache
✅ Docker Compose para desenvolvimento local
✅ TypeScript em todos os projetos
✅ Convenções kebab-case
✅ Testes unitários e integração
✅ CI/CD com GitHub Actions
✅ Claude Code configuration completa

## 🎯 Próximos Passos

1. Execute `npm install` na raiz do projeto
2. Configure os arquivos `.env`
3. Inicie os serviços Docker: `docker-compose up -d`
4. Execute as migrations: `cd apps/api && npm run db:migrate`
5. Inicie os servidores: `npm run dev`
6. Acesse http://localhost:3000 🎲

Divirta-se desenvolvendo o Catan MVP! 🚀
```

Execute este comando completo no Claude Code e toda a estrutura será criada automaticamente!