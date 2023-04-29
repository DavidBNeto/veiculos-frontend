import Dropzone from "react-dropzone"
import { useTranslation } from "react-i18next"
import {
  BoxArea,
  BoxAreaMessages,
  BoxAreaSubtitle,
  BoxAreaTitle,
  UploadIcon,
} from "./styles"
import Arquivo from "../Arquivo"

interface UploadProps {
  size: boolean
  uploadedFiles: Arquivo[]
  addFile: (file: Arquivo) => void
}

const Upload = ({ size, uploadedFiles, addFile }: UploadProps) => {
  const { t } = useTranslation()

  const renderDragMessage = (isDragActive: any, isDragReject: any) => {
    if (!isDragActive) {
      return (
        <BoxAreaTitle variant="h6">
          {t("fileUpload.dropzone.title")}
          <b>{t("fileUpload.dropzone.titleURL")}</b>
        </BoxAreaTitle>
      )
    }
    if (isDragReject) {
      return (
        <BoxAreaTitle variant="h6" type="error">
          {t("fileUpload.dropzone.rejected")}
        </BoxAreaTitle>
      )
    }

    return (
      <BoxAreaTitle variant="h6" type="success">
        {t("fileUpload.dropzone.accepted")}
      </BoxAreaTitle>
    )
  }

  return (
    <Dropzone
      accept={{
        "application/pdf": [".pdf"],
      }}
      onDropAccepted={(files: File[]) => {
        files.forEach((file) => {
          const fileAlreadyAdded = !!uploadedFiles.find((item) => item === file)
          if (!fileAlreadyAdded) addFile(new Arquivo(file))
        })
      }}
    >
      {({ getRootProps, getInputProps, isDragActive, isDragReject }: any) => (
        <BoxArea
          {...getRootProps()}
          size={size}
          isDragActive={isDragActive}
          isDragRejected={isDragReject}
          type={isDragActive && (isDragReject ? "error" : "success")}
        >
          <input {...getInputProps()} />
          <BoxAreaMessages>
            <UploadIcon />
            {renderDragMessage(isDragActive, isDragReject)}
            <BoxAreaSubtitle variant="body1">
              {t("fileUpload.dropzone.warning")}
            </BoxAreaSubtitle>
          </BoxAreaMessages>
        </BoxArea>
      )}
    </Dropzone>
  )
}

export default Upload
