export class Book {
  constructor (data) {
    this.title = data.title
    this.description = data.description
    this.amazonPurchaseLink = data.amazonPurchaseLink
    this.amazonPreviewLink = data.amazonPreviewLink
  }

  get imgFilePath() {
    return `images/${this.title.toLowerCase().replaceAll(' ', '_').replaceAll(':', '')}.jpg`
  }
}