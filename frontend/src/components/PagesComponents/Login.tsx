import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginSchema } from '@/schema'
import { Card } from '@/components/ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useDispatch, useSelector } from 'react-redux'
import { useLoginMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice'

import { toast } from 'react-toastify'

const Login = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const [login, { isLoading }] = useLoginMutation()
	const { userInfo } = useSelector(state => state.auth)

	useEffect(() => {
		if (userInfo) {
			navigate('/')
		}
	}, [navigate, userInfo])

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	// 2. Define a submit handler.
	async function onSubmit(values: z.infer<typeof LoginSchema>) {
		try {
			const { email, password } = values
			const res = await login({ email, password }).unwrap()
			dispatch(setCredentials({ ...res }))
			navigate('/')
		} catch (err) {
			toast.error(err.data.message || err.error)
		}
	}
	return (
		<div className='flex justify-center items-center'>
			<Card className='max-w-[600px] p-5'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Email</FormLabel>
									<FormControl>
										<Input placeholder='Email' type='email' {...field} />
									</FormControl>
									<FormDescription>Your email</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='password'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Password</FormLabel>
									<FormControl>
										<Input placeholder='Password' type='password' {...field} />
									</FormControl>
									<FormDescription>Write your password here</FormDescription>
									<FormMessage />
								</FormItem>
							)}
						/>
						<Button type='submit'>Log in</Button>
					</form>
				</Form>
			</Card>
		</div>
	)
}

export default Login
