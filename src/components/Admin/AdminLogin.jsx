import { Field, Form, Formik } from 'formik'
import auth from '../../services/authConnect'
import './AdminLogin.scss'
import { useAuthValue } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const AdminLogin = () => {
  const { storeToken, authenticateUser } = useAuthValue()
  const navigate = useNavigate()

	return (
		<div className='contact'>
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					const login = {
						email: values.email,
						password: values.password,
					}
					try {
						const res = await auth.login(login)
            storeToken(res)
            authenticateUser()
            setSubmitting(false)
						resetForm()
            navigate('/dashboard')
					} catch (error) {
						console.log(error)
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form className='contact-form'>
						<h2> Login</h2>
						<div className='contact-info'>
							<div className='input-field'>
								<Field name='email' type='text' placeholder='Email' id='email' required />
								<label htmlFor='email'>Email</label>
							</div>

							<div className='input-field'>
								<Field
									name='password'
									type='password'
									placeholder='*******'
									id='password'
									required
								/>
								<label htmlFor='password'>Password</label>
							</div>
						</div>

						<button type='submit' disabled={isSubmitting}>
							Submit
						</button>
					</Form>
				)}
			</Formik>
		</div>
	)
}

export default AdminLogin
