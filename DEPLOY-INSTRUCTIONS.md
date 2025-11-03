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

1. Vá nas configurações do seu repositório no GitHub
2. Seção "Pages"
3. Selecione "GitHub Actions" como source
4. O deploy será automático a cada push

---

**Problema resolvido!** ✅ Agora seu site será publicado com os arquivos de produção corretos, compatíveis com qualquer servidor web.