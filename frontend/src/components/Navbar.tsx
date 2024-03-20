import { LogOut, User } from 'lucide-react'
import { NavigationMenu } from '@radix-ui/react-navigation-menu'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuShortcut,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NavigationMenuItem, NavigationMenuLink } from './ui/navigation-menu'
import { ModeToggle } from '../components/ui/mode-toggle'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { useLogoutMutation } from '../slices/usersApiSlice'
import { logout } from '../slices/authSlice'

const Navbar = () => {
	const [position, setPosition] = useState('bottom')

	const { userInfo } = useSelector(state => state.auth)
	console.log(userInfo)

	const [logoutApiCall] = useLogoutMutation()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const logoutHandler = async () => {
		try {
			await logoutApiCall().unwrap()
			dispatch(logout())
			navigate('/')
		} catch (err) {
			console.log(err)
		}
	}

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
									<Link to='/profile'>Profile</Link>

									<DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
								</DropdownMenuItem>
							</DropdownMenuGroup>
							<DropdownMenuSeparator />
							<DropdownMenuItem onClick={logoutHandler}>
								<LogOut className='mr-2 h-4 w-4' />
								<span>Log out</span>
								<DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
				) : (
					<div className='mr-5'>
						<NavigationMenuItem className='flex gap-x-4'>
							<Link to='/login'>
								<Button variant='outline'>Log in </Button>
							</Link>

							<Link to='/register'>
								<Button variant='outline'>Sign Up</Button>
							</Link>
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
