#!/usr/bin/env bash
set -euo pipefail

echo "=== Vercel Build Script ==="

ROOT=$(pwd)
OUT="$ROOT/.vercel/output"
FUNC="$OUT/functions/api/index.func"

# 1. Build Vite static site
echo "→ Building Vite static site..."
npm run build

# 2. Create output directories
echo "→ Creating output structure..."
mkdir -p "$OUT/static"
mkdir -p "$FUNC/api"
mkdir -p "$FUNC/server"

# 3. Copy static files
echo "→ Copying static files..."
cp -r dist/* "$OUT/static/"

# 4. Copy API handler and server code
echo "→ Copying API function files..."
cp api/index.js "$FUNC/api/"
cp server/index.js "$FUNC/server/"
cp server/swagger.js "$FUNC/server/" 2>/dev/null || true

# 5. Copy server files
cp server/package.json "$FUNC/server/"
cp server/.env.example "$FUNC/server/" 2>/dev/null || true

# 6. Install server dependencies where code lives (server/ subfolder)
echo "→ Installing server dependencies..."
npm --prefix "$FUNC/server" install --production --no-audit --no-fund 2>&1 | tail -5

# 7. Create .vc-config.json
echo "→ Creating function config..."
cat > "$FUNC/.vc-config.json" << 'EOF'
{
  "handler": "api/index.js",
  "runtime": "nodejs24.x",
  "architecture": "x86_64",
  "memory": 256,
  "maxDuration": 10,
  "launcherType": "Nodejs",
  "shouldAddHelpers": true
}
EOF

# 8. Create config.json
cd "$ROOT"
echo "→ Creating config.json..."
cat > "$OUT/config.json" << 'EOF'
{
  "version": 3,
  "routes": [
    { "src": "^/api/(.*)$", "dest": "/api/index" },
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
EOF

echo "→ Build complete!"
echo "  Static: $(du -sh "$OUT/static" | cut -f1)"
echo "  Function: $(du -sh "$FUNC" | cut -f1)"
