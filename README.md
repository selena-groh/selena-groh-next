# selenagroh.com
A website for showcasing my passions for programming, crafting, and stage management. You can see it live at [selenagroh.com](https://www.selenagroh.com/)

## Technologies

- [Next.js](https://nextjs.org/)
- [Contentful](https://www.contentful.com/)
- [Vercel](https://vercel.com/)
- [React](https://reactjs.org/)
- [Chakra UI](https://chakra-ui.com/)

## Local Development
```sh
git clone <repo URL>
yarn
```

This application requires Contentful secrets. Get the Contentful Space ID and Access Key from Contentful, and then create a `.env.local` file in the root of the repository that looks like the following:

```
CONTENTFUL_SPACE_ID=space_id_here
CONTENTFUL_ACCESS_KEY=access_key_here
```

Finally, run the following to get the application running locally:
```sh
yarn run dev
```
