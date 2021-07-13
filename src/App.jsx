import React from 'react'
import { BrowserRouter, Switch,Route } from 'react-router-dom'
import Home from './pages/Home/index.jsx'
import { Auth } from './pages/Auth/index.jsx'
import './App.less'

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Switch>
					<Route path="/auth" component={Auth}/>
					<Route exact path="/" component={Home} />
					<Route path="*" component={Home} />
				</Switch>	
			</BrowserRouter>	
		</div>
	)
}

export default App
