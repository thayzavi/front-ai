# 💬 CodeTutor AI - Frontend

Interface web desenvolvida com Next.js para um sistema de chat inteligente focado em auxiliar estudantes com dúvidas de programação.

# 🚀 Sobre o Projeto

O CodeTutor AI é uma aplicação que simula um assistente de programação, permitindo que usuários façam perguntas sobre código e recebam respostas explicativas com exemplos práticos.

O frontend foi construído com foco em:
- Experiência do usuário (UX)
- Interface limpa e intuitiva
- Comunicação eficiente com API backend

# 🖥️ Preview da Interface

O sistema conta com:

- Sidebar com histórico/conversas
- Autenticação de usuários
- Área principal de chat
- Campo de entrada para mensagens
- Respostas estruturadas com:
    - Explicação
    - Código
    - Resultado

# 🛠️ Tecnologias Utilizadas

- Next.js – Framework React para SSR e melhor performance
- React.js – Construção da interface
- Axios – Consumo da API backend
- CSS – Estilização customizada da interface
- JavaScript (ES6+)


📂 Estrutura do Projeto
```
/src
  /app
    /components   # Componentes reutilizáveis
    /styles       # Arquivos CSS
    /services     # Configuração do Axios
    page.js       # Página principal
```


Integração com API

A aplicação se comunica com o backend através do Axios, enviando perguntas do usuário e recebendo respostas estruturadas da IA.

Exemplo de chamada:
```
import axios from "axios";

const response = await axios.post("/api/chat", {
  message: "Explique função em JavaScript"
});
```

- 🎯 Funcionalidades
- 💬 Chat interativo com IA
- 🧠 Respostas explicativas sobre código
- 💻 Exemplos práticos em JavaScript
- 📊 Estrutura organizada (explicação + código + resultado)
- 🔄 Criação de novas conversas
- 🎨 Interface estilizada com CSS

#⚙️ Como Executar o Projeto

1. Clone o repositório
```
git clone https://github.com/seu-usuario/seu-repo.git
```
3. Acesse a pasta
```
cd nome-do-projeto
```
4. Instale as dependências
```
npm install
```
5. Execute o projeto
```
npm run dev
```
6. Acesse no navegador
```
http://localhost:3000
```
👩‍💻 Desenvolvido por

Thay
Estudante de Análise e Desenvolvimento de Sistemas
Foco em desenvolvimento Full Stack 🚀
