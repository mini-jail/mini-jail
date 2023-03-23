import { dev, prod } from "./params.ts";
import { get, serve } from "./server.ts";
if (dev || prod) import("./build.ts");

get("/lib/:name", (request, name) => {
  return Response.redirect(
    `https://raw.githubusercontent.com/mini-jail/${name}/main/mod.ts`,
    302,
  );
});

serve();
