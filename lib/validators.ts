import * as z from "zod";

export const stakeSchema = z.object({
  token: z.string().min(1, {
    message: "Please enter the amount of tokens you want to stake.",
  }),
});
