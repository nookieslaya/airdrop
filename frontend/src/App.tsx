import { ThemeProvider } from './components/theme-provider'
import Header from './components/PagesComponents/Header'
import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App() {
	return (
		<ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
			<Header />
			<ToastContainer />
			<Outlet />
		</ThemeProvider>
	)
}

export default App
