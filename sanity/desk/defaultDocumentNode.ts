
import {DefaultDocumentNodeResolver} from 'sanity/desk'

export const defaultDocumentNode: DefaultDocumentNodeResolver = (S, {schemaType}) => {
  switch (schemaType) {
    case `post`:
      return S.document().views([
        S.view.form(),
      ])
    default:
      return S.document().views([S.view.form()])
  }
}