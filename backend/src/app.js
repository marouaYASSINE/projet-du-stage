const express = require('express');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Création et configuration de l'application Express
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456', // Remplacez par votre mot de passe
  database: 'elec_site'
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion: ' + err.stack);
    return;
  }
  console.log('Connecté à la base de données avec l\'id ' + db.threadId);
});

// Configuration de Multer pour le téléchargement des fichiers
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Modèle de référence
const Reference = function(reference) {
  this.logo_path = reference.logo_path;
};

Reference.create = (newReference, result) => {
  db.query("INSERT INTO company_references SET ?", newReference, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newReference });
  });
};

Reference.getAll = result => {
  db.query("SELECT * FROM company_references", (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

Reference.remove = (id, result) => {
  db.query("DELETE FROM company_references WHERE id = ?", id, (err, res) => {
    if (err) {
      result(err, null);
      return;
    }
    result(null, res);
  });
};

// Contrôleur de référence
const referenceController = {
  addReference: (req, res) => {
    if (!req.file) {
      return res.status(400).send({ message: 'No file uploaded' });
    }
    const logoPath = req.file.path;
    console.log('File path:', logoPath); // Debug log
    const newReference = new Reference({ logo_path: logoPath });

    Reference.create(newReference, (err, data) => {
      if (err) {
        console.error('Error inserting reference:', err); // Debug log
        res.status(500).send({ message: err.message });
      } else {
        res.send(data);
      }
    });
  },

  getAllReferences: (req, res) => {
    Reference.getAll((err, data) => {
      if (err) {
        console.error('Error fetching references:', err); // Debug log
        res.status(500).send({ message: err.message });
      } else {
        res.send(data);
      }
    });
  },

  deleteReference: (req, res) => {
    const id = req.params.id;

    Reference.remove(id, (err, data) => {
      if (err) {
        console.error('Error deleting reference:', err); // Debug log
        res.status(500).send({ message: err.message });
      } else {
        res.send({ message: 'Reference was deleted successfully' });
      }
    });
  }
};

// Routes
app.post('/api/references/add', upload.single('logo'), referenceController.addReference);
app.get('/api/references/all', referenceController.getAllReferences);
app.delete('/api/references/delete/:id', referenceController.deleteReference);

// Démarrage du serveur
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});