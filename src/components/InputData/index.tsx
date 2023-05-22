import { useState } from "react"
import TextField from "@mui/material/TextField"
import { blue } from "@mui/material/colors"
import { InputAdornment } from "@mui/material"

type InputProps = {
  data?: string
}

function InputComponent({ data }: InputProps) {
  const [value, setValue] = useState("")
  const [copied, setCopied] = useState(false)
  const [clicked, setClicked] = useState(false)

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setClicked(true)
  }

  const handleInputFocus = () => {
    setClicked(false)
  }

  return (
    <div>
      <TextField
        type="text"
        value={data}
        inputMode="text"
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          style: {
            backgroundColor: clicked ? blue[50] : "transparent",
          },
          onFocus: handleInputFocus,
          endAdornment: (
            <InputAdornment position="end">
              <img
                src="src\assets\CopyInput.png"
                alt="Copiar"
                onClick={handleCopyClick}
                style={{
                  cursor: "pointer",
                  marginLeft: "8px",
                  width: "30px",
                }}
              />
            </InputAdornment>
          ),
        }}
      />
      {copied}
    </div>
  )
}

export default InputComponent