import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuIndicator,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
	NavigationMenuViewport,
} from '@/components/ui/navigation-menu'
import { ModeToggle } from '../components/ui/mode-toggle'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<NavigationMenu>
				<NavigationMenuList>
					<div className='mr-5'>
						<NavigationMenuItem className='flex gap-x-4'>
							<NavigationMenuLink>
								<Link to='/login'>Log in</Link>
							</NavigationMenuLink>
							<NavigationMenuLink>
								<Link to='/register'>Sign Up</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
					</div>
				</NavigationMenuList>
				<ModeToggle></ModeToggle>
			</NavigationMenu>
		</>
	)
}

export default Navbar
