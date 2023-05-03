import { Button } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Content, LinkClean, NotFoundText } from "./styles"

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Content>
      <NotFoundText variant="h1" data-testid="not-found-title">
        {t("notFound.title")}
      </NotFoundText>
      <NotFoundText variant="h6" data-testid="not-found-subtitle">
        {t("notFound.subtitle")}
      </NotFoundText>
      <LinkClean to="/">
        <Button variant="contained" data-testid="not-found-button">
          {t("notFound.button")}
        </Button>
      </LinkClean>
    </Content>
  )
}

export default NotFound
