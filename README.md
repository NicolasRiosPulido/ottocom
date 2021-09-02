## Deploy on Vercel

ssh administrador@idtek.com.co -p 22003

pm2 stop ottocom
cd otto/ottocom/
git pull
npm install
npm run build
pm2 start ottocom

