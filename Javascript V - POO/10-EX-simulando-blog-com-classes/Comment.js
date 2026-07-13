class Comment {
  constructor(username, content) {
    this.author = username;
    this.content = content;
    this.createdAt = new Date();
  }
}

module.exports = Comment;
