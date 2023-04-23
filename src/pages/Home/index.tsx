import { useState } from "react"
import { useTranslation } from "react-i18next"
import { usePost } from "../../hooks/useApiCall"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import {
  Container,
  Content,
  HeaderTitle,
  SubTitle,
  FilesWrapper,
  FilesRow,
  SendButton,
} from "./styles"
import GlobalStyle from "../../styles/styles"
import ProcessingPage from "../ProcessingPage"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [processingPage, setProcessingPage] = useState(true)
  const [startUpload, setStartUpload] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(true)
  const { t } = useTranslation()

  const { loading, refresh, result, statusCode } = usePost({
    method: "POST",
    start: startUpload,
    data: uploadedFiles,
  })

  // eslint-disable-next-line no-console
  console.log(
    loading,
    refresh,
    result,
    statusCode,
    setUploadedFiles,
    setUploadComplete
  )

  const processUpload = () => {
    // TODO: Check if file has something like "chevrolet", "jeep" and send it's type in body of the request

    setStartUpload(true)
    setProcessingPage(true)
  }

  // eslint-disable-next-line no-console
  console.log(processUpload)

  const handleDeleteClick = (index: number) => {
    const newUploadedFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newUploadedFiles)
  }
  const mockPDFList = [
    {
      title: "2023_03_07 - MEV Chevrolet Tracker MY24.pdf ",
      status: 0,
    },
    {
      title: "LP Jeep Nacional Commander  - Dez 22.pdf ",
      status: 0,
    },
    {
      title: "LP Jeep Nacional Commander 1  - Dez 22.pdf ",
      status: 0,
    },
  ]
  return (
    <Container>
      <Content>
        {processingPage ? (
          <ProcessingPage
            pdfList={mockPDFList}
            setProcessingPage={setProcessingPage}
          />
        ) : (
          <>
            <HeaderTitle variant="h6">{t("fileUpload.title")}</HeaderTitle>
            <Upload
              size={uploadedFiles.length > 0}
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
            />
            {uploadedFiles.length > 0 && (
              <>
                <SubTitle>{t("fileUpload.selectedPdfs")}</SubTitle>
                <FilesWrapper>
                  {uploadedFiles.map((file, index) => {
                    return (
                      <FilesRow key={file.name + file.size + file.type}>
                        <FileLoading
                          fileName={file.name}
                          status="downloaded"
                          handleDeleteClick={() => handleDeleteClick(index)}
                        />
                        <p>Dropdown aqui</p>
                      </FilesRow>
                    )
                  })}
                </FilesWrapper>

                <SendButton>
                  <Button
                    text={t("fileUpload.buttons.send")}
                    color="blue"
                    onClick={() => setProcessingPage((prev) => !prev)}
                    disabled={
                      !uploadComplete || loading || uploadedFiles.length === 0
                    }
                  />
                </SendButton>
              </>
            )}
          </>
        )}
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Home
