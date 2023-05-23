import PDFComponent from "../../components/PDFComponent"

const ViewPdf = () => {
  return (
    <div>
      View PDF
      <PDFComponent
        fileName="ChevroletS2i/.pdf"
        status="unfinished"
        isSelected={false}
        lastEditedAt={new Date().toISOString().slice(0, 10)}
      />
      <PDFComponent
        fileName="Jeep.pdf"
        status="concluded"
        isSelected
        lastEditedAt={new Date().toISOString().slice(0, 10)}
      />
    </div>
  )
}

export default ViewPdf
