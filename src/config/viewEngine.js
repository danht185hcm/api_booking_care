import express from 'express';
import path from 'path';

const configViewEngine = (app) => {
  app.use(express.static(path.join(__dirname, 'src', 'public')));
};

export default configViewEngine;
