#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Iniciando deploy de produção...');

try {
  // 1. Executar build de produção
  console.log('📦 Executando build de produção...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // 2. Verificar se a pasta dist existe
  const distPath = path.join(__dirname, 'dist');
  if (!fs.existsSync(distPath)) {
    throw new Error('Pasta dist não encontrada. Build falhou.');
  }
  
  // 3. Inicializar git na pasta dist (se não existir)
  process.chdir(distPath);
  
  try {
    execSync('git status', { stdio: 'pipe' });
  } catch {
    console.log('🔧 Inicializando repositório Git na pasta dist...');
    execSync('git init', { stdio: 'inherit' });
  }
  
  // 4. Adicionar todos os arquivos
  console.log('📁 Adicionando arquivos de produção...');
  execSync('git add .', { stdio: 'inherit' });
  
  // 5. Fazer commit
  const commitMessage = `Deploy de produção - ${new Date().toISOString()}`;
  console.log('💾 Fazendo commit...');
  execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
  
  // 6. Configurar remote (substitua pela URL do seu repositório)
  console.log('🔗 Configurando remote...');
  console.log('⚠️  IMPORTANTE: Configure o remote do seu repositório GitHub:');
  console.log('   git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git');
  console.log('   git branch -M main');
  console.log('   git push -u origin main --force');
  
  console.log('✅ Build de produção concluído com sucesso!');
  console.log('📂 Arquivos prontos para produção estão na pasta dist/');
  console.log('🌐 Execute os comandos acima para enviar para o GitHub');
  
} catch (error) {
  console.error('❌ Erro durante o deploy:', error.message);
  process.exit(1);
}