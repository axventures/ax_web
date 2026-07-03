import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { sendWelcomeEmail } from './utils/mailService.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'send-email-api',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/api/send-welcome-email' && req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
              body += chunk;
            });
            
            req.on('end', async () => {
              try {
                const { email, fullName, companyName } = JSON.parse(body);
                
                if (!email || !fullName || !companyName) {
                  res.statusCode = 400;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: 'Missing required fields: email, fullName, companyName' }));
                  return;
                }

                const result = await sendWelcomeEmail(email, fullName, companyName);
                
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ success: result, message: result ? 'Email sent successfully' : 'Email skipped (credentials missing)' }));
              } catch (err: any) {
                console.error('[ViteDevServer] Error processing email request:', err);
                res.statusCode = 500;
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ error: err.message || 'Internal server error' }));
              }
            });
          } else {
            next();
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
  },
});
