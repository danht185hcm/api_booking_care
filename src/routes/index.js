import demoRouter from './demo';

const route = (app) => {
  app.use('/api/v1/demo', demoRouter);
};

export default route;
