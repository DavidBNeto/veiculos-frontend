import { useTranslation } from "react-i18next"
import PDFGroup from "../PDFGroup"
import Wrapper from "./styles"

const PDFList = () => {
  const { t } = useTranslation()

  return (
    <Wrapper>
      <PDFGroup
        title={t("viewPDF.pdfList.openEditors")}
        PDFs={"just some examples with".split(" ")}
        defaultExpanded
      />
      <PDFGroup
        title={t("viewPDF.pdfList.incompleteFiles")}
        PDFs={"sample not pdf files that cause overflow".split(" ")}
      />
      <PDFGroup
        title={t("viewPDF.pdfList.completeFiles")}
        PDFs={[]} // ", sometimes , that is".split(" ")}
      />
    </Wrapper>
  )
}

export default PDFList
