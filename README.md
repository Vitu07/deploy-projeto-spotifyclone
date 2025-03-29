# Documentação do Projeto Spotify Clone

## 1. Visão Geral
**Objetivo**: Aplicação clone do Spotify para listagem de artistas e músicas.  
**Stack**:
- **Front-end**: React + Vite + Axios
- **Back-end**: Node.js + Express + MAongoDB
- **Deploy**: Render (back-end) + Build estático (front-end)




## 2. Demonstração Visual
Clique em qualquer imagem abaixo para ser redirecionado à página correspondente no deploy oficial do projeto:


### Home
[![Captura de Tela (2)](https://github.com/user-attachments/assets/29f472c7-7906-4def-8db1-83073ee9dd35)](https://deploy-projeto-spotifyclone.onrender.com)

### Artistas Populares
[![Captura de Tela (3)](https://github.com/user-attachments/assets/e0fdfc65-cad0-4e2f-8e04-bb8961db03ed)](https://deploy-projeto-spotifyclone.onrender.com/artists)

### Musicas Populares
[![Captura de Tela (4)](https://github.com/user-attachments/assets/61f4c43c-a0a5-4875-9991-7d1be2e39423)](https://deploy-projeto-spotifyclone.onrender.com/songs)

### Perfil Artista
[![Captura de Tela (5)](https://github.com/user-attachments/assets/0b20713d-cc94-4bb0-b4d8-08a39e74d11b)](https://deploy-projeto-spotifyclone.onrender.com/artist/67b259979019c904a1d9b9a4)

### Player Música
[![Captura de Tela (10)](https://github.com/user-attachments/assets/566cf9d1-8297-4bbd-aeb5-8ed9dc0626d3)](https://deploy-projeto-spotifyclone.onrender.com/song/67b259979019c904a1d9b97c)

  

## 3. Estrutura do Projeto
 ```bash
   PROJETO-FULLSTACK/
├── back-end/ # API Node.js
├── front-end/ # Aplicação React
└── package.json # Scripts raiz (instalação/deploy)
   ```

## 4. Scripts do package.json Raiz
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
## 5. Fluxo de Dados

```sequenceDiagram
  Front-end->>Back-end: GET /api/artists
  Back-end->>MongoDB: Consulta artistas
  MongoDB-->>Back-end: Dados
  Back-end-->>Front-end: JSON
```
## 6. FAQ

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

Link do projeto: https://deploy-projeto-spotifyclone.onrender.com

**Reportar problemas**:  
Acesse a seção [Issues](https://github.com/Vitu07/deploy-projeto-spotifyclone/issues) do repositório para reportar bugs ou sugerir melhorias.
