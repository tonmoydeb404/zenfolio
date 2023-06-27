export const websiteQuery = (id: string) => {
  return `{
  website(where: {id: "${id}"}, stage: PUBLISHED) {
    id
    title
    logo {
      url
      width
      height
    }
    defaultTheme
    copyrightText
    contactLinks {
      id
      title
      text
      path
      icon
    }
    navigationLinks {
      icon
      newTab
      path
      text
      title
      id
    }
  }
}`;
};
