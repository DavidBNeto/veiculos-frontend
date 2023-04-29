import { useState } from "react"
import Arquivo from "../components/Arquivo"
import { Progress } from "../components/ExtractProgress/types"
import { Status } from "../components/FileLoading/types"
import { CarManufacturer } from "../components/Dropdown"

const useFiles = () => {
  const [files, setFiles] = useState<Arquivo[]>([])
  const [hasFiles, setHasFiles] = useState<boolean>(false)
  const [isValid, setIsValid] = useState<boolean>(false)
  const [progress, setProgress] = useState<Progress>("extracting")

  const updateFileState = (_file: Arquivo, state: Status) => {
    const file = files.find((f) => f === _file)
    if (!file) return
    file.setState(state)
  }

  const updateFileCarManufacturer = (
    _file: Arquivo,
    carManufacturer: CarManufacturer
  ) => {
    const file = files.find((f) => f === _file)
    if (!file) return
    file.setCarManufacturer(carManufacturer)
  }

  const addFile = (file: Arquivo) => {
    setFiles((prev) => [...prev, file])
    setHasFiles(true)
    setIsValid(false)
  }

  const removeFile = (file: Arquivo) => {
    setFiles((prev) => prev.filter((f) => f !== file))
    setHasFiles(files.length > 1)
  }

  const updateStatus = () => {
    let failsController = false
    let extractingController = false
    let successController = false

    successController = files.every((file) => {
      return file.getState() === "uploaded"
    })
    extractingController = files.some((file) => {
      return file.getState() === "uploading"
    })
    failsController = files.some((file) => {
      return file.getState() === "failed"
    })
    if (successController) {
      setProgress("success")
    }
    if (extractingController) {
      setProgress("extracting")
    }
    if (failsController) {
      setProgress("fail")
    }
  }

  const validateFiles = () => {
    if (isValid) return
    setIsValid(
      files.every((file) => {
        return file.getCarManufacturer()
      })
    )
  }

  return {
    files,
    hasFiles,
    isValid,
    progress,
    updateFileState,
    updateFileCarManufacturer,
    addFile,
    removeFile,
    updateStatus,
    validateFiles,
  }
}

export default useFiles
