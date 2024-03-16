import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Login from './components/PagesComponents/Login.tsx'
import Register from './components/PagesComponents/Register.tsx'
import store from './store.js'
import { Provider } from 'react-redux'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<App />}>
			<Route index={true} path='/' element={<Home />} />
			<Route path='/login' element={<Login />} />
			<Route path='/register' element={<Register />} />
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
