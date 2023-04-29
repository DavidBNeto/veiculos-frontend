import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import React from "react"
import { DropdownArea } from "./styles"

export enum CarManufacturer {
  chev = "chev",
  jeep = "jeep",
  others = "others",
}

interface DropdownProps {
  defaultValue?: CarManufacturer | ""
  updateManufacturer: () => void
}

export default function Dropdown({
  defaultValue = "",
  updateManufacturer,
}: DropdownProps): JSX.Element {
  const [carManufacturer, setCarManufacturer] = React.useState(defaultValue)

  return (
    <DropdownArea>
      <FormControl variant="filled" size="small" fullWidth>
        <InputLabel id="demo-select-small">Selecione a montadora</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={carManufacturer}
          label="Selecone a montadora"
          onChange={(event) => {
            updateManufacturer()
            setCarManufacturer(event.target.value as CarManufacturer | "")
          }}
        >
          <MenuItem value="chev">Chevrolet (GM) </MenuItem>
          <MenuItem value="jeep">Jeep</MenuItem>
          <MenuItem value="others">Outra</MenuItem>
        </Select>
      </FormControl>
    </DropdownArea>
  )
}
