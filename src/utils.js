
export const getImageDataFromSrc = (src, width, height) => {
  return {
    "childImageSharp": {
      "gatsbyImageData": {
        "layout": "constrained",
        "backgroundColor": "#282828",
        "images": {
          "fallback": {
            "src": `${src}`,
            "srcSet": `${src} ${width}w`,
            "sizes": `(min-width: ${width}px) ${width}px, 100vw`
          },
          "sources": [
            {
              "srcSet": `${src} ${width}w`,
              "sizes": `(min-width: ${width}px) ${width}px, 100vw`
            }
          ]
        },
        "width": width,
        "height": height
      }
    }
  }
}