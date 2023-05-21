import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { green, grey } from '@mui/material/colors';

function InputComponent() {
  const [value, setValue] = useState('');
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
  };

  return (
    <div>
      <TextField
        type="text"
        value={value}
        inputMode="text" // Permitir entrada de números e letras
        onChange={(event) => setValue(event.target.value)}
        InputProps={{
          style: {
            borderColor: copied ? green[500] : grey[500],
          },
        }}
      />
      <Button onClick={handleCopyClick}>Copiar</Button>
      {copied && <span>Valor copiado!</span>}
    </div>
  );
}

export default InputComponent;
