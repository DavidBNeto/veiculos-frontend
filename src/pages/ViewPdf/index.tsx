import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { t } from "i18next"
import { PageWrapper, SaveButton } from "./styles"
import TabsView from "../../components/TabsView"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"
import { PDF } from "../../components/PDFList/types"

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

  // TODO: remove PDFs; just placeholder
  const [PDFs, setPDFs] = useState<PDF[]>([
    {
      name: "PDF 1",
      status: "Concluído",
      lastSeen: new Date(),
    },
    {
      name: "Clique em mim!",
      status: "Não aberto",
      lastSeen: new Date(),
    },
    {
      name: "Não, em mim!",
      status: "Pendente",
      lastSeen: new Date(),
    },
  ])

  // TODO: Change to usePDFs hook
  const { updateList } = {
    // TODO: Update PDFs list on the hook (?) and remove this function
    updateList: (updatedFile: PDF) => {
      setPDFs((previousFiles) => {
        const PDFIndex = previousFiles.findIndex(
          ({ name }) => name === updatedFile.name
        )
        const newPDFs = [...previousFiles]
        newPDFs[PDFIndex] = updatedFile
        return newPDFs
      })
    },
  } // = usePDFs()

  const onPDFclick = (file: PDF) => {
    updateList(file)
    // TODO?: maybe update routing
    // navigate(`/viewPDF/${PDF.name}`)
  }

  // TODO: Change to usePDFs hook
  /* const onPDFchange = (file: PDF) => {
    updateList(file)
  } */

  const onHomeClick = () => {
    navigate("/")
    // TODO: Change to open modal
  }

  return (
    <PageWrapper>
      <HomeButton onClick={onHomeClick} />
      <PDFList
        PDFs={PDFs}
        onPDFclick={onPDFclick} /* onPDFchange={onPDFchange} */
      />
      <div>
        <SaveButton variant="contained" color="primary">
          {t("view.saveButton")}
        </SaveButton>
        <TabsView pdfList={mockPDFList} />
      </div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
