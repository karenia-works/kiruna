from node:current-alpine as base
workdir /app
copy package.json yarn.lock /app/
run yarn
copy src/ /app/src
copy angular.json .prettierrc .postcssrc.js .editorconfig karma.conf.js \
    tsconfig.app.json tsconfig.json tsconfig.spec.json tslint.json webpack.config.js \
    package.json yarn.lock \
    /app/
run yarn && yarn build

from nginx:latest
copy --from=base /app/dist /app/
copy default.conf /etc/nginx/conf.d
expose 80
expose 443
