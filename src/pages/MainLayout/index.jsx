import { convertToRaw } from 'draft-js'
import React, { useState } from 'react'
import MUIEditor, { MUIEditorState, toHTML } from 'react-mui-draft-wysiwyg'
import { useDispatch, useSelector } from 'react-redux'
import { set_data, log_out } from '../../store/actions/auth.js'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import { useHistory } from 'react-router'
import './MainLayout.less'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1),
	},
}))

export const Editor = () => {
	// this is for button to style
	const classes = useStyles()
	// this is redux hooks
	const dispatch = useDispatch()
	const success = useSelector(
		(state) => state.authReducer.currentUser.lastName,
	)
	const dataUser = useSelector((state) => state.authReducer)
	// this is for pushing into welcome page
	const history = useHistory()
	if (!success) {
		history.push('/welcome')
	}

	const config = {
		editor: {
			style: {
				border: '1px solid #6d6285',
				backgroundColor: '#f1f1e9',
				height: '70vh',
			},
		},
	}
	const editorConfig = {}
	const [editorState, setEditorState] = React.useState(
		MUIEditorState.createEmpty(editorConfig),
	)
	const [html, setHtml] = React.useState('')
	const onChange = (newState) => {
		setEditorState(newState)
		const stateHtml = toHTML(editorState.getCurrentContent())
		setHtml(stateHtml)
	}
	const convertToHTML = () => {
		console.log(html)
		dispatch(set_data(html))
		alert('saved')
	}
	return (
		<div className='editor'>
			<MUIEditor
				editorState={editorState}
				onChange={onChange}
				config={config}
			/>
			<Button
				variant='contained'
				color='default'
				size='medium'
				className={classes.button}
				startIcon={<SaveIcon />}
				onClick={convertToHTML}
			>
				Save
			</Button>
			<Link to='/file'>
				<Button
					variant='contained'
					color='default'
					size='medium'
					className={classes.button}
				>
					Open file
				</Button>
				</Link>
			<Button
				variant='contained'
				color='default'
				size='medium'
				className={classes.button}
				onClick={() => dispatch(log_out(history.push('/welcome')))}
			>
				Log out
			</Button>
		</div>
	)
}
