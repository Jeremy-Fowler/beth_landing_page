export class Book {
  constructor(data) {
    this.title = data.title
    this.subtitle = data.subtitle || ''
    this.description = data.description
    this.amazonPurchaseLink = data.amazonPurchaseLink
    this.amazonPreviewLink = data.amazonPreviewLink
  }

  get imgFilePath() {
    return `images/${this.title.toLowerCase().replaceAll(' ', '_').replaceAll(':', '')}.jpg`
  }

  get altDescription() {
    return `Book with the title of ${this.title}`
  }
}