import { useTranslation } from "react-i18next"
import { useNavigate, useLocation, Link } from "react-router-dom"
import Button from "../../components/Button"
import ProgressIcon from "../../components/ProgressIcon"
// import useGet from "../../hooks/useGet"
import GlobalStyle, { Container, Content } from "../../styles/styles"

const Process = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // const { error, get } = useGet()

  const { requests } = location.state
  if (requests === null) {
    navigate("/")
  }

  const showError = requests?.find((file: any) => file.error === true) || false

  if (showError) {
    return <p>Erro no POST. Tente novamente!</p>
  }

  return (
    <Container>
      <Content>
        <Link to="/view">
          <ProgressIcon progress="extracting" />
        </Link>
        {
          // Fazer um get a cada 5 segundos para verificar status de PDF's.
          // Ter uma rota no backend que passamos os nomes dos pdf's e ele retorna os status de todos
        }
        <Button
          text={t("fileUpload.buttons.cancel")}
          color="red"
          onClick={() => navigate("/")}
        />
      </Content>
      <GlobalStyle />
    </Container>
  )
}

export default Process
