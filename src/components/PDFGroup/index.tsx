import { useState } from "react"
import { useTranslation } from "react-i18next"
import { styled } from "@mui/material/styles"
import { Typography } from "@material-ui/core"
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp"
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary"
import { Title, AccordionDetails } from "./styles"
import { PDF } from "../PDFList/types"

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
  PDFs: PDF[]
  defaultExpanded?: true
  /** Should move PDFs state to 'active' and to open editors tab */
  onPDFclick: (PDF: PDF) => void
  /** Should move PDF to complete files tab
   * implemented by save button
   */
  // TODO: implement
  // onPDFchange?: (PDF: PDF) => void
}

const PDFGroup = ({
  title,
  PDFs,
  defaultExpanded,
  onPDFclick,
}: // , onPDFchange
PDFGroupProps) => {
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
          <Typography>{t("viewPDF.pdfList.noFiles")}</Typography>
        ) : (
          PDFs.map((file) => (
            <div
              key={file.name}
              style={{
                width: "100%",
                height: "50px",
                border: "1px solid black",
              }}
              role="button"
              tabIndex={0}
              onKeyDown={() => onPDFclick({ ...file, status: "Concluído" })}
              onClick={() => onPDFclick({ ...file, status: "Concluído" })}
            >
              {file.name}
            </div>
          ))
        )}
      </AccordionDetails>
    </Accordion>
  )
}

export default PDFGroup
