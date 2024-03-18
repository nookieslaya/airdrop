import { LogOut, User } from 'lucide-react'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { ModeToggle } from '../components/ui/mode-toggle'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'

const Navbar = () => {
	const [position, setPosition] = useState('bottom')

	const { userInfo } = useSelector(state => state.auth)
	console.log(userInfo)

	return (
		<>
			<NavigationMenu className='flex m-2 space-x-2'>
				{userInfo ? (
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant='outline'>{userInfo.name}</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className='w-56'>
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuGroup>
								<DropdownMenuItem>
									<User className='mr-2 h-4 w-4' />
									<span>Profile</span>
									<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem>
								<LogOut className='mr-2 h-4 w-4' />
								<span>Log out</span>
								<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<div className='mr-5'>
						<NavigationMenuItem className='flex gap-x-4'>
							<NavigationMenuLink>
								<Link to='/login'>Log inn</Link>
							</NavigationMenuLink>
							<NavigationMenuLink>
								<Link to='/register'>Sign Up</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</div>
				)}
				<div>
					<ModeToggle></ModeToggle>
				</div>
			</NavigationMenu>
		</>
	)
}

export default Navbar
