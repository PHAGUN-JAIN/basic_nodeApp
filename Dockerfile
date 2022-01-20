FROM    node:8.9.4-alpine
LABEL   Author="PHAGUN-JAIN"
LABEL   Description="Dockerfile for nodejs"
ENV     PORT=3000
WORKDIR /app
COPY    . ./
RUN     cd src && npm install
EXPOSE  $PORT
ENTRYPOINT ["npm", "start"]