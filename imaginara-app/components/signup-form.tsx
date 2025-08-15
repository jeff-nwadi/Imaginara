"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { signUp } from "@/server/users"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { z } from "zod"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { authClient } from "@/lib/auth_client"
import Link from "next/link"
 
const formSchema = z.object({
    name: z.string().min(3, { message: "Name is required" }),
    email: z.string().email({ message: "Please enter a valid email address." }),
    password: z.string().min(8, { message: "Password must be at least 8 characters." }),
})

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const signInWithGoogle = async () => {
    await authClient.signIn.social({
        provider: "google",
        callbackURL: "/dashboard"
    })
}
  
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    const { success, message } = await signUp(values.name, values.email, values.password); 

    if (success) {
      toast.success(message as string);
      router.push("/login")
    }else {
      toast.error(message as string);
    }
    setIsLoading(false)
  }

  return (
   <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">SignUp to your account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Enter your email below to login to your account
        </p>
      </div>
      <div className="grid gap-6">
            <div className="grid gap-3">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                <Input placeholder="John Doe" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            </div>
        <div className="grid gap-3">
           <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="jeff@gmail.com" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        </div>
        <div className="grid gap-3">
           <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter your password</FormLabel>
                    <FormControl>
                      <Input placeholder="**************" {...field} type="password" value={field.value || ""} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
        </div>
         <div className="flex items-center">
                <a
                  href="#"
                  className="ml-auto text-sm underline-offset-4 hover:underline"
                >
                  Forgot your password?
                </a>
        </div>
        <Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Signup
        </Button>

        <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
          <span className="bg-background text-muted-foreground relative z-10 px-2">
            Or continue with
          </span>
        </div>
        <Button variant="outline" className="w-full cursor-pointer" onClick={signInWithGoogle} type="button">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                fill="currentColor"
              />
            </svg>
          Login with Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link href="/login" className="underline underline-offset-4">
          Sign in
        </Link>
      </div>
    </form>
    </Form>
  )
}
