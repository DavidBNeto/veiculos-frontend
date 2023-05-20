import TabsView from "../../components/TabsView"

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
  return (
    <div>
      View PDF
      <TabsView pdfList={mockPDFList} />
    </div>
  )
}

export default ViewPdf
