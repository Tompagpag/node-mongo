FROM node

WORKDIR /www
COPY ./www .

RUN npm install

CMD npm start

ENV PORT=80

# Set `DEVCONTAINER` environment variable to help with orientation
ENV DEVCONTAINER=true
