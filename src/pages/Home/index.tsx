import { useState } from "react"
import { useTranslation } from "react-i18next"
import { usePost } from "../../hooks/useApiCall"
import Arquivo from "../../components/Arquivo"
import useFiles from "../../hooks/useFiles"
import Upload from "../../components/Upload"
import FileLoading from "../../components/FileLoading"
import Button from "../../components/Button"
import Dropdown, { CarManufacturer } from "../../components/Dropdown"
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
import ExtractProgress from "../../components/ExtractProgress"
import { Status } from "../../components/FileLoading/types"

const Home = () => {
  const [processingPage, setProcessingPage] = useState(false)
  const [startUpload, setStartUpload] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(true)
  const { t } = useTranslation()
  const {
    files,
    hasFiles,
    progress,
    updateFileState,
    updateFileCarManufacturer,
    addFile,
    removeFile,
    updateStatus,
    validateFiles,
  } = useFiles()

  const { loading, refresh, result, statusCode } = usePost({
    method: "POST",
    start: startUpload,
    data: files,
  })

  // eslint-disable-next-line no-console
  console.log(loading, refresh, result, statusCode, setUploadComplete)

  const processUpload = () => {
    // TODO: Check if file has something like "chevrolet", "jeep" and send it's type in body of the request

    setStartUpload(true)
    setProcessingPage(true)
  }

  // eslint-disable-next-line no-console
  console.log(processUpload)

  const handleDeleteClick = (index: number) => {
    const file = files[index]
    removeFile(file)
  }

  const sendFiles = () => {
    files.forEach((file) => updateFileState(file, "uploading"))
    updateStatus()
    // The lines below are just to simulate the upload process
    // TODO: Remove them and use the processUpload function instead;
    setTimeout(() => {
      let state: Status = "uploaded"
      if (Math.floor(Math.random() * 1000) % 2 === 0) state = "failed"
      files.forEach((file) => updateFileState(file, state))
      updateStatus()
    }, 3000)
    // processUpload()

    // This method is useful (and necessary) to update the state of the screen
    setProcessingPage((prev) => !prev)
  }

  const checkCarManufacturer = (file: Arquivo): CarManufacturer | "" => {
    const carManufacturers: [CarManufacturer, CarManufacturer] = [
      CarManufacturer.chev,
      CarManufacturer.jeep,
    ]
    const fileName = file.name.toLowerCase()
    const manufacturer = carManufacturers.find((item) =>
      fileName.includes(item)
    )

    if (!manufacturer) return ""

    updateFileCarManufacturer(file, manufacturer)
    return manufacturer
  }

  return (
    <Container>
      <Content>
        {processingPage ? (
          <>
            <ExtractProgress progress={progress} />
            <SubTitle>{t("fileUpload.selectedPdfs")}</SubTitle>
            <FilesWrapper>
              {files.map((file, index) => {
                return (
                  <FileLoading
                    key={file.getKey()}
                    fileName={file.name}
                    status={file.getState()}
                    handleDeleteClick={() => handleDeleteClick(index)}
                  />
                )
              })}
            </FilesWrapper>
            <Button
              text={t("fileUpload.buttons.cancel")}
              color="red"
              onClick={() => setProcessingPage((prev) => !prev)}
            />
          </>
        ) : (
          <>
            <HeaderTitle variant="h6">{t("fileUpload.title")}</HeaderTitle>
            <Upload size={hasFiles} uploadedFiles={files} addFile={addFile} />
            {hasFiles && (
              <>
                <SubTitle>{t("fileUpload.selectedPdfs")}</SubTitle>
                <FilesWrapper>
                  {files.map((file, index) => {
                    return (
                      <FilesRow key={file.name + file.size + file.type}>
                        <FileLoading
                          fileName={file.name}
                          status="downloaded"
                          handleDeleteClick={() => handleDeleteClick(index)}
                        />
                        <Dropdown
                          defaultValue={checkCarManufacturer(file)}
                          updateManufacturer={validateFiles}
                        />
                      </FilesRow>
                    )
                  })}
                </FilesWrapper>

                <SendButton>
                  <Button
                    text={t("fileUpload.buttons.send")}
                    color="blue"
                    onClick={sendFiles}
                    disabled={
                      !uploadComplete || // true
                      loading || // false
                      !hasFiles // true
                      // || !isValid //true
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
