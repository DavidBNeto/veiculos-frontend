import { useState } from "react"
import { useNavigate } from "react-router-dom"
import PageWrapper from "./styles"
import GlobalStyle from "../../styles/styles"
import HomeButton from "../../components/HomeButton"
import PDFList from "../../components/PDFList"
import { PDF } from "../../components/PDFList/types"

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
      <div>Grade de Carros</div>
      <GlobalStyle />
    </PageWrapper>
  )
}

export default ViewPdf
