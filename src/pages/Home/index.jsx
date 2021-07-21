import React from 'react'
import Button from '@material-ui/core/Button';
import './home.less'
import MyGallery from '../../components/Gallery';
import { Link } from 'react-router-dom';

export default function WelcomePage() {
	return (
		<div>
			<header>
					<div className='logo'>logo</div>
					<div className='btn-group'>
						<Link to='/login'><Button style={{color: 'white'}}>login</Button></Link>
						<Link to='/signup'><Button style={{color: 'white'}}>signup</Button></Link>
					</div>
			</header>
			<section>
                <MyGallery/>
            </section>
			<footer>footer 2021</footer>
		</div>
	)
}
