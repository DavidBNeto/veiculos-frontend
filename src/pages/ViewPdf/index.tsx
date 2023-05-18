import PageWrapper from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"

const ViewPdf = () => {
  return (
    <PageWrapper>
      <HomeButton />
      <PDFList />
      <div>Grade de Carros</div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
