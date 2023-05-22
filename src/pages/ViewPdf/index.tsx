import { t } from "i18next"
import { PageWrapper, SaveButton } from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"

const ViewPdf = () => {
  return (
    <PageWrapper>
      <HomeButton />
      <div>Lista de PDFs</div>
      <div>Grade de Carros</div>
      <SaveButton variant="contained" color="primary">
        {t("view.saveButton")}
      </SaveButton>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
