import Footer from "../Footer/Footer"
import Navbar from "../NavBar/Navbar"

const HomeMock = ({status}) => {
	return (
    <div className="App">
      <Navbar />
      <h2> Latest Projects</h2>
      <h2> {status}</h2>
      <Footer />
    </div>
  )
}

export default HomeMock
