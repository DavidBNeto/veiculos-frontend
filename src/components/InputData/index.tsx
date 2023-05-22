import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { green, grey, blue } from '@mui/material/colors';

function InputComponent() {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setClicked(true);
  };

  const handleInputFocus = () => {
    setClicked(false);
  };

  return (
    <div>
      <TextField
        type="text"
        value={value}
        inputMode="text"
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          style: {
            backgroundColor: clicked ? blue[50] : 'transparent',
          },
          onFocus: handleInputFocus,
          endAdornment: (
            <img
              src="src\assets\CopyInput.png" // caminho da sua imagem
              alt="Copiar"
              onClick={handleCopyClick}
              style={{
                cursor: 'pointer',
                marginLeft: '8px',
              }}
            />
          ),
        }}
      />
      {copied}
    </div>
  );
}

export default InputComponent;
