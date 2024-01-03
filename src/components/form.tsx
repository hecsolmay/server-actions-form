'use client'

import { createContent } from '@/actions/content'
import { useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import SubmitButton from './submit-button'

const INITIAL_STATE = {
  message: '',
  errors: undefined,
  newContent: undefined
}

export default function Form () {
  const [state, formAction] = useFormState(createContent, null)
  const formRef = useRef<HTMLFormElement | null>(null)
  const { pending, data} = useFormStatus()

  console.log({ state})
  console.log({ pending})
  console.log({ data })

  const hasError = state?.errors !== undefined

  if (formRef.current !== null && state?.success) {
    formRef.current.reset()
  }
  
  return (
    <form ref={formRef} action={formAction} className='max-w-sm mx-auto'>
      <div className='mb-5'>
        <label
          htmlFor='email'
          className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
        >
          Your Content
        </label>
        <input
          type='text'
          name="content"
          className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${hasError ? 'border-red-500' : ''}`}
          placeholder='Agrega tu contenido aqui'
        />
        {hasError && <p className='text-red-500 mt-2 text-sm'>{state.errors.content}</p>}
      </div>
      
      <SubmitButton
        className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
      >
        Submit
      </SubmitButton>
    </form>
  )
}
