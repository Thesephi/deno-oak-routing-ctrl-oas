import { z, zInfer } from "@dklab/oak-routing-ctrl";

export const GetIndexSchema = {
  request: {},
  responses: {
    "200": {
      description: "Success",
      content: {
        "text/html": {
          schema: z.string().openapi({ example: "<!doctype html><html>hello, Deno user!</html>" })
        }
      }
    }
  }
}

export const GetSayWhatSchema = {
  request: {
    params: z.object({
      what: z.enum(["alice", "bob"])
    })
  },
  responses: {
    "200": {
      description: "Success",
      content: {
        "text/plain": {
          schema: z.string().openapi({ example: "Deno user says: alice" })
        }
      }
    }
  }
}

export type GetSayWhatReqParams = zInfer<typeof GetSayWhatSchema.request.params>;