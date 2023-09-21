import server from './app.js';
import config from "./config.js"

/* ➖➖🟪🟪🟪
 ➖🟪🟪🟦🟦🟦
 🟪🟪🟪🟦🟦🟦
 🟪🟪🟪🟦🟦🟦        <-- Purple sus
 🟪🟪🟪🟪🟪🟪
 ➖🟪🟪🟪🟪🟪
 ➖🟪🟪➖🟪🟪
 ➖🟪🟪➖🟪🟪 */

const { PORT } = config;

function main() {
  try {
    server.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
      console.log(`Go to http://localhost:${PORT}/api/v1/example`);
    });
  } catch (error) {
    console.error('Init server error: ', error);
  }
}

main();
