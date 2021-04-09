import cors from "cors";
import express from "express";

export const GlobalMiddleWares = [
  express.json(),
  express.urlencoded({ extended: false }),
  cors(),
];
