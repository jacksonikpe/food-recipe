const setupTags = recipes => {
  const allTags = {}

  recipes.forEach(recipe => {
    recipe.content.tags.forEach(tag => {
      if (allTags[tag]) {
        allTags[tag] = allTags[tag] + 1
      } else {
        allTags[tag] = 1
      }
    })
  })
  const newTags = Object.entries(allTags).sort((a, b) => {
    const [firstTag] = a
    const [secondTag] = b

    if (firstTag < secondTag) {
      return -1
    }
    if (firstTag > secondTag) {
      return 1
    } else {
      return 0
    }
  })

  return newTags
}

export default setupTags
