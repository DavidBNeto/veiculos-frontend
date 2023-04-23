/* eslint-disable react/prop-types */
import React from "react"
import { useTranslation } from "react-i18next"
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress"
import Button from "../../components/Button"
import {
  ButtonWrapper,
  Container,
  Loading,
  LoadingWrapper,
  PdfStatus,
  PdfTitle,
  Section,
  SectionTitle,
  Subtitle,
  SuccessIcon,
  SuccessTitle,
  Title,
} from "./styles"
import { LinkClean } from "../NotFound/styles"

interface Pdf {
  title: string
  status: number
}
interface ProcessingPageProps {
  setProcessingPage: any
  pdfList: Pdf[]
  props?: LinearProgressProps & { value: number }
}

const ProcessingPage = ({
  setProcessingPage,
  pdfList,
  props,
}: ProcessingPageProps) => {
  const { t } = useTranslation()

  React.useEffect(() => {
    const timer = setInterval(() => {
      pdfList.map((prevProgress) =>
        prevProgress.status >= 100 ? 10 : prevProgress.status + 10
      )
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [pdfList])

  return (
    <Container>
      <Section>
        <LoadingWrapper>
          {pdfList.filter((pdf) => pdf.status < 100).length > 0 ? (
            <>
              <Loading />
              <Title>{t("extraction.title")}</Title>
              <Subtitle>{t("extraction.subtitle")}</Subtitle>
            </>
          ) : (
            <>
              <SuccessIcon />
              <SuccessTitle>{t("extraction.success")}</SuccessTitle>
            </>
          )}
        </LoadingWrapper>
      </Section>
      <Section>
        <SectionTitle>PDFs selecionados</SectionTitle>
        {pdfList.map((pdf) => (
          <PdfStatus key={pdf.title}>
            <PdfTitle>{pdf.title}</PdfTitle>
            {pdf.status < 100 ? (
              <LinearProgress
                variant="determinate"
                value={pdf.status}
                {...props}
              />
            ) : (
              ""
            )}
          </PdfStatus>
        ))}
        <ButtonWrapper>
          {pdfList.filter((pdf) => pdf.status < 100).length > 0 ? (
            <Button
              text={t("fileUpload.buttons.cancel")}
              color="red"
              width="30%"
              onClick={() => setProcessingPage((prev: any) => !prev)}
            />
          ) : (
            <LinkClean to="/view-pdf">
              <Button
                text={t("extraction.redirect")}
                color="blue"
                width="100%"
                onClick={() => {}}
              />
            </LinkClean>
          )}
        </ButtonWrapper>
      </Section>
    </Container>
  )
}

export default ProcessingPage
