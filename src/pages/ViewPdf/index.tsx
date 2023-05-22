import { t } from "i18next"
import { PageWrapper, SaveButton } from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import { useNavigate } from "react-router-dom"
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
      <SaveButton variant="contained" color="primary">
        {t("view.saveButton")}
      </SaveButton>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
