import PageWrapper from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"

const ViewPdf = () => {
  return (
    <PageWrapper>
      <HomeButton />
      <div>Lista de PDFs</div>
      <div>Grade de Carros</div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
