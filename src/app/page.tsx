import {
  RocketLaunchIcon,
  CloudIcon,
  CogIcon,
  PaintBrushIcon,
  CircleStackIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">
          OpenNext + Cloudflare Template
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          A modern full-stack template with OpenNext, Cloudflare, tRPC, ShadCN,
          Drizzle, Postgres, and BetterAuth
        </p>
        <div className="space-y-3 text-sm text-gray-500 dark:text-gray-500">
          <div className="flex items-center justify-center gap-2">
            <RocketLaunchIcon className="h-4 w-4" />
            <p>OpenNext for seamless deployment</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CloudIcon className="h-4 w-4" />
            <p>Cloudflare for edge computing</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CogIcon className="h-4 w-4" />
            <p>tRPC for type-safe APIs</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <PaintBrushIcon className="h-4 w-4" />
            <p>ShadCN for beautiful components</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <CircleStackIcon className="h-4 w-4" />
            <p>Drizzle ORM + Postgres for data</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheckIcon className="h-4 w-4" />
            <p>BetterAuth for authentication</p>
          </div>
        </div>
      </div>
    </div>
  );
}
