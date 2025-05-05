// ecosystem.config.js
module.exports = {
    apps: [{
        name: 'cavecreekgoldens',
        script: 'node_modules/next/dist/bin/next',
        args: 'start -p 3010',
        cwd: '/home/ubuntu/apps/nodejs/cavecreekgoldens',
        env: {
            NODE_ENV: 'production',
            PORT: 3010,
        }
    }]
}