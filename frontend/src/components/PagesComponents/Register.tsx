// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { RegisterSchema } from '@/schema'
import { Card } from '@/components/ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useRegisterMutation } from '../../slices/usersApiSlice'
import { setCredentials } from '../../slices/authSlice.js'

const Register = () => {
	const form = useForm({
		resolver: zodResolver(RegisterSchema),
		defaultValues: {
			email: '',
			name: '',
			password: '',
			confirmPassword: '',
		},
	})
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
		const { email, password, name, confirmPassword } = values
		if (password !== confirmPassword) {
			toast.error('Password do not match')
		} else {
			try {
				const res = await register({ name, email, password, confirmPassword }).unwrap()
				dispatch(setCredentials({ ...res }))
				navigate('/')
			} catch (err) {
				toast.error(err?.data?.message || err.error)
			}
		}
	}

	const { userInfo } = useSelector(state => state.auth)
	console.log(userInfo)
	const [register, { isLoading }] = useRegisterMutation()

	useEffect(() => {
		if (userInfo) {
			navigate('/')
		}
	}, [navigate, userInfo])
	return (
		<div className='flex justify-center items-center'>
			<Card className='max-w-[600px] p-5'>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
						<div className='space-y-4'>
							<FormField
								control={form.control}
								name='email'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Email</FormLabel>
										<FormControl>
											<Input {...field} type='email' placeholder='johndoe@gmail.com' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='name'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Name</FormLabel>
										<FormControl>
											<Input {...field} placeholder='John Doe' />
										</FormControl>
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
											<Input {...field} type='password' placeholder='******' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
							<FormField
								control={form.control}
								name='confirmPassword'
								render={({ field }) => (
									<FormItem>
										<FormLabel>Confirm Password</FormLabel>
										<FormControl>
											<Input {...field} type='password' placeholder='******' />
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						</div>

						{isLoading && <h2>Register</h2>}
						<Button type='submit' className='w-full'>
							Register
						</Button>
					</form>
				</Form>
			</Card>
		</div>
	)
}

export default Register
