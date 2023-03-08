import './Contact.scss'

import { Formik, Form, Field, ErrorMessage } from 'formik'

const Contact = () => {
  return (
    <div>
      <h2> Get in touch</h2>
      <Formik
      initialValues={{
        email: '',
        subject: '',
        message: '',
      }}
      onSubmit={ (values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }} 
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="email" type="email" placeholder="Email" />
            <Field name="subject" type="text" placeholder="Subject" />
            <Field as="textarea" name="message" type="text" placeholder="Message" />
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Contact