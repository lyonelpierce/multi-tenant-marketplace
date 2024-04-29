"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Search } from "lucide-react";

import searchSchema from "@/constants/searchSchema";

const HeroSearch = () => {
  const searchForm = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      searchInput: "",
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    console.log(data);
  };

  return (
    <Form {...searchForm}>
      <form
        onSubmit={searchForm.handleSubmit(onSubmit)}
        className="flex items-center w-full"
      >
        <FormField
          control={searchForm.control}
          name="searchInput"
          render={({ field }) => (
            <FormItem className="w-1/2">
              <FormControl>
                <div className="flex justify-center items-center w-full mt-4">
                  <Input
                    {...field}
                    className="rounded-l-full rounded-r-none h-14 w-full placeholder:px-2 placeholder:text-white bg-zinc-600 border-none focus-visible:ring-0 focus-visible:ring-offset-0"
                    placeholder="Buscar articulos..."
                  />
                  <Button
                    type="submit"
                    className="rounded-r-full bg-yellow-500 h-14 transition-colors ease-in-out hover:bg-black group"
                  >
                    <Search className="text-zinc-600 transition-colors ease-in-out group-hover:text-white" />
                  </Button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default HeroSearch;
