"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { IoWalletOutline } from "react-icons/io5";
import * as z from "zod";

import { useAccount, useContractRead, useWalletClient } from "wagmi";
import WCX_Token_ABI from "@/abi/wcx-token-abi.json";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";

const formSchema = z.object({
  token: z.string().min(1, {
    message: "Please enter the amount of tokens you want to stake.",
  }),
});

export default function Deposit() {
  const account = useAccount();

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      token: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  const userAddress = useWalletClient({});

  const result = useContractRead({
    abi: WCX_Token_ABI,
    address: "0xbFf157FE56a966208b00f1cb3699dF7601a13a08",
    functionName: "balanceOf",
    args: [account?.address],
  });

  return (
    <div className="w-full flex items-center justify-center">
      <div className="p-6 pb-4 bg-background border shadow-md rounded-2xl w-full max-w-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl">Deposit</h2>

          <div className="flex items-center gap-x-2">
            <p className="flex items-center mr-2">
              <IoWalletOutline className="w-5 h-5 text-primary mr-1" />
              <span className="font-medium text-sm">
                {result?.data ? `WCX ${result?.data?.toString()}` : "WCX 0.00"}
              </span>
            </p>

            <Button
              size="sm"
              variant="secondary"
              className="py-2 h-7 font-bold rounded-full shadow">
              Max
            </Button>
            <Button
              size="sm"
              variant="secondary"
              className="py-2 h-7 font-bold rounded-full shadow">
              Half
            </Button>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="my-5 flex flex-col gap-4">
            <FormField
              control={form.control}
              name="token"
              render={({ field }) => (
                <FormItem>
                  <FormControl className="h-16">
                    <div className="rounded-full p-3 flex items-center border h-16">
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <SelectTrigger className="w-[126px] rounded-full h-full">
                          <SelectValue placeholder="BWC" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">Token 1</SelectItem>
                          <SelectItem value="2">Token 2</SelectItem>
                          <SelectItem value="3">Token 3</SelectItem>
                          <SelectItem value="4">Token 4</SelectItem>
                          <SelectItem value="5">Token 5</SelectItem>
                          <SelectItem value="6">Token 6</SelectItem>
                        </SelectContent>
                      </Select>

                      <Input
                        placeholder="0"
                        type="number"
                        {...field}
                        className="flex-1 border-none outline-none shadow-none h-full text-right text-lg"
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="px-4" />
                </FormItem>
              )}
            />

            <div className="flex items-center justify-between mb-3 px-6">
              <p className="text-base font-semibold">You will receive</p>
              <p className="text-base font-semibold">1900.00 RBCW</p>
            </div>

            <Button
              type="submit"
              className="h-16 rounded-full text-lg font-medium">
              Stake
            </Button>

            <div className="flex items-center justify-between mt-3 px-6">
              <p className="text-base font-semibold">Current price</p>
              <p className="text-base font-semibold">1BWC = 1RBWC</p>
            </div>

            <div className="flex items-center justify-between px-6">
              <p className="text-base font-semibold">Commission</p>
              <p className="text-base font-semibold">10%</p>
            </div>

            <div className="flex items-center justify-between px-6">
              <p className="text-base font-semibold">Reward</p>
              <p className="text-base font-semibold">200TC</p>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
