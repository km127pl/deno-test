import fast from "https://deno.land/x/fast@6.0.0-alpha.1/mod.ts";

const app = fast();

app.get("/", () => "Hello, World!");

await app.serve({
  port: parseInt(Deno.env.get("PORT")!), // railway provided port
});
