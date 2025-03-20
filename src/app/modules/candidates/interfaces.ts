export interface Candidatos {
  candidatos: Candidato[]
}

export interface Candidato {
  nome: string
  match: number
  nota: number
  pontos_fortes: string[]
  pontos_fracos: string[]
  perguntas: string[]
}
