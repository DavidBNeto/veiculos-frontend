import { Wrapper, Title, TitleButton } from "./styles"

interface PDFGroupProps {
  title: string
  PDFs: string[]
}

const PDFGroup = ({ title, PDFs }: PDFGroupProps) => {
  return (
    <Wrapper>
      <TitleButton type="button">
        <Title variant="h2">{title}</Title> <span>v</span>
      </TitleButton>
      {PDFs.map((PDF) => (
        <div
          key={PDF + Math.random()}
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
