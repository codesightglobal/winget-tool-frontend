# Stage 1: Build
FROM node:22-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install --frozen-lockfile

COPY . .
RUN npm run build

# Stage 2: Run (production)
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
RUN npm install --omit=dev --frozen-lockfile

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
