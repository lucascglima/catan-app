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
