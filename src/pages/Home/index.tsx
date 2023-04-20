import { useState } from "react"
import { useTranslation } from "react-i18next"
import { usePost } from "../../hooks/useApiCall"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import {
  Container,
  Content,
  FilesRow,
  FilesWrapper,
  HeaderTitle,
  SelectedFiles,
  SendButton,
  SubTitle,
} from "./styles"
import GlobalStyle from "../../styles/styles"
import Dropdown from "../../components/Dropdown"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [processingPage, setProcessingPage] = useState(false)
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

  return (
    <Container>
      <Content>
        {processingPage ? (
          <>
            <p>Página de Processamento</p>
            <Button
              text={t("fileUpload.buttons.cancel")}
              color="red"
              onClick={() => setProcessingPage((prev) => !prev)}
            />
          </>
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
                <SelectedFiles>
                  <FilesWrapper>
                    {uploadedFiles.map((file, index) => {
                      return (
                        <FilesRow key={file.name + file.size + file.type}>
                          <FileLoading
                            fileName={file.name}
                            status="downloaded"
                            handleDeleteClick={() => handleDeleteClick(index)}
                          />
                          <Dropdown />
                        </FilesRow>
                      )
                    })}
                  </FilesWrapper>
                </SelectedFiles>

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
