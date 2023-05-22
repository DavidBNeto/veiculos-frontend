import Wrapper from "./styles"

interface PDFGroupProps {
  title: string
  PDFs: string[]
}

const PDFGroup = ({ title, PDFs }: PDFGroupProps) => {
  return (
    <Wrapper>
      <button type="button">
        {title} <span>v</span>
      </button>
      {PDFs.map((PDF) => (
        <div
          key={PDF}
          style={{
            width: "100%",
            height: "50px",
            border: "1px solid black",
          }}
        >
          {PDF}
        </div>
      ))}
    </Wrapper>
  )
}

export default PDFGroup
