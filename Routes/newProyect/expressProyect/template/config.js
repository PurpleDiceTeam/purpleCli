import dotenv from 'dotenv';

dotenv.config();

const env = process.env

export default {
  PORT: env.PORT,
  CORSEURL: env.CORSEURL
}
