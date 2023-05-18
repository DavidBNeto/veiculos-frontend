import PDFGroup from "../PDFGroup"
import Wrapper from "./styles"

const PDFList = () => {
  return (
    <Wrapper>
      <PDFGroup
        title="Editores abertos"
        PDFs={"just some examples with".split(" ")}
      />
      <PDFGroup
        title="Arquivos incompletos"
        PDFs={"sample not pdf files that cause overflow".split(" ")}
      />
      <PDFGroup
        title="Arquivos completos"
        PDFs={", sometimes , that is".split(" ")}
      />
    </Wrapper>
  )
}

export default PDFList
