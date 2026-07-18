# HOW to RUN the project
1- git clone the project
2- on main branch from the root directory run docker compose up --build it should run 3 containers , Backend, frontend and database/
3- after containers build visit http://localhost:3000/ 

# Nawy

Nawy is a full-stack apartment management application built as a monorepo with a Next.js frontend and an Express/Prisma backend.

## Project Overview

The project is organized into two main parts:

- Client: a modern web interface built with Next.js for browsing and managing apartment listings.
- Server: a REST-style backend built with Node.js, Express, and Prisma to handle apartment data and database operations.

## Main Features

- View apartment listings from the frontend
- Open apartment details and manage apartment records
- Create, update, and delete apartment information through the app
- Connect the client and server through a shared API layer
- Use PostgreSQL as the database with Prisma for schema management

## Tech Stack

### Frontend
- Next.js
- React
- TypeScript
- Tailwind CSS
- Axios
- shadcn/ui components

### Backend
- Node.js
- Express
- TypeScript
- Prisma ORM
- PostgreSQL
- Zod for validation

## Project Structure

- client/: frontend application
- server/: backend application and Prisma schema
- docker-compose.yml: container setup for the database, backend, and frontend

## Purpose

Nawy aims to provide a simple and scalable apartment management experience for users who want to manage property listings in a clean and structured web application.

## Notes

This repository is prepared as a monorepo, with the client and server separated into their own folders while sharing the same root project structure.
