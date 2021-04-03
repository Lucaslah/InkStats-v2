import { InkStats } from "../dist/index"

const server = new InkStats({
    name: 'TypeScript Example',
    port: 4444,
    message: 'TypeScript Example Working!!!'
})


server.start()