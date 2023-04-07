import './ClickableLink.scss'

const ClickableLink = ({ link, img, alt, children }) => {
	return (
		<a
			className='click-links'
			href={link}
			target='_blank'
			referrerPolicy='noreferrer'
		>
			<img src={img} alt={alt} />
			<p>{children}</p>
		</a>
	)
}

export default ClickableLink
