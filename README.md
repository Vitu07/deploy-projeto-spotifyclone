# Documentação do Projeto Spotify Clone

## 1. Visão Geral
**Objetivo**: Aplicação clone do Spotify para listagem de artistas e músicas.  
**Stack**:
- **Front-end**: React + Vite + Axios
- **Back-end**: Node.js + Express + MongoDB
- **Deploy**: Render (back-end) + Build estático (front-end)

## 2. Estrutura do Projeto
 ```bash
   PROJETO-FULLSTACK/
├── back-end/ # API Node.js
├── front-end/ # Aplicação React
└── package.json # Scripts raiz (instalação/deploy)
   ```

## 3. Scripts do package.json Raiz
```json
{
  "scripts": {
    "build": "npm install --prefix back-end && npm install --prefix front-end && npm run build --prefix front-end",
    "start": "npm run start --prefix back-end"
  }
}
```
## 4. Configuração do Ambiente
```bash
# Clone o repositório
git clone https://github.com/Vitu07/deploy-projeto-spotifyclone.git

# Instalação e build
npm run build

# Inicie o back-end (para desenvolvimento)
npm start
   ```
## 5. Deploy no Render

### Back-end:
- Vincule o repositório ao Render
- Defina o comando de start como `npm start`

### Front-end:
- Após o build (`npm run build`), hospede a pasta `front-end/dist` em:
  - GitHub Pages
  - Servidor estático (ex: Apache/Nginx)
  - Próprio Render (como site estático)

## 6. Fluxo de Dados

```sequenceDiagram
  Front-end->>Back-end: GET /api/artists
  Back-end->>MongoDB: Consulta artistas
  MongoDB-->>Back-end: Dados
  Back-end-->>Front-end: JSON
```
## 7. FAQ

### Q: Como alterar a porta do back-end?
- Modifique manualmente em: `back-end/src/server.js`

### Q: O build do front-end falha?
1. Verifique se o Node.js está na versão 18+
2. Execute os comandos:
```bash
cd front-end
npm install
npm run build
```
## Contato

**Autor**:  
Vitor (Vitu07)

**Como contribuir**:  
1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Commit suas alterações 
4. Push para a branch 
5. Abra um Pull Request

**Reportar problemas**:  
Acesse a seção [Issues](https://github.com/Vitu07/deploy-projeto-spotifyclone/issues) do repositório para reportar bugs ou sugerir melhorias.
