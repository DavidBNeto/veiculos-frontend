import { t } from "i18next"
import { useNavigate } from "react-router-dom"
import { PageWrapper, SaveButton } from "./styles"
import TabsView from "../../components/TabsView"
import InputData from "../../components/InputData"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"

const mockPDFList = [
  {
    id: 1,
    title: "PDF 1",
    data: {
      field1: "any_value",
    },
  },
  {
    id: 2,
    title: "PDF 2",
    data: {
      field1: "any_value",
    },
  },
  {
    id: 3,
    title: "PDF 3",
    data: {
      field1: "any_value",
    },
  },
  {
    id: 4,
    title: "PDF 4",
    data: {
      field1: "any_value",
    },
  },
]

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
      <div>
        <SaveButton variant="contained" color="primary">
          {t("view.saveButton")}
        </SaveButton>
        <TabsView pdfList={mockPDFList} />
        <InputData />
      </div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
