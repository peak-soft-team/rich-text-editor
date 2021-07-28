import React from 'react'
import Button from '@material-ui/core/Button'
import './home.less'
import MyGallery from '../../components/Gallery'
import { Link } from 'react-router-dom'
import logo from '../../assets/kisspng-react-computer-icons-redux-javascript-5b30e9690ee2c2.325839961529932137061.jpg'

export default function WelcomePage() {
	return (
		<div>
			<header>
				<div className='logo'>
					<img
						src={logo}
						alt='logo'
					/>
				</div>
				<div className='btn-group'>
					<Link to='/login'>
						<Button style={{ color: 'white' }}>login</Button>
					</Link>
					<Link to='/signup'>
						<Button style={{ color: 'white' }}>signup</Button>
					</Link>
				</div>
			</header>
			<section>
				<div className='gallery'>
					<MyGallery />
				</div>
				<div className='responsive-content'>
					<h1>Welcome</h1>
				</div>
			</section>
			<footer>footer 2021</footer>
		</div>
	)
}
