#!/bin/bash

echo "ShadCN UI Installation Troubleshooter"
echo "======================================"

# Check Node.js version
if command -v node &> /dev/null; then
    node_version=$(node -v)
    echo "Node.js version: $node_version"
    if [[ "${node_version:1:2}" -lt 18 ]]; then
        echo "Warning: ShadCN UI requires Node.js version 18.0.0 or higher."
    fi
else
    echo "Error: Node.js is not installed. Please install Node.js 18.0.0 or higher."
    exit 1
fi

# Check npm version
if command -v npm &> /dev/null; then
    npm_version=$(npm -v)
    echo "npm version: $npm_version"
else
    echo "Error: npm is not installed. Please install npm."
    exit 1
fi

# Attempt to run shadcn-ui using npx
echo "Attempting to run shadcn-ui using npx..."
if npx shadcn-ui@latest --help &> /dev/null; then
    echo "Success: shadcn-ui can be run using npx."
else
    echo "Warning: Unable to run shadcn-ui using npx. Attempting global installation..."
    npm install -g shadcn-ui
    if command -v shadcn-ui &> /dev/null; then
        echo "Success: shadcn-ui has been installed globally."
    else
        echo "Error: Failed to install shadcn-ui globally."
        exit 1
    fi
fi

echo "Troubleshooting complete. You should now be able to use shadcn-ui."
echo "Try running 'npx shadcn-ui@latest init' in your project directory."
