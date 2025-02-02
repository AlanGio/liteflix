import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';

export default function UploadModal() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [formValid, setFormValid] = useState<boolean>(false);

  const [file64, setFile64] = React.useState<string | null>(null);
  const [form, setForm] = React.useState<{
    title: string;
    image: string;
  } | null>();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  async function getBase64(
    file: File,
    callback: (
      error: ProgressEvent<FileReader> | null,
      result?: string | ArrayBuffer | null
    ) => void
  ) {
    const reader = new FileReader();
    reader.onload = () => callback(null, reader.result);
    reader.onerror = (error) => callback(error);
    reader.readAsDataURL(file);
  }

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    acceptedFiles.forEach((file: File) => {
      getBase64(file, (_, result) => setFile64(result as string));
      setFile(file.name);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false
  });

  const handleSubmit = () => {
    setForm({
      title: title || '',
      image: file64 || ''
    });
  };

  useEffect(() => {
    if (title !== '' && file64 !== '') {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [title, file64]);

  console.log(formValid);

  return (
    <div>
      <Button
        variant="outlined"
        startIcon={<AddIcon />}
        onClick={handleOpen}
        sx={{
          display: ['none', 'none', 'flex'],
          color: '#fff',
          border: 'none',
          fontFamily: 'bebas-neue-pro',
          fontSize: '18px',
          fontWeight: 700,
          lineHeight: '18px',
          letterSpacing: '4px',
          height: 42,
          '&:hover': {
            backgroundColor: 'rgba(100, 238, 188, 0.4)',
            animation: 'pulse 2s infinite'
          }
        }}
      >
        Agregar Pelicula
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: '#000',
            color: '#fff',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 6,
            width: ['90%', '90%', '60%']
          }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{
              fontFamily: 'bebas-neue-pro',
              fontSize: '20px',
              fontWeight: 700,
              lineHeight: '20px',
              letterSpacing: '4px',
              color: '#64EEBC'
            }}
          >
            agregar película
          </Typography>

          <Box
            {...getRootProps()}
            sx={{
              px: 12,
              py: 5,
              border: '1px dashed #fff',
              textAlign: 'center',
              '&:hover': {
                border: '2px dashed #ccc',
                animation: 'pulse 2s infinite'
              }
            }}
          >
            <input {...getInputProps()} />
            <Typography
              sx={{
                fontFamily: 'bebas-neue-pro',
                fontSize: 16,
                fontWeight: 700,
                lineHeight: '16px',
                letterSpacing: '4px'
              }}
            >
              Agregá un archivo o arrastralo y soltalo aquí
            </Typography>
          </Box>

          {file && (
            <Typography
              sx={{
                fontFamily: 'bebas-neue-pro',
                fontSize: 16,
                fontWeight: 700,
                lineHeight: '16px',
                letterSpacing: '4px'
              }}
            >
              {file}
            </Typography>
          )}

          <TextField
            label="Titulo"
            variant="standard"
            placeholder='Ej: "El Padrino"'
            slotProps={{ input: { style: { color: 'white' } } }}
            onChange={(e) => setTitle(e.target.value)}
            sx={{
              fontFamily: 'bebas-neue-pro',
              '& .MuiFormLabel-root': {
                fontFamily: 'bebas-neue-pro',
                fontSize: '16px',
                color: 'white',
                display: 'block',
                width: '100%',
                '&.Mui-focused': {
                  color: 'white',
                  display: 'block',
                  width: '100%'
                }
              },
              textAlign: 'center',
              '&::placeholder': {
                color: 'white'
              },
              color: 'white',
              borderBottom: '1px solid white'
            }}
          />

          <Button
            variant="contained"
            sx={{
              color: 'black',
              height: 56,
              px: 4,
              fontFamily: 'bebas-neue-pro',
              fontSize: '18px',
              fontWeight: 400,
              minWidth: 248,
              lineHeight: '21.6px',
              letterSpacing: '4px',
              backgroundColor: '#fff',
              borderRadius: 0,
              '&:hover': {
                animation: 'pulse 2s infinite',
                backgroundColor: '#ccc'
              },
              '&:disabled': {
                backgroundColor: '#ccc'
              }
            }}
            disabled={!formValid}
            onClick={handleSubmit}
          >
            Subir Pelicula
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
