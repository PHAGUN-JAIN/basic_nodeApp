FROM    node:8.9.4-alpine
LABEL   Author="PHAGUN-JAIN"
LABEL   Description="Dockerfile for nodejs"
ENV     PORT=3000
WORKDIR /app
COPY    . ./src
RUN     npm install
EXPOSE  $PORT
ENTRYPOINT ["npm", "start"]