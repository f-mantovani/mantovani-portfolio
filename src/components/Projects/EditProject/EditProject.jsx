import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import uploadConnect from '../../../services/uploadConnect'
import projectsConnect from '../../../services/projectsConnect'

const EditProject = ({ projects }) => {
	const { projectId } = useParams()

	const { pathname } = useLocation()
	const add = pathname === '/private/add'

	const projectDummy = {
		title: '',
		frontendLink: '',
		backendLink: '',
		imageUrl: '',
		description: '',
		isHighlight: false,
	}

	const project = projects ? projects?.find(p => p._id === projectId) : { ...projectDummy }

	const queryClient = useQueryClient()

	const { mutate } = useMutation({
		mutationFn: add ? projectsConnect.createProject : projectsConnect.updateProject,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ['projects'] })
		},
	})

	const navigate = useNavigate()

	return (
		<>
			<Formik
				initialValues={{
					project,
				}}
				onSubmit={async ({ project }, { setSubmitting }) => {
					const { image } = project
					delete project.image

					try {
						setSubmitting(true)
						const imageUrl = image ? await uploadConnect.sendImage(image) : undefined

						const projectInfo = { ...project, ...imageUrl }

						add ? mutate(projectInfo) : mutate({ id: projectId, data: projectInfo })
						
						navigate('/private/dashboard')
					} catch (error) {
						console.log(error)
					} finally {
						setSubmitting(false)
					}
				}}
			>
				{({ isSubmitting, setFieldValue }) => (
					<Form>
						<h2> {project.title} </h2>
						<div>
							<label htmlFor='title'>Title</label>
							<Field name='project.title' type='text' placeholder='Title' id='title' required />
						</div>
						<div>
							<label htmlFor='frontendLink'>frontendLink</label>
							<Field
								name='project.frontendLink'
								type='text'
								placeholder='frontendLink'
								id='frontendLink'
								required
							/>
						</div>
						<div>
							<label htmlFor='backendLink'>backendLink</label>
							<Field
								name='project.backendLink'
								type='text'
								placeholder='backendLink'
								id='backendLink'
								required
							/>
						</div>
						<div>
							<label htmlFor='description'>description</label>
							<Field
								as='textarea'
								name='project.description'
								type='text'
								placeholder='description'
								id='description'
								required
							/>
						</div>
						<div>
							<label htmlFor='isHighlight'>isHighlight</label>
							<Field
								name='project.isHighlight'
								type='checkbox'
								placeholder='isHighlight'
								id='isHighlight'
							/>
						</div>
						<div>
							<img src={project.imageUrl} alt={project.title} width={30} />
							<label htmlFor='imageUrl'>imageUrl</label>
							<input
								name='project.image'
								type='file'
								id='imageUrl'
								onChange={e => {
									setFieldValue('project.image', e.currentTarget.files[0])
								}}
							/>
						</div>
						<button type='submit' disabled={isSubmitting}>
							Save Changes
						</button>
					</Form>
				)}
			</Formik>
		</>
	)
}

export default EditProject
