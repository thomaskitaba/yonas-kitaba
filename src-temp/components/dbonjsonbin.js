 {

  "posts": [
    {
      "id": 1,
      "title": "First Post",
      "content": "This is the content of the first post.",
      "author": "John Doe",
      "postDate": "22-11-23",
      "likes": 1,
      "comments": [
        {
          "id": 1,
          "text": "This is a comment on the first post.",
          "user": "Commenter1",
          "commentDate": "22-11-23",
          "likes": 5,
          "replies": [
            {
              "id": 1,
              "text": "Reply to Commenter1's comment",
              "user": "ReplyUser1"
            }
          ]
        },
        {
          "id": 2,
          "text": "Another comment on the first post.",
          "user": "Commenter2",
          "commentDate": "22-11-23",
          "likes": 8,
          "replies": []
        }
      ]
    },
    {
      "id": 2,
      "title": "Second Post",
      "content": "Content for the second post goes here.",
      "author": "Jane Smith",
      "postDate": "22-11-23",
      "likes": 1,
      "comments": [
        {
          "id": 1,
          "text": "Comment on the second post.",
          "user": "Commenter3",
          "commentDate": "22-11-23",
          "likes": 12,
          "replies": [
            {
              "id": 1,
              "text": "Reply to Commenter3's comment",
              "user": "ReplyUser2"
            }
          ]
        }
      ]
    },
    {
      "id": 3,
      "title": "Third Post",
      "content": "Third post content.",
      "author": "Alex Johnson",
      "postDate": "22-11-23",
      "likes": 1,
      "comments": [
        {
          "id": 1,
          "text": "Comment on the third post.",
          "user": "Commenter4",
          "commentDate": "22-11-23",
          "likes": 3,
          "replies": []
        }
      ]
    }
  ],
  "users": [
    { "userId": 1, "userName": "Abebe", "userEmail": "aaaaaaaaaa@gmail.com", "createdDate": "2022-11-23" },
    { "userId": 2, "userName": "Kebede", "userEmail": "bbbbbbbbbb@gmail.com", "createdDate": "2022-11-23" },
    { "userId": 3, "userName": "bekele", "userEmail": "cccccccccc@gmail.com", "createdDate": "2022-11-23" }
  ],
  "authors": [
    { "authorId": 1, "authorName": "Yonas Kitaba", "authorTitle": "consultant" }
  ]
}