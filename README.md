# render-json-server

**Step 1** -   Create git repository

**Step 2** - Clone it on your device

**Step 3** - Add package.json by using this command `npm init -y`

**Step 4** - Install some dependency by using this command `npm i json-server cors json-serve` and add ` "start": "node index.js" ` in script 

**Step 6** - Create index.js file copy the code from my GitHub repository

```javaScript
const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080; //  chose port from here like 8080, 3001

server.use(middlewares);
server.use(router);

server.listen(port);





{
  "id" : "",
  "title": "",
  "description":"",
  "category": "",
  "price": ,
  "discountPercentage": 10,
  "rating": 4.7,
  "stock": 35,
  "tags": [
    "",
    "",
    "",
    "",
    ""
  ],
  "brand": "",
  "sku": "MPG110R-GUN",
  "weight": 6.5,
  "dimensions": {
    "width": 215,
    "height": 450,
    "depth": 430
  },
  "warrantyInformation": "2-year limited warranty",
  "shippingInformation": "Ships within 3-5 business days",
  "availabilityStatus": "In Stock",
  "reviews": [
    {
      "rating": 5,
      "comment": "Amazing product, would buy again!",
      "date": "2024-12-15T10:26:00.000Z",
      "reviewerName": "Evan Williams",
      "reviewerEmail": "alice@example.com"
    },
    {
      "rating": 3,
      "comment": "Good value for the price.",
      "date": "2024-08-27T08:46:00.000Z",
      "reviewerName": "Bob Smith",
      "reviewerEmail": "dana@example.com"
    },
    {
      "rating": 3,
      "comment": "Works as expected, no complaints.",
      "date": "2024-06-22T00:03:00.000Z",
      "reviewerName": "Bob Smith",
      "reviewerEmail": "bob@example.com"
    },
    {
      "rating": 5,
      "comment": "Not satisfied, lacks essential features.",
      "date": "2024-10-21T15:40:00.000Z",
      "reviewerName": "Dana Lee",
      "reviewerEmail": "bob@example.com"
    },
    {
      "rating": 2,
      "comment": "Amazing product, would buy again!",
      "date": "2024-08-19T15:34:00.000Z",
      "reviewerName": "Bob Smith",
      "reviewerEmail": "dana@example.com"
    },
    {
      "rating": 2,
      "comment": "Could be better, but does the job.",
      "date": "2024-04-13T11:23:00.000Z",
      "reviewerName": "Alice Brown",
      "reviewerEmail": "alice@example.com"
    },
    {
      "rating": 3,
      "comment": "Amazing product, would buy again!",
      "date": "2024-04-18T19:33:00.000Z",
      "reviewerName": "Bob Smith",
      "reviewerEmail": "charlie@example.com"
    },
    {
      "rating": 1,
      "comment": "Not satisfied, lacks essential features.",
      "date": "2024-12-13T19:50:00.000Z",
      "reviewerName": "Charlie Johnson",
      "reviewerEmail": "alice@example.com"
    },
    {
      "rating": 1,
      "comment": "Could be better, but does the job.",
      "date": "2024-02-14T15:24:00.000Z",
      "reviewerName": "Bob Smith",
      "reviewerEmail": "dana@example.com"
    },
    {
      "rating": 5,
      "comment": "Not satisfied, lacks essential features.",
      "date": "2024-05-09T06:55:00.000Z",
      "reviewerName": "Alice Brown",
      "reviewerEmail": "evan@example.com"
    },
    {
      "rating": 3,
      "comment": "Good value for the price.",
      "date": "2024-04-08T05:01:00.000Z",
      "reviewerName": "Evan Williams",
      "reviewerEmail": "bob@example.com"
    },
    {
      "rating": 1,
      "comment": "Amazing product, would buy again!",
      "date": "2024-12-24T12:26:00.000Z",
      "reviewerName": "Dana Lee",
      "reviewerEmail": "charlie@example.com"
    },
    {
      "rating": 4,
      "comment": "Amazing product, would buy again!",
      "date": "2024-08-28T11:27:00.000Z",
      "reviewerName": "Dana Lee",
      "reviewerEmail": "evan@example.com"
    },
    {
      "rating": 2,
      "comment": "Not satisfied, lacks essential features.",
      "date": "2024-12-18T07:32:00.000Z",
      "reviewerName": "Evan Williams",
      "reviewerEmail": "charlie@example.com"
    },
    {
      "rating": 1,
      "comment": "Works as expected, no complaints.",
      "date": "2024-01-14T02:40:00.000Z",
      "reviewerName": "Evan Williams",
      "reviewerEmail": "alice@example.com"
    },
    {
      "rating": 2,
      "comment": "Could be better, but does the job.",
      "date": "2024-05-14T09:34:00.000Z",
      "reviewerName": "Alice Brown",
      "reviewerEmail": "alice@example.com"
    }
  ],
  "returnPolicy": "30-day return policy",
  "minimumOrderQuantity": 1,
  "meta": {
    "createdAt": "2024-10-17T10:56:21.619Z",
    "updatedAt": "2024-10-17T10:56:21.619Z",
    "barcode": "2210136215090",
    "qrCode": "https://assets.dummyjson.com/public/qr-code.png"
  },
  "images": [
    "",
    "",
    "",
    ""
  ],
  "thumbnail": ""
}



**Step 7** - Add db.json and add .gitignore file

1. 
2. 
3. 
4. 
5. 
6. 
7. 
8. 
9. 985dfe7150bf4c63ad14181d
10. e038aee7bc044555ba59a4f9
11. 4af6aa0259324ff09d7268ef
12. 04b8352f96a041b4ace874e6
13. 473c448241db494d9c76dbf4
14. e44af160f87e4a8e8454bd98
15. e2eea74136ff4d8698309e10
16. 6b6395efd3f544dcb02e1688
17. e74d8f34041941d8ae91d03b
18. 53fba36b8f514c42aad07237
19. 4fcc893995b54402a088e101
20. 8afc252154264972be6601f6
21. 1f9d5c1e62f543f4a51569fd
22. cdbaa69c2ac543b296cf0a2d
23. 5ff0bd344e624874bf728d4a
24. e4c0b3a611aa40cb868acf45
25. 5dad096d7dc94582aa27ecba
26. 6dd79af17e0f440e82ede6a2
27. e6283996d86c484787b862e9
28. 3ee76d0718e54767b8b7844f
29. 8e7f9dee3ba54d018c1af63c
30. 970958e8e1f54fcf9e728793
31. 41bad15d0b2d450b9bf60091
32. f9d1da5dedfd4d93a3eb4523
33. 30e573f3b1bb468f8d30ff03
34. 0712ae5f25214d3c8fe624e5
35. 2f99916a092c40f2975d5e9b
36. d3f7226d9c3d4ba1aa0bff00
37. 0879425f0d8447afa24fd680
38. 95161fa97da248b1b249a58f
39. 711c80f05f6d4eeb846ac73e
40. dd6066064d7e4c779c0da3c2
41. 4001687abb384132a960deaa
42. 3af4568b3e24446085d59afe
43. 6a0bf3881d8f43d1afba4780
44. 609c06518fc0428f9b41d580
45. b39e633e7ab64165bb2bf165
46. e72862d9441145da964c5f1c
47. 1ecc9791664c4d86bebca5b8
48. f6bcc5cfbf3a4d739195b786
49. 35f17972a60e47e3bf2839f7
50. b76bf9ed4b784f37be88f425
51. daf72d667bd24311b6963fec
52. e4848338575a4c339d0c2a8d
53. 55008aac25814f7a91e41c01
54. e84cd19fdcdc491d97bbb190
55. c4ca187603d7449fa9b5d1fd
56. 5409cb569dd147e79f84aebb
57. efffc62651784b6e9012f0f1
58. a8d336d30ccc43fcb6d48b98
59. adc6c0401a264c488f2f6629
60. 39efba9695d141478b004697
61. ec8a2b08752e4460a7925b15
62. ec5597abd38f46e582058fc7
63. c9033f700e7946e79abdbf02
64. 3ad2cc9eb5ec43fbbdf88a42
65. 19569f14910748ac99a8cece
66. 0daf7c7343d64bb6a6f50d3c
67. 079dd54e655f45939b1ccfe4
68. 4d01046757384662bf606a9a
69. 4c4245ae4f4f4e879d5d14e4
70. a4af44b63071442abf04bb06
71. 3076d2f082dd4001bd10d7e9
72. 35f40868fa3742c68076e149
73. c3629ceb4cd94618b99c4fb9
74. aedff3544c4245318b56ef56
75. 18481493bbab4102961099d9
76. c73d7628c0a84fc4bd44d221
77. 63231c260503471ca22db6d8
78. 6a33e1cd63e54164bbf74389
79. 66dc4cc6e3d447248f03c329
80. 05472aadc87649ceab680d7b
81. d1465eb476354c458e6de755
82. ca2d924c4252449c922bd97e
83. c71c6684d85e486c9c32f7c9
84. 938dba1a9429478095f6e49a
85. 0d73a8611dfb430883da18ee
86. 55eeecbf841b4d09951681a3
87. 4e94d9093f6a49458ffbdb06
88. a50755e016204cd8be368d01
89. a5485a3a2adf4b05ac9a1cbe
90. b6c20a9b3165450480418ae2
91. f7810bc35ee84868829a0b74
92. 95665194dc7d4ee7b44fb142
93. 45ac6b8ff76541aaaeb546c7
94. bf809ec87a9a4271966599db
95. 096be4a5c373420ba38e6263
96. a08c48702fe14514ba44faf1
97. 5972857d20284d6db672075b
98. e3626bb98ba041d6a4e865bd
99. 941b90a1b8924de7bd783655
100. b344634b83d64bce9e65d89f
