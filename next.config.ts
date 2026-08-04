import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  // Allows the IDE's browser preview (which proxies through 127.0.0.1 on a
  // different port) to reach dev-only resources like the HMR websocket.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
};

export default nextConfig;
