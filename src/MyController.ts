import { Controller, ControllerMethodArgs, Get } from "@dklab/oak-routing-ctrl";
import { GetIndexSchema, GetSayWhatSchema, type GetSayWhatReqParams } from "./schemas.ts";

@Controller("/")
export class MyController {
  @Get("/", GetIndexSchema)
  hello() {
    console.log(`request received at ${performance.now()}`);
    return `<!doctype html><html>
      <style rel="stylesheet">html { font-family: sans-serif; padding: 20px; }</style>
      <p>hello, Deno user!</p>
      <p>try calling <a href="/say/alice">/say/alice</a></p>
      <p>or viewing <a href="/swagger">/swagger</a></p>
    </html>`;
  }

  @Get("/say/:what", GetSayWhatSchema)
  @ControllerMethodArgs("param")
  say(param: GetSayWhatReqParams) {
    const { what } = GetSayWhatSchema.request.params.parse(param);
    return `Deno user says: ${what}`;
  }
}
