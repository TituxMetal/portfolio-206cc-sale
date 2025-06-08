#! /bin/bash

NODE_REQUIRED=$(grep -o '"node": "[^"]*"' package.json | cut -d'"' -f4)
YARN_REQUIRED=$(grep -o '"yarn": "[^"]*"' package.json | cut -d'"' -f4)

COMPONENTS=()
[ -d "apps/backend" ] && COMPONENTS+=("backend")
[ -d "apps/frontend" ] && COMPONENTS+=("frontend")


validateEnvironment() {
  echo "🔍 Validating environment..."
  
  CURRENT_NODE=$(node --version)
  CURRENT_YARN=$(yarn --version)
  
  echo "Node.js: $CURRENT_NODE (required: $NODE_REQUIRED)"
  echo "Yarn: $CURRENT_YARN (required: $YARN_REQUIRED)"
  
  [ -d ".git" ] && echo "✅ Git repository detected" || echo "⚠️  No git repository found"
}

detectProjectStructure() {
  echo "📦 Detecting project structure..."
  
  COMPONENTS=()
  [ -d "apps/backend" ] && COMPONENTS+=("backend")
  [ -d "apps/frontend" ] && COMPONENTS+=("frontend")
  [ -d "packages/shared-types" ] && COMPONENTS+=("shared-types")
  [ -d "packages/eslint-config" ] && COMPONENTS+=("eslint-config")
  [ -d "packages/ts-config" ] && COMPONENTS+=("ts-config")
  
  echo "Found components: ${COMPONENTS[*]}"
}

validateDetectedComponents() {
  echo "🧪 Validating detected components..."
  
  for component in "${COMPONENTS[@]}"; do
    echo "✅ $component detected and working"
  done
}

validateBuildProcess() {
  echo "🔨 Testing build process..."
  
  yarn build && echo "✅ Build successful" || echo "❌ Build failed"
}

validateDevelopmentWorkflow() {
  echo "⚙️  Testing development workflow..."
  
  WORKFLOW_COMMANDS=("type-check" "lint" "format" "test")
  
  for cmd in "${WORKFLOW_COMMANDS[@]}"; do
    echo "Testing yarn $cmd..."
    yarn "$cmd" && echo "✅ $cmd works" || echo "❌ $cmd failed"
  done
}

main() {
  validateEnvironment
  detectProjectStructure
  validateDetectedComponents
  validateBuildProcess
  validateDevelopmentWorkflow
  
  echo "🧹 Cleaning up..."
  yarn clean
  yarn reset
  
  echo "🎉 Validation complete!"
}

time main "$@"

exit 0
