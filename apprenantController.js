// controllers/apprenantController.js
import Apprenant from '../models/apprenantModel.js';

// Récupérer la liste complète des apprenants
export const getAllApprenants = async (req, res) => {
  try {
    const apprenants = await Apprenant.getAll();
    res.json(apprenants);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Récupérer un apprenant par son id
export const getApprenantById = async (req, res) => {
  try {
    const { id } = req.params;
    const apprenant = await Apprenant.getById(id);
    if (apprenant) {
      res.json(apprenant);
    } else {
      res.status(404).json({ error: 'Apprenant non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Créer un nouvel apprenant
export const createApprenant = async (req, res) => {
  try {
    const { nom, statut } = req.body;
    const newApprenant = await Apprenant.create(nom, statut);
    res.status(201).json(newApprenant);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mettre à jour un apprenant
export const updateApprenant = async (req, res) => {
  try {
    const { id } = req.params;
    const { nom, statut } = req.body;
    const existingApprenant = await Apprenant.getById(id);
    if (existingApprenant) {
      const updated = await Apprenant.update(id, nom, statut);
      res.json(updated);
    } else {
      res.status(404).json({ error: 'Apprenant non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Supprimer un apprenant
export const deleteApprenant = async (req, res) => {
  try {
    const { id } = req.params;
    const existingApprenant = await Apprenant.getById(id);
    if (existingApprenant) {
      await Apprenant.delete(id);
      res.json({ message: 'Apprenant supprimé' });
    } else {
      res.status(404).json({ error: 'Apprenant non trouvé' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
