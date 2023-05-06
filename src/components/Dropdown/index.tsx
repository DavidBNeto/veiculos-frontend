import { useTranslation } from "react-i18next"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { DropdownArea, Item } from "./styles"
import { lightGray, text } from "../../styles/colors"

const Dropdown = ({ setCarManufacturer, carManufacturer }: any) => {
  const { t } = useTranslation()
  const handleChange = (event: SelectChangeEvent) => {
    setCarManufacturer(event.target.value)
  }

  return (
    <DropdownArea>
      <FormControl sx={{ m: 1 }} fullWidth size="small">
        <InputLabel id="select-manufacturer">
          {t("fileUpload.selectAssembler")}
        </InputLabel>
        <Select
          labelId="select-manufacturer"
          id="select-manufacturer"
          value={carManufacturer}
          onChange={handleChange}
          label={t("fileUpload.selectAssembler")}
          sx={{ background: lightGray, color: text }}
        >
          <Item value="jeep">{t("fileUpload.pdfType.jeep")}</Item>
          <Item value="chevrolet">{t("fileUpload.pdfType.chev")}</Item>
          <Item value="others">{t("fileUpload.pdfType.others")}</Item>
        </Select>
      </FormControl>
    </DropdownArea>
  )
}

export default Dropdown
