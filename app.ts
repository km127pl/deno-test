import fast from "https://deno.land/x/fast@6.0.0-alpha.1/mod.ts";

const app = fast();

app.get("/", () => "Hello, World!");

await app.serve();
