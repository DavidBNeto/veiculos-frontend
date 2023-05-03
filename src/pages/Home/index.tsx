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
  // const [startUpload, setStartUpload] = useState(false)
  // const [uploadComplete, setUploadComplete] = useState(true)
  const [fileList, setFileList] = useState<PdfList>({
    status: false,
    files: [],
  })
  const { t } = useTranslation()

  const { post } = usePost() // error

  const processUpload = useCallback(() => {
    const response: Pdf[] = []
    uploadedFiles.forEach(async (file: any) => {
      const formData = new FormData()
      formData.append("file", file)
      await post(formData)
      /*  response.push({
        title: "2023_03_07 - MEV Chevrolet Tracker MY24.pdf",
      })
      */
      response.push({
        title: file.path,
      })
      // console.log("file: ", file.path)
    })
    // console.log("response: ", response)
    setFileList({ status: false, files: response })
    setProcessingPage(true)
    // navigate("/process", { state: { requests } })
  }, [post, uploadedFiles])

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
                        <Dropdown />
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
