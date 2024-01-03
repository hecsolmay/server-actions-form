import { z } from 'zod'

export const contentSchema = z.object({
  content: z.string({
    required_error: 'Content is required',
    invalid_type_error: 'Content must be a string',
  }).trim().min(3, 'El contenido debe tener al menos 3 caracteres').toUpperCase(),
})
