export const imageProps = `
url
width
height
`;
export const linkProps = `
id
title
icon
newTab
path
text
`;
export const skillProps = `
id
title
level
`;
export const projectMetaProps = `
name
type
category
operatingSystem
price
priceCurrency
rating
ratingCount
`;
export const commonProjectProps = `
title
slug
description
previewLink
sourceLink
stacks
thumbnail {
  ${imageProps}
}
projectMeta {
  ${projectMetaProps}
}
createdAt
updatedAt
`;
export const hobbyProps = `
id
title
icon
`;
export const metaProps = `
title
description
url
keywords
thumbnail {
  ${imageProps}
}
indexPage
followPage
`;
export const contentProps = `
html
`;
