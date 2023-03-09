import './Contact.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'
import email from '../../services/emailConnect'

const Contact = () => {
	return (
		<div className='contact'>
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
						<h2> Get in touch</h2>
            <div className='contact-info'>
              <div className='input-field'>
                <Field name='email' type='text' placeholder='Email' id='email' required />
                <label htmlFor='email'>Email</label>
              </div>

              <div className='input-field'>
                <Field name='subject' type='text' placeholder='Subject' id='subject' required />
                <label htmlFor='subject'>Subject</label>
              </div>
            </div>

						<div className='input-field'>
							<Field as='textarea' name='message' type='text' placeholder='Message' id='message' required/>
							<label htmlFor='message'>Message</label>
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

export default Contact
