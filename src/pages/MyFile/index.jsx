import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router'
import { log_out } from '../../store/actions/auth'
import './MyFile.css'

export default function MyFile() {
	const history = useHistory()
	const dispatch = useDispatch()
	const state = useSelector((state) => state.authReducer.currentUser.data)
	const success = useSelector((state) => state.authReducer.success)

	if (!success) history.push('/welcome')

	const newDoc = new DOMParser()
		.parseFromString(state, 'text/html')
		.getElementsByTagName('body')[0]
	useEffect(() => {
		document.getElementById('file').append(newDoc)
	}, [])
	return (
		<div className='main'>
			<div className='menu'>
				<ul>
					<li onClick={() => history.push('/')}>
						crate new document
					</li>
					<li>
						<a href='https://www.google.com/intl/ru/docs/about/'>
							OPEN GOOGLE DOCS
						</a>
					</li>
					<li onClick={() => dispatch(log_out())}>log out</li>
				</ul>
			</div>
			<div className='file' id='file'></div>
		</div>
	)
}
