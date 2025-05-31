"use client";
import { Button } from "@/components/ui/button";
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
	authoremail: z.string().email({ message: "Invalid email address" }),
	title: z
		.string()
		.min(1, { message: "Title is required" })
		.max(10, { message: "Title must be less than 10 characters" }),
	category: z.string().min(1, { message: "Category is required" }),
});

const CreateThreadPage = () => {
	const router = useRouter();
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			authoremail: "",
			title: "",
			category: "",
		},
	});
	async function onSubmit(values: z.infer<typeof formSchema>) {
		const { authoremail, title, category } = values;
		console.log(values);
		try {
			const response = await fetch("http://localhost:3000/thread", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					authoremail,
					title,
					category,
					created_at: new Date(),
					updated_at: new Date(),
				}),
			});
			router.push("/");
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-3 w-1/2 px-7"
			>
				<FormField
					control={form.control}
					name="authoremail"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Username</FormLabel>
							<FormControl>
								<Input placeholder="hoge@hoge.com" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Thread</FormLabel>
							<FormControl>
								<Input placeholder="Thread Title" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="category"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Category</FormLabel>
							<FormControl>
								<Input placeholder="Category" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default CreateThreadPage;
