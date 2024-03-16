// import { useState } from 'react'
import { RegisterSchema } from '@/schema'
import { Card } from '@/components/ui/card'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'


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

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		console.log(data)
	}

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
