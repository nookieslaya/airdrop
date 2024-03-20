import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './components/PagesComponents/Login.tsx'
import Register from './components/PagesComponents/Register.tsx'
import Profile from './components/PagesComponents/Profile.tsx'
import store from './store.js'
import { Provider } from 'react-redux'
import PrivateRoute from './components/PrivateRoute.tsx'
import Dashboard from './pages/Dashboard.tsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
			{/* private routes  */}
			<Route path='/' element={<PrivateRoute />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
			<Route path='/' element={<PrivateRoute />}>
				<Route path='/dashboard' element={<Dashboard />} />
			</Route>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<React.StrictMode>
			<RouterProvider router={router} />
		</React.StrictMode>
	</Provider>
)
