import { useTranslation } from "react-i18next"
import { TFunction } from "i18next"
import { LoadingIconSpin } from "../FileLoading"
import { Wrapper, IconWrapper, Title, LoadingWrapper } from "./styles"
import { ExtractProgressProps } from "./types"
import Success from "../../assets/Loaded"
import Failed from "../../assets/Failed"

const getText = (
  translate: TFunction<"translation", undefined, "translation">,
  progress: string
) => {
  return translate(`extraction.${progress}`)
}

const ExtractProgress = ({ progress }: ExtractProgressProps) => {
  const { t } = useTranslation()

  const text = getText(t, progress)
  let imagem
  if (progress === "extracting") {
    imagem = (
      <LoadingWrapper>
        <LoadingIconSpin size={60} thickness={5.4} />
      </LoadingWrapper>
    )
  } else if (progress === "fail") {
    imagem = <Failed />
  } else if (progress === "success") {
    imagem = <Success />
  }

  return (
    <Wrapper>
      <IconWrapper>{imagem}</IconWrapper>
      <Title variant="h2" data-progress={progress}>
        {text}
      </Title>
    </Wrapper>
  )
}

export default ExtractProgress
