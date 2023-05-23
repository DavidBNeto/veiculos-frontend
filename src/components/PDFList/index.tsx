import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import Wrapper from "./styles"
import { PDFListProps, PDF } from "./types"

const PDFList = ({ PDFs, onPDFclick /* , onPDFchange */ }: PDFListProps) => {
  const { t } = useTranslation()

  // Option A: (cleaner)
  // const incompletePDFs = PDFs.filter(({status}) => status !== "Concluído")
  // const completePDFs = PDFs.filter(({status}) => status === "Concluído")

  // Option B: (faster?)
  const filterPDFs = () => {
    const incompletePDFs: PDF[] = []
    const completePDFs: PDF[] = []

    PDFs.forEach((file) => {
      if (file.status !== "Concluído") incompletePDFs.push(file)
      else completePDFs.push(file)
    })

    return [[], incompletePDFs, completePDFs]
  }
  const [previouslyOpened, incompletePDFs, completePDFs] = filterPDFs()

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={previouslyOpened}
        defaultExpanded
        // onPDFchange={onPDFchange}
        onPDFclick={onPDFclick}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={incompletePDFs}
        // onPDFchange={onPDFchange}
        onPDFclick={onPDFclick}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={completePDFs}
        onPDFclick={onPDFclick}
      />
    </Wrapper>
  )
}

export default PDFList
