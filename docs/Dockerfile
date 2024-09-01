FROM node:22.7.0-slim AS base
WORKDIR /app

# Instalar dependencias globales
RUN npm install -g pnpm

# By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# Therefore, the `-deps` steps will be skipped if only the source code changes.
COPY package.json pnpm-lock.yaml ./

FROM base AS prod-deps
RUN pnpm install --prod --frozen-lockfile

FROM base AS build-deps
RUN pnpm install --frozen-lockfile

FROM build-deps AS build
COPY . ./
RUN pnpm run build

FROM base AS runtime
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=80
EXPOSE 80
CMD node ./dist/server/entry.mjs


# ---

# FROM node:lts AS runtime
# WORKDIR /app

# COPY . .

# RUN npm install -g pnpm

# RUN pnpm install --frozen-lockfile
# RUN pnpm run build

# ENV HOST=0.0.0.0
# ENV PORT=80
# EXPOSE 80
# CMD node ./dist/server/entry.mjs


# ---

# FROM node:lts AS base
# WORKDIR /app

# # By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# # Therefore, the `-deps` steps will be skipped if only the source code changes.
# COPY package.json package-lock.json ./

# FROM base AS prod-deps
# RUN npm install --omit=dev

# FROM base AS build-deps
# RUN npm install

# FROM build-deps AS build
# COPY . .
# RUN npm run build

# FROM base AS runtime
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321
# CMD node ./dist/server/entry.mjs


# ---

# FROM node:22.7.0-slim AS base
# WORKDIR /app

# # Instalar dependencias globales
# RUN npm install -g pnpm

# # By copying only the package.json and pnpm-lock.yaml here, we ensure that the following `-deps` steps are independent of the source code.
# # Therefore, the `-deps` steps will be skipped if only the source code changes.
# COPY package.json pnpm-lock.yaml ./

# FROM base AS prod-deps
# RUN pnpm install --prod --frozen-lockfile

# FROM base AS build-deps
# RUN pnpm install --frozen-lockfile

# FROM build-deps AS build
# # Ensure the 'dist' directory is created before copying files
# RUN mkdir -p /app/dist

# COPY . .
# RUN pnpm run build

# FROM base AS runtime
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321
# CMD node ./dist/server/entry.mjs


# ---

# FROM node:22.7.0-slim AS base
# WORKDIR /app

# # Instalar dependencias globales
# RUN npm install -g pnpm

# # By copying only the package.json and package-lock.json here, we ensure that the following `-deps` steps are independent of the source code.
# # Therefore, the `-deps` steps will be skipped if only the source code changes.
# COPY package.json pnpm-lock.yaml ./

# FROM base AS prod-deps
# RUN pnpm install --prod --frozen-lockfile

# FROM base AS build-deps
# RUN pnpm install --frozen-lockfile

# FROM build-deps AS build
# COPY . ./
# RUN pnpm run build

# FROM base AS runtime
# COPY --from=prod-deps /app/node_modules ./node_modules
# COPY --from=build /app/dist ./dist

# ENV HOST=0.0.0.0
# ENV PORT=4321
# EXPOSE 4321
# CMD node ./dist/server/entry.mjs

