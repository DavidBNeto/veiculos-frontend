/* eslint-disable react/prop-types */
import React from "react"
import { useTranslation } from "react-i18next"
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

export interface Pdf {
  title: string
}

export interface PdfList {
  status: boolean
  files: Pdf[]
}
interface ProcessingPageProps {
  setProcessingPage: any
  pdfList: PdfList
  uploadComplete: boolean
}

const ProcessingPage = ({
  setProcessingPage,
  pdfList,
  uploadComplete,
}: ProcessingPageProps) => {
  const { t } = useTranslation()

  return (
    <Container>
      <Section>
        <LoadingWrapper>
          {!uploadComplete ? (
            <>
              <Loading />
              <Title>{t("extraction.extracting")}</Title>
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
        {pdfList.files.map((pdf) => (
          <PdfStatus key={pdf.title}>
            <PdfTitle>{pdf.title}</PdfTitle>
          </PdfStatus>
        ))}
        <ButtonWrapper>
          {!uploadComplete ? (
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
