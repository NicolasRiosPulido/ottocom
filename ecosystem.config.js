module.exports = {
  apps: [{
    name: 'ottocom',
    script: './app.js',
    watch: true,
    env: {
      "PORT": 3001,
      "NODE_ENV": "development",
    }
  }]
};
