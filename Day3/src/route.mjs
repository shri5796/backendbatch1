// const express = require('express');
import { getCountry,addCountry } from './controller/country.mjs';
import express from 'express'
const router= express.Router();
router.get('/:country',getCountry )
router.post('/add',addCountry)
// module.exports=router;
export default router;