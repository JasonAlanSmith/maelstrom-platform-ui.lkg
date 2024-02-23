module.exports = {
  apps: [
    {
      script: "npm start",
    },
  ],

  deploy: {
    production: {
      key: "Maelstrom-Platform-Prod.pem", // pem file generated when launching an instance
      user: "ec2-user", // ec2-user if you use aws linux kernel, ubuntu if you use ubuntu kernel
      host: "3.133.107.107", // public ip address of the ec2 instance
      ref: "prod", // specify the branch where your code resides
      repo: "git@github.com:JasonAlanSmith/maelstrom-platform-ui.git", //ssh git url of your repo 
      path: "/home/ec2-user/src/", // mention the path in ec2 instance where your code need to be eg /home/ec2-user
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && cd src/maelstrom-platform-ui && npm install && npm run build && pm2 reload ecosystem.config.js --env production",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
    staging: {
      key: "Maelstrom-Platform-Staging.pem", // pem file generated when launching an instance
      user: "ec2-user", // ec2-user if you use aws linux kernel, ubuntu if you use ubuntu kernel
      host: "3.129.70.48", // public ip address of the ec2 instance
      ref: "staging", // specify the branch where your code resides
      repo: "git@github.com:JasonAlanSmith/maelstrom-platform-ui.git", //ssh git url of your repo 
      path: "/home/ec2-user/src/", // mention the path in ec2 instance where your code need to be eg /home/ec2-user
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && cd src/maelstrom-platform-ui && npm install && npm run build && pm2 reload ecosystem.config.js --env staging",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
    qa: {
      key: "Maelstrom-Platform-QA.pem", // pem file generated when launching an instance
      user: "ec2-user", // ec2-user if you use aws linux kernel, ubuntu if you use ubuntu kernel
      host: "13.59.245.63", // public ip address of the ec2 instance
      ref: "qa", // specify the branch where your code resides
      repo: "git@github.com:JasonAlanSmith/maelstrom-platform-ui.git", //ssh git url of your repo 
      path: "/home/ec2-user/src/", // mention the path in ec2 instance where your code need to be eg /home/ec2-user
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && cd src/maelstrom-platform-ui && npm install && npm run build && pm2 reload ecosystem.config.js --env qa",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },
    dev: {
      key: "Maelstrom-Platform-Dev.pem", // pem file generated when launching an instance
      user: "ec2-user", // ec2-user if you use aws linux kernel, ubuntu if you use ubuntu kernel
      host: "52.15.65.215", // public ip address of the ec2 instance
      ref: "dev", // specify the branch where your code resides
      repo: "git@github.com:JasonAlanSmith/maelstrom-platform-ui.git", //ssh git url of your repo 
      path: "/home/ec2-user/src/", // mention the path in ec2 instance where your code need to be eg /home/ec2-user
      "pre-deploy-local": "",
      "post-deploy":
        "source ~/.nvm/nvm.sh && cd src/maelstrom-platform-ui && npm install && npm run build && pm2 reload ecosystem.config.js --env dev",
      "pre-setup": "",
      ssh_options: "ForwardAgent=yes",
    },       
  },
};
