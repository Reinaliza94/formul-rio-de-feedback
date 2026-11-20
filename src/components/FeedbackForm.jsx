import { useState } from 'react'
import './FeedbackForm.css'

function FeedbackForm() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [comentario, setComentario] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    window.alert(
      `Nome: ${nome}\nEmail: ${email}\nComentário: ${comentario}`,
    )
  }

  return (
    <main className="feedback-page">
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h1>Deixe seu feedback</h1>
        <p>Conte para nós o que você achou.</p>

        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          name="nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label htmlFor="comentario">Comentário</label>
        <textarea
          id="comentario"
          name="comentario"
          rows="5"
          value={comentario}
          onChange={(event) => setComentario(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </main>
  )
}

export default FeedbackForm
