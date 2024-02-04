"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import submitMessageForm from "@/app/action";
import React from "react";
import { SCHEMA } from "@/lib/constants";

const FormSchema = SCHEMA;

export function Summarizer() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const [response, setResponse] = React.useState("");
  const [err, setErr] = React.useState("");

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setErr("");
    setResponse("");
    const res = await submitMessageForm(JSON.stringify(data));
    if (res.success === false) {
      setErr(res.message ?? "OOPS! Something went wrong");
    } else {
      setResponse(res.message ?? "Give some bigger content to summarize");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-3/4 space-y-6 ">
        <div className="text-center">
          <h1 className="text-2xl md:text-5xl font-bold text-amber-600">
            Summarizer
          </h1>
        </div>

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel></FormLabel>
              <FormControl>
                <Textarea
                  placeholder="What do you want to summarize?"
                  className="h-52"
                  {...field}
                />
              </FormControl>
              <FormDescription className="text-amber-500">
                Enter the content you want to summarize.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="bg-purple-500 hover:bg-purple-400"
        >
          Submit {form.formState.isSubmitting ? "..." : ""}
        </Button>
      </form>
      {err && err && (
        <p className="bg-red-500 text-white shadow-md rounded-lg font-medium p-2">
          {err}
        </p>
      )}
      <div className="border border-gray-400 rounded-lg p-4 w-3/4 mt-4">
        <h2 className="text-lg font-bold text-rose-600">Summary</h2>
        <p className="mt-2 text-rose-500 dark:text-rose-400">
          {!response ? "Your summarized text will appear here." : response}
        </p>
      </div>
    </Form>
  );
}
