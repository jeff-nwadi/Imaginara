"use server"

import { auth } from "@/lib/auth"

 
export const signIn = async (email: string, password: string) => {
   try {
         await auth.api.signInEmail({
         body: {
            email,
            password,
            }
      })
         return {
            success: true,
            message: "Signed in successful",
         }
   } catch (error) {
      const e = error as Error;
      return {
      success: false,
      message: e.message || "An error occurred during sign in."
      }
   }
   
}

export const signUp = async (name: string, email: string, password: string) => {

  try {
      await auth.api.signUpEmail({
      body: {
         name,
         email,
         password,
         }
      })
   return {
            success: true,
            message: "Signed up successful",
         }
   } catch (error) {
      const e = error as Error;
      return {
         success: false,
         message: e.message || "An error occurred"
      }
   }
  
}
