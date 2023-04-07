import { Formik, Form, Field, ErrorMessage } from 'formik'

import email from '../../services/emailConnect'
import ClickableLink from '../ClickableLink/ClickableLink'
import linkedIn from '../../assets/linkedin.png'
import mail from '../../assets/mail.png'

import './Contact.scss'

const Contact = () => {
	return (
			<Formik
				initialValues={{
					email: '',
					subject: '',
					message: '',
				}}
				onSubmit={async (values, { setSubmitting, resetForm }) => {
					const newMail = {
						email: values.email,
						subject: values.subject,
						message: values.message,
					}
					try {
						const res = await email.sendMail(newMail)
						setSubmitting(false)
						resetForm()
					} catch (error) {
						console.log(error)
					}
				}}
			>
				{({ isSubmitting }) => (
					<Form className='contact-form'>
						<h2> Drop me a message!</h2>
						<div className='input-field'>
							<Field name='email' type='text' placeholder='Email' id='email' required />
							<label htmlFor='email'>Email</label>
						</div>

						<div className='input-field'>
							<Field name='subject' type='text' placeholder='Subject' id='subject' required />
							<label htmlFor='subject'>Subject</label>
						</div>

						<div className='input-field'>
							<Field
								as='textarea'
								name='message'
								type='text'
								placeholder='Message'
								id='message'
								required
							/>
							<label htmlFor='message'>Message</label>
						</div>

						<button type='submit' disabled={isSubmitting}>
							Send
						</button>
					</Form>
				)}
			</Formik>
	)
}

export default Contact
