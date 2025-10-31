Perfeito 👍 — com base no arquivo `SETUP_CATAN.MD`, aqui está um **`README.md` completo e profissional** para o projeto **Catan MVP**, resumindo toda a estrutura, stack e instruções de execução do setup que o arquivo define:

---

```markdown
# 🎲 Catan MVP - Full Stack Multiplayer Board Game

Um MVP completo e moderno do jogo **Catan**, desenvolvido com uma arquitetura **clean**, **monorepo**, e suporte a **modo multiplayer** e **single player com IA**.

---

## 🧱 Stack Tecnológica

| Camada | Tecnologias |
|:--|:--|
| **Frontend** | Next.js 15 • React 19 • TypeScript • Radix UI • Tailwind CSS 4 |
| **Backend** | Node.js 22 • Express • Socket.io • TypeScript |
| **Database** | Supabase PostgreSQL |
| **Cache** | Upstash Redis (Redis local em dev) |
| **Infraestrutura** | Turborepo • Docker • Docker Compose |
| **Arquitetura** | Clean Architecture (Domain, Application, Infrastructure, Presentation) |

---

## 🧩 Estrutura do Projeto (Monorepo)

```

catan-mvp/
├── apps/
│   ├── web/      → Frontend (Next.js)
│   └── api/      → Backend (Express + Socket.io)
├── packages/
│   ├── game-engine/ → Motor de regras e IA
│   ├── types/       → Tipos compartilhados
│   └── ui/          → Componentes compartilhados
├── .github/         → CI/CD (GitHub Actions)
├── docker-compose.yml
├── turbo.json
└── package.json

```

---

## 🏗️ Arquitetura

O projeto segue **Clean Architecture**, isolando camadas e responsabilidades:

```

Domain → Application → Infrastructure → Presentation

````

- **Domain** → Entidades e regras puras do jogo (sem dependências externas)
- **Application** → Casos de uso (ex: criar partida, rolar dados, trocar recursos)
- **Infrastructure** → Persistência (Supabase), cache (Redis), WebSocket handlers
- **Presentation** → Controladores HTTP, rotas Express, páginas Next.js

---

## ⚙️ Setup do Ambiente

### 1️⃣ Clonar o projeto
```bash
git clone https://github.com/seu-usuario/catan-mvp.git
cd catan-mvp
````

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Configurar variáveis de ambiente

Copie os exemplos:

```bash
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

Atualize as chaves Supabase/Redis conforme necessário.

### 4️⃣ Subir os serviços Docker

```bash
docker-compose up -d
```

Isso iniciará:

* PostgreSQL (porta 5432)
* Redis (porta 6379)
* Supabase Studio (porta 54323)
* API (porta 3001, se configurada)

### 5️⃣ Migrar e popular o banco

```bash
cd apps/api
npm run db:migrate
npm run db:seed   # opcional
```

### 6️⃣ Rodar os servidores de desenvolvimento

```bash
npm run dev
```

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **API:** [http://localhost:3001/health](http://localhost:3001/health)
* **Supabase Studio:** [http://localhost:54323](http://localhost:54323)

---

## 🧠 Pacote `@catan-mvp/game-engine`

Implementa a lógica central do jogo:

* Geração de tabuleiro
* Regras de construção, recursos e comércio
* Gerenciador de turnos
* Estratégias de IA (random, medium, hard)

Rodar testes:

```bash
cd packages/game-engine
npm run test
```

---

## 💾 Banco e Cache

**Supabase PostgreSQL**

* Usado para persistência de jogos e jogadores
  **Redis (Upstash ou local)**
* Usado para cache de sessões e estado em tempo real

---

## 🧪 Testes

* **Unitários:** Jest (game-engine e API)
* **Integração:** Supertest (API)
* **E2E:** Playwright (planejado)
* Cobertura mínima esperada: **80%** no `game-engine`

---

## 🚀 Deploy

### Frontend

* **Plataforma:** [Vercel](https://vercel.com)
* Variáveis:

  * `NEXT_PUBLIC_API_URL`
  * `NEXT_PUBLIC_WS_URL`
  * `NEXT_PUBLIC_SUPABASE_URL`
  * `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Backend

* **Plataforma:** Railway ou Render
* Variáveis:

  * `DATABASE_URL`
  * `REDIS_URL`
  * `JWT_SECRET`
  * `CORS_ORIGIN`
  * `NODE_ENV=production`

---

## 🧭 Convenções e Boas Práticas

* **Nomenclatura:**

  * `kebab-case` → arquivos e pastas
  * `PascalCase` → classes e componentes
  * `camelCase` → funções e variáveis
* **Importações absolutas:** configuradas via `tsconfig.paths`
* **Camadas isoladas:** nenhuma dependência do domínio em infra/presentation
* **Code style:** ESLint + Prettier
* **Commits:** Seguir convenção *Conventional Commits*

---

## 🧰 Comandos úteis

| Comando               | Descrição                          |
| :-------------------- | :--------------------------------- |
| `npm run dev`         | Roda todos os serviços em modo dev |
| `npm run build`       | Compila todos os workspaces        |
| `npm run test`        | Executa todos os testes            |
| `npm run lint`        | Analisa código com ESLint          |
| `npm run docker:up`   | Sobe serviços Docker               |
| `npm run docker:down` | Encerra serviços Docker            |
| `npm run db:migrate`  | Executa migrações do banco         |
| `npm run db:seed`     | Insere dados iniciais              |

---

## 🤝 Contribuição

Pull Requests são bem-vindos!
Antes de contribuir:

1. Garanta que o código siga o style guide
2. Adicione/atualize testes relevantes
3. Rode `npm run lint && npm run test`

---

## 🧩 Licença

MIT © 2025 — Projeto **Catan MVP**

---

## 🧭 Referências

* *Clean Architecture* — Robert C. Martin
* *Domain-Driven Design* — Eric Evans
* Supabase Docs — [supabase.com/docs](https://supabase.com/docs)

```

---

Deseja que eu gere esse `README.md` em um arquivo pronto para download (`readme.md`) com essa formatação?
```
