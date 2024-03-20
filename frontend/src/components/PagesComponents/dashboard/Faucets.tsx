import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Faucets = () => {
	const [faucets, setFaucets] = useState([{ name: 'Berachain', url: 'https://google.com' }])

	const [faucetName, setFaucetName] = useState('')
	const [faucetUrl, setFaucetUrl] = useState('')

	const addFaucet = e => {
		e.preventDefault()
		setFaucets([...faucets, { name: faucetName, url: faucetUrl }])
		if (!setFaucetName) return
		setFaucetName('')
		setFaucetUrl('')
	}

	return (
		<div className='max-w-[600px] mx-auto'>
			<Card className='p-4 space-y-2'>
				<h1>Faucets</h1>
				<form className='space-y-2' onSubmit={addFaucet}>
					<Input
						value={faucetName}
						onChange={e => {
							setFaucetName(e.target.value)
						}}
						type='name'
						placeholder='name'
					/>
					<Input
						value={faucetUrl}
						onChange={e => {
							setFaucetUrl(e.target.value)
						}}
						type='url'
						placeholder='url'
					/>
					<Button type='submit'>Add</Button>
				</form>
				{faucets.map((faucet, index) => (
					<div key={index}>
						<Label>
							<Link target='_blank' to={faucet.url}>
								{faucet.name}
							</Link>
						</Label>
					</div>
				))}
			</Card>
		</div>
	)
}

export default Faucets
