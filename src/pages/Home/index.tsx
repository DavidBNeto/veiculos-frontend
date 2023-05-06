import { useCallback, useState } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import Dropdown from "../../components/Dropdown"
import usePost from "../../hooks/usePost"
import { SubTitle, FilesWrapper, FilesRow, SendButton } from "./styles"
import GlobalStyle, {
  Container,
  Content,
  HeaderTitle,
} from "../../styles/styles"

import ProcessingPage, { Pdf, PdfList } from "../ProcessingPage"

const Home = () => {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([])
  const [processingPage, setProcessingPage] = useState(false)
  const [carManufacturer, setCarManufacturer] = useState("")
  const [uploadComplete, setUploadComplete] = useState(false)
  const [fileList, setFileList] = useState<PdfList>({
    status: false,
    files: [],
  })
  const { t } = useTranslation()

  const { post } = usePost()

  const processUpload = useCallback(() => {
    setUploadComplete(false)
    const response: Pdf[] = []
    setProcessingPage(true)

    uploadedFiles.forEach(async (file: any) => {
      response.push({
        title: file.path,
      })
      const formData = new FormData()
      formData.append("file", file)
      formData.append("montadora", carManufacturer)

      await post(formData).then(() => {
        setUploadComplete(true)
      })
    })
    setFileList({ status: false, files: response })
  }, [carManufacturer, post, uploadedFiles])

  const handleDeleteClick = (index: number) => {
    const newUploadedFiles = uploadedFiles.filter((_, i) => i !== index)
    setUploadedFiles(newUploadedFiles)
  }

  return (
    <Container>
      <Content>
        {processingPage ? (
          <ProcessingPage
            pdfList={fileList}
            setProcessingPage={setProcessingPage}
            uploadComplete={uploadComplete}
          />
        ) : (
          <>
            <Link to="/view">
              <HeaderTitle variant="h6">{t("fileUpload.title")}</HeaderTitle>
            </Link>
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
                        <Dropdown
                          carManufacturer={carManufacturer}
                          setCarManufacturer={setCarManufacturer}
                        />
                      </FilesRow>
                    )
                  })}
                </FilesWrapper>
                <SendButton>
                  <Button
                    text={t("fileUpload.buttons.send")}
                    color="blue"
                    onClick={() => processUpload()}
                    disabled={uploadedFiles.length === 0}
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
