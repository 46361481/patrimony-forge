# 🚀 Instruções de Deploy de Produção

## Problema Resolvido

Este projeto agora está configurado para gerar e publicar **apenas os arquivos de produção** no GitHub, resolvendo o problema onde o código de desenvolvimento (`/src/main.tsx`) estava sendo enviado em vez dos arquivos compilados.

## ✅ O que foi configurado:

1. **Build de produção funcional** - Gera arquivos otimizados na pasta `dist/`
2. **GitHub Actions automático** - Deploy automático a cada push
3. **Script de deploy manual** - Para controle total do processo

## 🔧 Como usar:

### Opção 1: Deploy Automático (Recomendado)

O GitHub Actions está configurado em `.github/workflows/deploy.yml` e fará o deploy automaticamente quando você fizer push para a branch `main` ou `master`.

**Passos:**
1. Faça suas alterações no código
2. Commit e push para o GitHub:
   ```bash
   git add .
   git commit -m "Suas alterações"
   git push origin main
   ```
3. O GitHub Actions automaticamente:
   - Executará `npm run build`
   - Publicará o conteúdo da pasta `dist/` no GitHub Pages

### Opção 2: Deploy Manual

Use o script personalizado para ter controle total:

```bash
npm run deploy
```

Este comando:
1. Executa o build de produção
2. Prepara os arquivos na pasta `dist/`
3. Mostra instruções para enviar ao GitHub

### Opção 3: Build Local + Upload Manual

```bash
# 1. Gerar build de produção
npm run build

# 2. Os arquivos estarão em dist/
# 3. Faça upload manual da pasta dist/ para seu servidor
```

## 📁 Estrutura dos Arquivos de Produção

Após o build, a pasta `dist/` conterá:
```
dist/
├── index.html          # HTML otimizado com referências corretas
├── assets/
│   ├── index-[hash].js  # JavaScript compilado e minificado
│   ├── index-[hash].css # CSS compilado e minificado
│   └── [imagens]        # Imagens otimizadas
├── favicon.ico
└── robots.txt
```

## ✅ Verificação

O arquivo `dist/index.html` agora contém:
- ✅ `<script type="module" crossorigin src="/assets/index-[hash].js"></script>`
- ✅ `<link rel="stylesheet" crossorigin href="/assets/index-[hash].css">`

Em vez de:
- ❌ `<script type="module" src="/src/main.tsx"></script>`

## 🌐 Para Hostinger ou outros serviços

1. Execute `npm run build`
2. Faça upload de **todo o conteúdo da pasta `dist/`** para a pasta pública do seu servidor
3. Configure o servidor para servir o `index.html` como página principal

## 🔧 Configuração do GitHub Pages (se aplicável)

**IMPORTANTE: Configurações necessárias no seu repositório GitHub:**

### 1. Habilitar GitHub Pages
1. Vá nas **Settings** do seu repositório no GitHub
2. Seção **"Pages"** (no menu lateral esquerdo)
3. Em **"Source"**, selecione **"GitHub Actions"**
4. Salve as configurações

### 2. Verificar Permissões do GitHub Actions
1. Ainda em **Settings**, vá em **"Actions"** → **"General"**
2. Em **"Workflow permissions"**, selecione:
   - ✅ **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**
3. Clique em **"Save"**

### 3. Workflows Disponíveis
Criamos dois workflows para você:

**Workflow Principal:** `.github/workflows/deploy.yml`
- Usa a abordagem mais moderna do GitHub Pages
- Recomendado para novos repositórios

**Workflow Alternativo:** `.github/workflows/deploy-alternative.yml`
- Usa peaceiris/actions-gh-pages@v4
- Backup caso o principal não funcione

### 4. Ativar o Workflow
- O deploy será automático a cada push para `main`/`master`
- Se houver problemas, desative um dos workflows renomeando a extensão para `.yml.disabled`

---

---

## 🔧 Troubleshooting - Problemas Comuns

### ❌ Erro: "Permission denied to github-actions[bot]"
**Solução:**
1. Vá em **Settings** → **Actions** → **General**
2. Altere **"Workflow permissions"** para **"Read and write permissions"**
3. Marque **"Allow GitHub Actions to create and approve pull requests"**
4. Salve e tente novamente

### ❌ Erro: "Pages build and deployment"
**Solução:**
1. Vá em **Settings** → **Pages**
2. Certifique-se que **"Source"** está como **"GitHub Actions"**
3. Se estiver como "Deploy from a branch", mude para "GitHub Actions"

### ❌ Workflow não executa
**Solução:**
1. Verifique se o arquivo está em `.github/workflows/deploy.yml`
2. Certifique-se que fez push para a branch `main` ou `master`
3. Vá na aba **"Actions"** do GitHub para ver os logs

### ❌ Site não carrega após deploy
**Solução:**
1. Verifique se o build local funciona: `npm run build && npm run preview`
2. Confirme que os arquivos estão na pasta `dist/`
3. Verifique se não há erros no console do navegador

### 🔄 Forçar novo deploy
Se precisar forçar um novo deploy:
```bash
git commit --allow-empty -m "Force deploy"
git push origin main
```

**Problema resolvido!** ✅ Agora seu site será publicado com os arquivos de produção corretos, compatíveis com qualquer servidor web.