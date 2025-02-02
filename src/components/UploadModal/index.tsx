import * as React from 'react';
import AddIcon from '@mui/icons-material/Add';
import AddMobile from '../../assets/add-mobile.svg';
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  IconButton,
  LinearProgress,
  LinearProgressProps
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useEffect, useState } from 'react';
import useAxios from 'axios-hooks';

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

function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column',
        gap: 2
      }}
    >
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'white', fontFamily: 'bebas-neue-pro', fontSize: 16 }}
        >{`Cargando ${Math.round(props.value)}%`}</Typography>
      </Box>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{
            '&.MuiLinearProgress-root': {
              overflow: 'hidden',
              backgroundImage: 'linear-gradient(#ccc, #ccc)',
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% 2px',
              backgroundPosition: '0 center',
              backgroundColor: '#000',
              height: 8
            },
            '& .MuiLinearProgress-bar': {
              backgroundColor: '#64EEBC',
              border: '4px solid #64EEBC',
              top: -2
            }
          }}
          {...props}
        />
      </Box>
    </Box>
  );
}

export default function UploadModal() {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<string | null>(null);
  const [title, setTitle] = useState<string | null>(null);
  const [formValid, setFormValid] = useState<boolean>(false);

  const [file64, setFile64] = useState<string | null>(null);
  const [progress, setProgress] = React.useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 100 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const [{ data, loading }, sendForm] = useAxios(
    {
      url: '//liteflix-5afefe60246f.herokuapp.com/movies',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      }
    },
    { manual: true }
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    sendForm({
      data: {
        title: title || '',
        image: file64 || ''
      }
    });
  };

  useEffect(() => {
    if (title && title.length > 0 && file64 && file64.length > 0) {
      console.log(title, file64, 'wtf');
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [title, file64]);

  console.log(formValid, 'formValid!!!!');
  console.log(data, 'data!!!!');

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
      <IconButton
        aria-label="Menu"
        onClick={handleOpen}
        sx={{
          display: ['block', 'block', 'none'],
          height: 42,
          width: 42,
          p: 0,
          color: 'white'
        }}
      >
        <img src={AddMobile} />
      </IconButton>
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
          {!loading ? (
            <>
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
            </>
          ) : (
            <>
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
              <Box sx={{ width: '100%' }}>
                <LinearProgressWithLabel value={progress} />
              </Box>
            </>
          )}

          <TextField
            label="Titulo"
            variant="standard"
            placeholder='Ej: "El Padrino"'
            slotProps={{ input: { style: { color: 'white' } } }}
            onChange={(e) => setTitle(e.target.value)}
            disabled={loading}
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
            disabled={!formValid || loading}
            onClick={handleSubmit}
          >
            Subir Pelicula
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
