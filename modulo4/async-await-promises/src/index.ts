import axios from "axios"
import { BASE_URL } from "./url"

type user = {
	id: string;
	name: string;
	email: string;
}

type News = {
  title: string
  content: string
  date: number
}

const news: News = {
  title: "Labenu emprega 100% dos alunos da turma Carver em tempo recorde!",
  content: "Pasmem! Todos os alunos da turma Carver do curso integral de Full Stack Web Dev terminaram o curso nas primeiras semanas de abril, já empregados! Todos ganhando salários acima de 10mil reais!!! ",
  date: Date.now()
}

const createNews = (news: any): Promise<any> => {
  return axios.put(`${BASE_URL}/news`, news)
}

const getAllSubscribers = async(): Promise<user[]> => {
  const response = await axios.get(`${BASE_URL}/subscribers`)
  return response.data
}

const getSubscribersIds = (subscribers: user[]): string[] => {
  return subscribers.map((subscriber) => {
    return subscriber.id
  })
} 

const notifySubscribers = async (ids: string[]): Promise<void> => {

  try {
    const requests = ids.map(id => axios.post(`${BASE_URL}/notifications`, {
      subscriberId: id,
      message: "Notícia fresquinha pra você!"
    }))
  
    await Promise.all(requests)

    console.log('Notificações OK')

  } catch (error) {
    console.log('Notificações falharam')
  }

}

const main = async (): Promise<void> => {
  await createNews(news)
  const subscribers = await getAllSubscribers()
  const ids = getSubscribersIds(subscribers)
  await notifySubscribers(ids)
}