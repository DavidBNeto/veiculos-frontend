import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"
import { useTranslation } from "react-i18next"
import { useState } from "react"
import DropdownArea from "./styles"

const Dropdown = () => {
  const [carManufacturer, setCarManufacturer] = useState<string>("")
  const { t } = useTranslation()
  const handleChange = (event: SelectChangeEvent) => {
    setCarManufacturer(event.target.value as string)
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
          sx={{ background: "#EBEBEB", color: "GrayText" }}
        >
          <MenuItem
            sx={{ background: "#EBEBEB", "&:hover": { background: "#CBCBCB" } }}
            value="jeep"
          >
            {t("fileUpload.pdfType.jeep")}
          </MenuItem>
          <MenuItem
            sx={{ background: "#EBEBEB", "&:hover": { background: "#CBCBCB" } }}
            value="chev"
          >
            {t("fileUpload.pdfType.chev")}
          </MenuItem>
          <MenuItem
            sx={{ background: "#EBEBEB", "&:hover": { background: "#CBCBCB" } }}
            value="others"
          >
            {t("fileUpload.pdfType.others")}
          </MenuItem>
        </Select>
      </FormControl>
    </DropdownArea>
  )
}

export default Dropdown
