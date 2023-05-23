import { useNavigate } from "react-router-dom"
import PageWrapper from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"

const ViewPdf = () => {
  const navigate = useNavigate()

  function onHomeClick() {
    navigate("/")
    // TODO: Change to open modal
  }

  return (
    <PageWrapper>
      <HomeButton onClick={onHomeClick} />
      <div>Lista de PDFs</div>
      <div>Grade de Carros</div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
