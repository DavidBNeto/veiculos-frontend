import { useMemo } from "react"
import { useTranslation } from "react-i18next"
import { LoadingIconSpin } from "../FileLoading"
import Success from "../../assets/Loaded"
import Failed from "../../assets/Failed"
import { ProgressProps } from "./types"
import { Wrapper, IconWrapper, Title, LoadingWrapper } from "./styles"

const ProgressIcon = ({ progress }: ProgressProps) => {
  const { t } = useTranslation()

  const text = useMemo(() => {
    return t(`extraction.${progress}`)
  }, [progress, t])

  const image = useMemo(() => {
    if (progress === "success") {
      return <Success />
    }

    if (progress === "fail") {
      return <Failed />
    }

    return (
      <LoadingWrapper>
        <LoadingIconSpin size={60} thickness={5.4} />
      </LoadingWrapper>
    )
  }, [progress])

  return (
    <Wrapper>
      <IconWrapper data-testid={progress}>{image}</IconWrapper>
      <Title variant="h2" data-progress={progress}>
        {text}
      </Title>
    </Wrapper>
  )
}

export default ProgressIcon
