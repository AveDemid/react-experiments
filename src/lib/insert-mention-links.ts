// eslint-disable-next-line
export const insertMentionLinks = (markdown: any) => markdown.replace(
    /\B(@([a-zA-Z0-9](-?[a-zA-Z0-9_])+))/g,
    `**[$1](https://github.com/$2)**`
  );
