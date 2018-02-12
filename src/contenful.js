import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'dky9b8ol839x',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: '58ae27ea47f55fc015bf642914b7b05d1b3a263ed99ff0a200e3b07e000e2210'
})

export default client;