import app from './index.js';
import logger from './utils/logger.js';

const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
    logger.info(`Server is running on port: ${port}`);
});