import { spawn, execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

console.log('👑 Starting Yes Rajvada Hotel MERN Application...\n');

// Cleanly terminate any zombie process on port 5000 on Windows
if (process.platform === 'win32') {
  try {
    const out = execSync('netstat -ano | findstr :5000', { encoding: 'utf8' });
    const lines = out.trim().split('\n');
    for (const line of lines) {
      const parts = line.trim().split(/\s+/);
      const pid = parts[parts.length - 1];
      if (pid && !isNaN(pid) && pid !== '0') {
        execSync(`taskkill /F /PID ${pid}`, { stdio: 'ignore' });
      }
    }
  } catch (e) {
    // Port 5000 is free
  }
}

const isWin = process.platform === 'win32';
const npmCmd = isWin ? 'npm.cmd' : 'npm';

// Start Backend Server
const server = spawn(npmCmd, ['run', 'start'], {
  cwd: path.join(root, 'server'),
  stdio: 'inherit',
  shell: true,
});

// Start Frontend Client
const client = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.join(root, 'client'),
  stdio: 'inherit',
  shell: true,
});

const cleanup = () => {
  try {
    server.kill();
    client.kill();
  } catch (e) {}
  process.exit();
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
