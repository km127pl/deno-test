FROM denoland/deno:1.39.1

WORKDIR /app

USER deno

COPY . .

RUN deno cache app.ts

CMD ["run", "--allow-net", "--allow-env", "app.ts"]