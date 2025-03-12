// routes/apprenantsRoutes.js
import express from 'express';
import {
  getAllApprenants,
  getApprenantById,
  createApprenant,
  updateApprenant,
  deleteApprenant
} from '../controllers/apprenantController.js';

const router = express.Router();

// Route pour récupérer tous les apprenants
router.get('/', getAllApprenants);

// Route pour récupérer un apprenant par son id
router.get('/:id', getApprenantById);

// Route pour créer un nouvel apprenant
router.post('/', createApprenant);

// Route pour mettre à jour un apprenant
router.put('/:id', updateApprenant);

// Route pour supprimer un apprenant
router.delete('/:id', deleteApprenant);

export default router;
