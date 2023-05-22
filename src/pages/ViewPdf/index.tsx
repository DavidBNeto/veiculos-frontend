import { useNavigate } from "react-router-dom"
import PageWrapper from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"

const ViewPdf = () => {
  const navigate = useNavigate()

  function onHomeClick() {
    navigate("/")
    // TODO: Change to open modal
  }

  return (
    <PageWrapper>
      <HomeButton onClick={onHomeClick} />
      <PDFList />
      <div>Grade de Carros</div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
