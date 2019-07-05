export class Question {
  constructor() { }

  index: number
  question: string
  radioQuestion: boolean

  itens: {
    value: number
    description: string
  }[]

  selectQuestions: {
    response: number
    question: string
    selectOptions: {
      value: number
      description: string
    }[]
  }[]

  response: number

}



