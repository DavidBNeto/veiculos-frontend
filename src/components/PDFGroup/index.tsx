import { useState } from "react"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import { Title, AccordionDetails } from "./styles"

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
  backgroundColor: "transparent",
  ".MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "1rem" }} />}
    {...props}
  />
))(() => ({
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
}))

interface PDFGroupProps {
  title: string
  PDFs: string[]
  defaultExpanded?: true
}

const PDFGroup = ({ title, PDFs, defaultExpanded }: PDFGroupProps) => {
  const { t } = useTranslation()
  const [isExpanded, setIsExpanded] = useState<boolean>(!!defaultExpanded)

  const toggleExpansion = () => {
    setIsExpanded((expanded) => !expanded)
  }

  return (
    <Accordion
      expanded={isExpanded}
      onChange={toggleExpansion}
      data-testid="pdf-group-wrapper"
    >
      <AccordionSummary
        aria-controls="panel-content"
        id="panel-header"
        data-testid="pdf-group-header"
      >
        <Title variant="h2" data-testid="pdf-group-header-title">
          {title}
        </Title>
      </AccordionSummary>
      <AccordionDetails data-testid="pdf-group-body">
        {!PDFs || PDFs.length === 0 ? (
          <p>{t("viewPDF.pdfList.noFiles")}</p>
        ) : (
          PDFs.map((PDF) => (
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
          ))
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default PDFGroup
