FROM denoland/deno:1.39.1

EXPOSE 8000

WORKDIR /app

USER deno

COPY . .

RUN deno cache main.ts

CMD ["run", "--allow-net", "app.ts"]