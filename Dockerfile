ARG NODE_VER
FROM node:${NODE_VER}

# Install xdg-utils for open command
# xdg-utils: LinuxシステムでデフォルトのブラウザでURLを開くために使用されるコマンド
RUN apt-get update && apt-get install -y xdg-utils

USER root
WORKDIR /home/node/app
RUN mkdir /home/node/app/node_modules && chown node:node /home/node/app/node_modules
USER node

CMD ["/bin/bash", "-c", "npm install && npm run dev"]