module.exports = {
    branches: "main",
    plugins: [
     '@semantic-release/conmmit-analyzer',
     '@semantic-release/release-notes-generator',
     '@semantic-release/git',
     '@sementic-release/github',
     ['@semantic-release/npm',
         {
         'npmPublish': false
         }
        ]
    ]
}