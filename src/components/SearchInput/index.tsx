"use client"
import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search } from 'lucide-react'; // Importar corretamente o Search

const color_text = '#fefefe'

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="flex justify-center items-center">
      <TextField
        value={searchQuery}
        onChange={handleChange}
        variant="outlined"
        placeholder="Localizar uma configuração"
        fullWidth
        sx={{
          maxWidth: 400,  // Limita a largura máxima do input
          backgroundColor: '#282828',
          borderRadius: 1,
          '& .MuiOutlinedInput-root': {
            color: color_text,
            fontSize: '18px',
            // Cor do texto
            '& fieldset': {
              borderColor: '#B0B0B0',  // Cor da borda
            },
            '&:hover fieldset': {
              borderColor: '#8A8A8A',  // Cor da borda ao passar o mouse
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1E88E5',  // Cor da borda quando focado
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Search color={color_text} size={20} /> {/* Usando o Search corretamente como um componente */}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}
