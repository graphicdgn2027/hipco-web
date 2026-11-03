import fs from 'fs';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const { ZipArchive } = require('archiver');

async function createZip() {
  const zipPath = path.resolve('hipco-cpanel-deployment.zip');
  const output = fs.createWriteStream(zipPath);
  const archive = new ZipArchive({
    zlib: { level: 9 },
  });

  return new Promise((resolve, reject) => {
    output.on('close', () => {
      console.log(`Zip creation finished successfully. Total bytes: ${archive.pointer()} (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)`);
      resolve();
    });

    archive.on('error', (err) => {
      console.error('Archive error:', err);
      reject(err);
    });

    archive.pipe(output);
    archive.directory('dist/', false);
    archive.finalize();
  });
}

createZip().catch((err) => {
  console.error(err);
  process.exit(1);
});
