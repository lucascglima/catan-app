# 🎲 Catan MVP - Full Stack Multiplayer Board Game

O **Catan MVP** é um projeto **full stack** que recria o clássico jogo de tabuleiro *Catan* com suporte a **multiplayer em tempo real** e **modo single-player com inteligência artificial**. Ele foi projetado com uma **arquitetura limpa**, **monorepo** e tecnologias modernas, visando escalabilidade, desempenho e organização de código.

---

## 🚀 Visão Geral

Este MVP (Minimum Viable Product) fornece uma base completa para desenvolvimento de jogos baseados em tabuleiros, integrando:

* Autenticação e gerenciamento de jogadores via Supabase.
* Sincronização em tempo real com Socket.io.
* Persistência em banco PostgreSQL e cache em Redis.
* Motor de regras de jogo (game engine) modular e testável.

---

## 🧱 Stack Tecnológica

| Camada             | Tecnologias                                                            |
| :----------------- | :--------------------------------------------------------------------- |
| **Frontend**       | Next.js 15 · React 19 · TypeScript · Radix UI · Tailwind CSS 4         |
| **Backend**        | Node.js 22 · Express · Socket.io · TypeScript                          |
| **Banco de Dados** | Supabase PostgreSQL                                                    |
| **Cache**          | Upstash Redis (ou Redis local para dev)                                |
| **Infraestrutura** | Turborepo · Docker · Docker Compose                                    |
| **Arquitetura**    | Clean Architecture (Domain, Application, Infrastructure, Presentation) |

---

## 🧩 Estrutura do Monorepo

```
catan-mvp/
├── apps/
│   ├── web/          → Frontend (Next.js)
│   └── api/          → Backend (Express + Socket.io)
├── packages/
│   ├── game-engine/  → Regras, lógica de jogo e IA
│   ├── types/        → Tipos e interfaces compartilhadas
│   └── ui/           → Componentes visuais reutilizáveis
├── .github/          → Workflows de CI/CD
├── docker-compose.yml
├── turbo.json
└── package.json
```

Cada workspace é independente, com seu próprio `package.json`, `tsconfig.json` e scripts de build/test.

---

## 🧭 Arquitetura Limpa (Clean Architecture)

A aplicação segue os princípios de **Clean Architecture**, garantindo separação de responsabilidades e baixo acoplamento:

```
Domain → Application → Infrastructure → Presentation
```

* **Domain** → Entidades, regras de negócio e objetos de valor (sem dependências externas)
* **Application** → Casos de uso e orquestração da lógica de negócio
* **Infrastructure** → Implementações de repositórios, integrações e serviços externos (Supabase, Redis)
* **Presentation** → Controladores HTTP, WebSockets, e UI (Next.js)

Essa divisão permite testar cada camada de forma isolada e escalar o projeto facilmente.

---

## ⚙️ Configuração do Ambiente de Desenvolvimento

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/catan-mvp.git
cd catan-mvp
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

Copie os arquivos de exemplo:

```bash
cp apps/web/.env.local.example apps/web/.env.local
cp apps/api/.env.example apps/api/.env
```

Edite as variáveis com suas chaves Supabase e configurações Redis.

### 4. Subir os serviços com Docker

```bash
docker-compose up -d
```

Serviços:

* PostgreSQL → `localhost:5432`
* Redis → `localhost:6379`
* Supabase Studio → `localhost:54323`

### 5. Migrar e popular o banco de dados

```bash
cd apps/api
npm run db:migrate
npm run db:seed   # opcional
```

### 6. Rodar em modo de desenvolvimento

```bash
npm run dev
```

Acesse:

* **Frontend:** [http://localhost:3000](http://localhost:3000)
* **API:** [http://localhost:3001/health](http://localhost:3001/health)
* **Supabase Studio:** [http://localhost:54323](http://localhost:54323)

---

## 🧠 Pacote `@catan-mvp/game-engine`

Implementa toda a lógica central do jogo:

* Geração procedural do tabuleiro.
* Regras de construção, recursos e comércio.
* Sistema de turnos e vitória.
* Inteligência artificial com três níveis de dificuldade.

### Executar testes

```bash
cd packages/game-engine
npm run test
```

---

## 🧪 Testes e Qualidade de Código

* **Unitários:** Jest (domínio e motor de jogo)
* **Integração:** Supertest (API)
* **E2E:** Playwright (planejado)
* **Cobertura:** >80% no `game-engine`

### Lint e formatação

```bash
npm run lint
npm run format
```

---

## 🧰 Comandos Principais

| Comando               | Descrição                                         |
| :-------------------- | :------------------------------------------------ |
| `npm run dev`         | Executa todos os serviços (web + api) em modo dev |
| `npm run build`       | Compila todos os pacotes com o Turborepo          |
| `npm run test`        | Roda todos os testes unitários e integração       |
| `npm run docker:up`   | Sobe os containers Docker                         |
| `npm run docker:down` | Encerra os containers Docker                      |
| `npm run db:migrate`  | Executa migrações do banco                        |
| `npm run db:seed`     | Popula o banco com dados iniciais                 |
| `npm run lint`        | Analisa o código com ESLint                       |
| `npm run clean`       | Remove builds e cache                             |

---

## ☁️ Deploy e Infraestrutura

### Frontend (Vercel)

```bash
npm i -g vercel
vercel login
vercel --prod
```

Variáveis de ambiente:

* `NEXT_PUBLIC_API_URL`
* `NEXT_PUBLIC_WS_URL`
* `NEXT_PUBLIC_SUPABASE_URL`
* `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### Backend (Railway ou Render)

```bash
npm i -g @railway/cli
railway login
railway up
```

Variáveis de ambiente:

* `DATABASE_URL`
* `REDIS_URL`
* `JWT_SECRET`
* `CORS_ORIGIN`

### Banco de Dados (Supabase)

* Crie um projeto em [supabase.com](https://supabase.com)
* Copie a string de conexão e configure no `.env`
* Rode `npm run db:migrate`

---

## 🧭 Convenções de Código

* **Arquivos/Pastas:** `kebab-case`
* **Classes e Componentes:** `PascalCase`
* **Funções e Variáveis:** `camelCase`
* **Constantes:** `UPPER_SNAKE_CASE`
* **Importações:** Absolutas via `tsconfig.paths`

Boas práticas:

* Nenhuma dependência do domínio em infraestrutura.
* Controladores finos (sem lógica de negócio).
* DTOs para transferência de dados.
* Testes isolados por camada.

---

## 🤝 Contribuindo

Pull Requests são bem-vindos! Antes de enviar:

1. Execute `npm run lint` e `npm run test`.
2. Garanta que o código está formatado e testado.
3. Descreva claramente sua alteração no PR.

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).

---

## 📚 Referências

* *Clean Architecture* — Robert C. Martin
* *Domain-Driven Design* — Eric Evans
* Supabase Docs — [https://supabase.com/docs](https://supabase.com/docs)
