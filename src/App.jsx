import React from 'react'
import './App.less'
import SignInSide from './pages/Login'
import WelcomePage from './pages/Home'
import {Editor} from './pages/MainLayout/index.jsx'
import SignUp from './pages/SignUp'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'

const App = () => {
	const state = useSelector(state => state)

	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path='/welcome' component={WelcomePage} />
					<Route path='/login' component={SignInSide} />
					<Route path='/signup' component={SignUp} />
					<Route path='/' component={Editor} />
				</Switch>
			</BrowserRouter>
		</div>
	)
}
export default App
