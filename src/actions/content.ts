'use server'

import { contentSchema } from "@/schemas/content"



export async function createContent (prevState: any, formData: FormData) {

  await new Promise(resolve => setTimeout(resolve, 3000))
  
  const validatedFields = contentSchema.safeParse({
    content: formData.get('content')
  })

  
  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors
    }
  }
  
  return {
    success: true,
    message: 'Successfully created content!',
    newContent: validatedFields.data
  }
}