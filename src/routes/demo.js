import express from 'express';
import demoCtrl from '../controllers/demoCtrl';

const demoRouter = express.Router();

/**
 * @route api/v1/demo
 * @dec
 * @access Public
 */
demoRouter.get('/', demoCtrl.getDemo);

export default demoRouter;
