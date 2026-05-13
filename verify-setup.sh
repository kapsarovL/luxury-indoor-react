#!/bin/bash

echo "🔍 Verifying Neon Database Setup..."
echo ""

# Check for required files
echo "✓ Checking required files:"
[ -f ".env" ] && echo "  ✅ .env file exists" || echo "  ❌ .env file missing"
[ -f ".env.example" ] && echo "  ✅ .env.example file exists" || echo "  ❌ .env.example file missing"
[ -f "server/index.js" ] && echo "  ✅ server/index.js exists" || echo "  ❌ server/index.js missing"
[ -f "server/package.json" ] && echo "  ✅ server/package.json exists" || echo "  ❌ server/package.json missing"
[ -f "src/services/neonService.js" ] && echo "  ✅ neonService.js exists" || echo "  ❌ neonService.js missing"
[ -f "NEON_SETUP.md" ] && echo "  ✅ NEON_SETUP.md exists" || echo "  ❌ NEON_SETUP.md missing"

echo ""
echo "✓ Checking dependencies:"
[ -d "server/node_modules" ] && echo "  ✅ Server dependencies installed" || echo "  ❌ Server dependencies not installed"
[ -d "node_modules" ] && echo "  ✅ Frontend dependencies installed" || echo "  ❌ Frontend dependencies not installed"

echo ""
echo "✓ Checking environment:"
grep -q "VITE_API_URL" .env && echo "  ✅ VITE_API_URL configured" || echo "  ❌ VITE_API_URL missing"
grep -q "DATABASE_URL" .env && echo "  ✅ DATABASE_URL configured" || echo "  ❌ DATABASE_URL missing"

echo ""
echo "📝 Next steps:"
echo "  1. Run 'npm run dev:server' in one terminal to start the backend"
echo "  2. Run 'npm run dev' in another terminal to start the frontend"
echo "  3. Visit http://localhost:5173 in your browser"
echo ""
echo "For more details, see NEON_SETUP.md"
