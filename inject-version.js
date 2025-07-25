#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

function getVersion() {
    try {
        // Option 1: Try to get from package.json
        if (fs.existsSync('package.json')) {
            const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
            if (packageJson.version) {
                return `v${packageJson.version}`;
            }
        }
        
        // Option 2: Try to get from git tag
        try {
            const gitTag = execSync('git describe --tags --abbrev=0', { encoding: 'utf8' }).trim();
            return gitTag.startsWith('v') ? gitTag : `v${gitTag}`;
        } catch (gitError) {
            console.log('No git tags found, trying git commit hash...');
        }
        
        // Option 3: Use git commit hash
        try {
            const gitHash = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim();
            return `v0.0.0-${gitHash}`;
        } catch (hashError) {
            console.log('Git not available, using fallback version');
        }
        
        // Option 4: Fallback
        return 'v1.0.0-dev';
        
    } catch (error) {
        console.error('Error getting version:', error.message);
        return 'v1.0.0-dev';
    }
}

function injectVersion() {
    const version = getVersion();
    const htmlPath = path.join(__dirname, 'index.html');
    
    if (!fs.existsSync(htmlPath)) {
        console.error('index.html not found!');
        process.exit(1);
    }
    
    let html = fs.readFileSync(htmlPath, 'utf8');
    html = html.replace(/\{\{VERSION\}\}/g, version);
    fs.writeFileSync(htmlPath, html);
    
    console.log(`✅ Version updated to: ${version}`);
}

if (require.main === module) {
    injectVersion();
}

module.exports = { getVersion, injectVersion };