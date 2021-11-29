import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'

import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

import { validarCPF, validarSenha } from './models/cadastro'

function App() {
  function aoEnviarForm(dados) {
    console.log(dados)
  }

  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro
        aoEnviar={aoEnviarForm}
        validacoes={{
          cpf: validarCPF,
          senha: validarSenha,
          nome: validarSenha
        }}
      />
    </Container>
  )
}

export default App
