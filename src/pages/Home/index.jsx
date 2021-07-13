import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			margin: theme.spacing(1),
		},
	},
}))

const Home = () => {
	const classes = useStyles()

	return (
		<div className='auth'>
			<CssBaseline />
			<Container maxWidth='sm'>
				<Typography
					component='div'
					style={{ backgroundColor: '#cfe8fc', height: '100vh' }}
				>
					<div className={classes.root}>
						<Link to='/auth'>
							<Button
								variant='contained'
								color='primary'
							>
								Зарегистрироваться
							</Button>
						</Link>
					</div>
				</Typography>
			</Container>
		</div>
	)
}

export default Home
