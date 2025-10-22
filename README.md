# OpenNext + Cloudflare Template

[![Use this template](https://img.shields.io/badge/use%20this-template-blue?style=for-the-badge)](https://github.com/monkedevlife/monkey-cf-template/generate)

A modern, production-ready full-stack template combining the best of Next.js with Cloudflare's edge infrastructure.

## ✨ Features

- 🚀 **OpenNext + Cloudflare Workers** - Deploy Next.js to the edge with 0ms cold starts
- 🔧 **Full-stack Type Safety** - End-to-end TypeScript from database to frontend
- 🎨 **Modern UI Stack** - ShadCN/UI components with Tailwind CSS v4
- 🗃️ **Database Ready** - Drizzle ORM with PostgreSQL and migrations
- 🔐 **Authentication Built-in** - BetterAuth with OAuth and email/password
- 📧 **Email Templates** - React Email with verification templates
- ⚡ **Performance Optimized** - Turbopack, edge deployment, connection pooling

## 🛠️ Tech Stack

- **🚀 [OpenNext](https://opennext.js.org/)** - Deploy Next.js to Cloudflare Workers
- **☁️ [Cloudflare Workers](https://workers.cloudflare.com/)** - Edge computing platform
- **🔧 [tRPC](https://trpc.io/)** - End-to-end typesafe APIs with Valibot validation
- **🎨 [ShadCN/UI](https://ui.shadcn.com/)** - Beautiful, accessible components
- **🗃️ [Drizzle ORM](https://orm.drizzle.team/)** - TypeScript ORM with migrations
- **🐘 [Neon PostgreSQL](https://neon.tech/)** - Serverless PostgreSQL database
- **🔐 [BetterAuth](https://www.better-auth.com/)** - Modern authentication with OAuth
- **⚡ [Next.js 15](https://nextjs.org/)** - React framework with App Router
- **🎨 [Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **📧 [React Email](https://react.email/)** - Email templates with React

## 🚀 Quick Start

### 1. Use This Template

Click the **"Use this template"** button above or [click here](https://github.com/monkedevlife/monkey-cf-template/generate) to create a new repository from this template.

### 2. Clone Your New Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME
```

### 3. Install Dependencies

This template uses **pnpm** as the package manager:

```bash
pnpm install
```

### 4. Set Up Environment Variables

```bash
cp .env.example .env
```

Generate a secure secret for BetterAuth:

```bash
pnpm generate-secret
```

Edit `.env` with your configuration:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/database"
BETTER_AUTH_SECRET="your-generated-secret-here"
BETTER_AUTH_URL="http://localhost:3000"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Optional: OAuth providers
GITHUB_CLIENT_ID=""
GITHUB_CLIENT_SECRET=""
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""

# Optional: Email configuration
SMTP_HOST=""
SMTP_PORT=""
SMTP_USER=""
SMTP_PASS=""
SMTP_FROM=""
```

### 5. Set Up Database

1. **Create a PostgreSQL database** (we recommend [Neon](https://neon.tech/) for serverless)
2. **Run database migrations**:
   ```bash
   pnpm db:push
   ```
3. **Optional**: Open Drizzle Studio to view your database:
   ```bash
   pnpm db:studio
   ```

### 6. Start Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application!

## 🚢 Deployment

### Prerequisites for Deployment

1. **Cloudflare account** - Sign up at [cloudflare.com](https://cloudflare.com)
2. **Wrangler CLI** - Already included in dependencies
3. **Database** - Set up a production PostgreSQL database

### Deploy to Cloudflare Workers

1. **Authenticate with Cloudflare**:

   ```bash
   pnpm wrangler login
   ```

2. **Set up environment variables** in Cloudflare Workers dashboard or use:

   ```bash
   pnpm wrangler secret put BETTER_AUTH_SECRET
   pnpm wrangler secret put DATABASE_URL
   # Add other secrets as needed
   ```

3. **Deploy**:

   ```bash
   pnpm deploy
   ```

4. **Preview before deploying**:
   ```bash
   pnpm preview
   ```

## 📁 Project Structure

```
├── .github/
│   └── template.yml         # GitHub template configuration
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── api/            # API routes (tRPC, auth)
│   │   └── (auth)/         # Authentication pages
│   ├── components/         # React components
│   │   └── ui/            # ShadCN UI components
│   ├── lib/               # Utilities and configurations
│   │   ├── auth/          # BetterAuth setup
│   │   ├── db/            # Database schema and connection
│   │   ├── emails/        # React Email templates
│   │   └── trpc/          # tRPC client and server setup
│   └── styles/            # Global styles
├── public/                # Static assets
├── drizzle/              # Database migrations (auto-generated)
├── wrangler.jsonc        # Cloudflare Workers configuration
├── open-next.config.ts   # OpenNext configuration
└── CLAUDE.md            # Instructions for Claude Code
```

## ⚙️ Configuration

### Database

- **Schema**: `src/lib/db/schema.ts` - BetterAuth-compatible schema
- **Migrations**: Use `pnpm db:generate` then `pnpm db:push`
- **Studio**: `pnpm db:studio` to open Drizzle Studio

### Authentication

- **Server**: `src/lib/auth/auth.ts` - BetterAuth configuration
- **Client**: `src/lib/auth/auth-client.ts` - React hooks
- **Email**: `src/lib/emails/` - Verification email templates

### API Layer

- **tRPC**: `src/lib/trpc/` - Type-safe API with Valibot validation
- **Context**: Database and session access in all procedures
- **Routers**: `src/lib/trpc/routers/` - Organized API endpoints

### Deployment

- **Cloudflare**: `wrangler.jsonc` - Worker and deployment settings
- **OpenNext**: `open-next.config.ts` - Minimal configuration for Cloudflare
- **Environment**: Set secrets in Cloudflare Workers dashboard

## 📜 Available Scripts

### Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server locally
- `pnpm lint` - Run Next.js linting

### Authentication

- `pnpm auth:generate` - Generate BetterAuth schema from auth config

### Database

- `pnpm db:generate` - Generate database migrations
- `pnpm db:migrate` - Run database migrations
- `pnpm db:push` - Push schema changes directly to database
- `pnpm db:studio` - Open Drizzle Studio database GUI

### Deployment

- `pnpm deploy` - Build and deploy to Cloudflare Workers
- `pnpm preview` - Build and preview deployment
- `pnpm cf-typegen` - Generate Cloudflare environment types

### Email Development

- `pnpm email:dev` - Start React Email dev server on port 3001

### Utilities

- `pnpm generate-secret` - Generate secure 32-character secret

## 🤝 Contributing

This template is designed to be a starting point for your projects. Feel free to:

- ⭐ Star this repository if you find it helpful
- 🐛 Report issues or bugs
- 💡 Suggest new features or improvements
- 🔀 Submit pull requests

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with amazing open-source technologies:

- [OpenNext](https://opennext.js.org/) for seamless Cloudflare deployment
- [tRPC](https://trpc.io/) for type-safe APIs
- [Drizzle](https://orm.drizzle.team/) for the excellent TypeScript ORM
- [BetterAuth](https://www.better-auth.com/) for modern authentication
- [ShadCN/UI](https://ui.shadcn.com/) for beautiful components
