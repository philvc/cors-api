import express from "express";
import cors from "cors";
import nextConnect, { NextConnect } from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';

const baseHandler = () => nextConnect().use(cors());

export default baseHandler().get(
    (req, res) =>
        res.status(200).json({ name: 'John Doe' })
)