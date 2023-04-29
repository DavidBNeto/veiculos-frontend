import { useState } from "react"
import { useTranslation } from "react-i18next"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import { DropdownArea, Item } from "./styles"
import { lightGray, text } from "../../styles/colors"

export enum CarManufacturer {
  chev = "chev",
  jeep = "jeep",
  others = "others",
}

interface DropdownProps {
  defaultValue?: CarManufacturer | ""
  updateManufacturer: () => void
}

const Dropdown = ({
  defaultValue = "",
  updateManufacturer,
}: DropdownProps): JSX.Element => {
  const [carManufacturer, setCarManufacturer] = useState<string>(defaultValue)
  const { t } = useTranslation()

  return (
    <DropdownArea>
      <FormControl variant="filled" size="small" fullWidth>
        <InputLabel id="demo-select-small">Selecione a montadora</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={carManufacturer}
          onChange={(event) => {
            updateManufacturer()
            setCarManufacturer(event.target.value as CarManufacturer | "")
          }}
          label={t("fileUpload.selectAssembler")}
          sx={{ background: lightGray, color: text }}
        >
          <Item value="chev">{t("fileUpload.pdfType.jeep")}</Item>
          <Item value="jeep">{t("fileUpload.pdfType.chev")}</Item>
          <Item value="others">{t("fileUpload.pdfType.others")}</Item>
        </Select>
      </FormControl>
    </DropdownArea>
  )
}

export default Dropdown
