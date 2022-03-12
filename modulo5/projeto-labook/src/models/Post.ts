export enum TYPE {
  NORMAL = 'Normal',
  EVENT = 'Event'
}

export default class Post {
  constructor(
    private id: string,
    private user_id: string,
    private picture: string,
    private description: string,
    private createdAt: string,
    private type: TYPE
  ){}
}