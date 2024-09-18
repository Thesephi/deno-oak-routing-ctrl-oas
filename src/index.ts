import { Application } from "@oak/oak";
import { useOakServer, useOas } from "@dklab/oak-routing-ctrl";
import { MyController } from "./MyController.ts";
import boxen from "npm:boxen@8.0.1";

const port = Number(Deno.env.get('PORT'));
const app = new Application();
useOakServer(app, [MyController]);
useOas(app);
app.addEventListener("listen", () => {
  console.log(`server started on port ${port}`);
  console.log(
    boxen(`try making a request e.g.\ncurl http://localhost:${port}`),
  );
});
app.listen({ port });
