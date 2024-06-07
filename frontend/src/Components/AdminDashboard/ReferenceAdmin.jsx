import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, Container, Grid, Card, CardContent, CardMedia, Button, Snackbar, Alert, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '32px', // Utilisation de valeurs de padding manuelles
  },
  appBar: {
    marginBottom: '32px', // Utilisation de valeurs de margin manuelles
  },
  form: {
    width: '100%',
    marginBottom: '32px', // Utilisation de valeurs de margin manuelles
  },
  fileInput: {
    display: 'none',
  },
  uploadButton: {
    marginTop: '16px', // Utilisation de valeurs de margin manuelles
  },
  fileName: {
    marginTop: '16px', // Utilisation de valeurs de margin manuelles
  },
  card: {
    maxWidth: 345,
    margin: 'auto',
  },
  media: {
    height: 140,
  },
  button: {
    marginTop: '16px', // Utilisation de valeurs de margin manuelles
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const ReferenceAdmin = () => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [references, setReferences] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('success');

  useEffect(() => {
    fetchReferences();
  }, []);

  const fetchReferences = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/references/all');
      setReferences(res.data);
    } catch (error) {
      console.error('Error fetching references:', error);
    }
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('logo', file);
    try {
      await axios.post('http://localhost:5000/api/references/add', formData);
      fetchReferences();
      setSnackbarMessage('Référence ajoutée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error adding reference:', error);
      setSnackbarMessage('Erreur lors de l\'ajout de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/references/delete/${id}`);
      fetchReferences();
      setSnackbarMessage('Référence supprimée avec succès');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      console.error('Error deleting reference:', error);
      setSnackbarMessage('Erreur lors de la suppression de la référence');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6">
            Admin Panel
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
          Ajouter une Référence
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <input
                accept="image/*"
                className={classes.fileInput}
                id="contained-button-file"
                type="file"
                onChange={handleFileChange}
              />
              <label htmlFor="contained-button-file">
                <Button variant="contained" color="primary" component="span">
                  Choisir un fichier
                </Button>
              </label>
            </Grid>
            <Grid item>
              {file && <Typography variant="body1" className={classes.fileName}>{file.name}</Typography>}
            </Grid>
            <Grid item>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.uploadButton}
              >
                Ajouter
              </Button>
            </Grid>
          </Grid>
        </form>
        <Grid container spacing={4}>
          {references.map((ref) => (
            <Grid item key={ref.id} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.media}
                  image={`http://localhost:5000/${ref.logo_path}`}
                  title="Reference Logo"
                  component="img"
                  onError={(e) => { 
                    e.target.onerror = null; 
                    e.target.src = 'http://localhost:5000/images/placeholder.png';
                  }}
                />
                <CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleDelete(ref.id)}
                    className={classes.button}
                  >
                    Supprimer
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Snackbar
          open={snackbarOpen}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </div>
    </ThemeProvider>
  );
};

export default ReferenceAdmin;