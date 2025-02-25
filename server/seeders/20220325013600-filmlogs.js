"use strict";

const imgData = [
  "https://user-images.githubusercontent.com/87605663/160955300-7963c2f2-ff03-4d7d-8bdb-f132c5aabf35.JPG",
  "https://user-images.githubusercontent.com/87605663/160955364-4e68aee5-e8b0-4db8-882f-a9b3d41e301a.JPG",
  "https://user-images.githubusercontent.com/87605663/160955377-789baead-c08a-41f9-852a-ef22e4c0f9d5.JPG",
  "https://user-images.githubusercontent.com/87605663/160955406-1c5a2435-1cb9-4e4e-b3fc-44ccfa6a91fa.JPG",
  "https://user-images.githubusercontent.com/87605663/160955478-4bc2ce85-4429-4e4a-9183-62da258ef8b2.JPG",
  "https://user-images.githubusercontent.com/87605663/160955495-c3a088af-3b43-48bd-8a8e-e476c80b28df.JPG",
  "https://user-images.githubusercontent.com/87605663/160955505-4cfd7ac8-30fd-414f-9337-6c6f175bfa7e.JPG",
  "https://user-images.githubusercontent.com/87605663/160955573-36fcd952-a38a-41db-baea-e582c4bb178e.JPG",
  "https://user-images.githubusercontent.com/87605663/160955588-33a04a90-9f9f-43ce-b303-37c35909c962.JPG",
  "https://user-images.githubusercontent.com/87605663/160955665-178f0031-5b00-4d18-987c-0cc71455c629.JPG",
  "https://user-images.githubusercontent.com/87605663/160955675-2bfcf795-5353-4c09-91d8-63c6acee2c38.JPG",
  "https://user-images.githubusercontent.com/87605663/160955783-2bc9c6c8-2955-44a0-a675-974dd3b163af.JPG",
  "https://user-images.githubusercontent.com/87605663/160955815-afb5a494-3d84-4b87-a2de-38cc0d61f64e.JPG",
  "https://user-images.githubusercontent.com/87605663/160955869-9b2c5d0a-bac7-4f68-adeb-2f085d80fd43.JPG",
  "https://user-images.githubusercontent.com/87605663/160955938-66f6d27d-ffcf-4d66-a4f7-b75d67d489b0.JPG",
  "https://user-images.githubusercontent.com/87605663/160955958-30c00cd1-a2e5-49ba-b3a1-a643682fa0fd.JPG",
  "https://user-images.githubusercontent.com/87605663/160956048-498d351b-9629-44c0-9f60-3685f21ea135.JPG",
  "https://user-images.githubusercontent.com/87605663/160956091-a3d3f8ab-1772-4269-ae2e-47c1ba6ce90b.JPG",
  "https://user-images.githubusercontent.com/87605663/160956134-336187fc-ef67-40a6-a933-6d483d008dfc.JPG",
  "https://user-images.githubusercontent.com/87605663/160956182-374fe037-9c42-472b-aad5-1ebe68a89946.JPG",
  "https://user-images.githubusercontent.com/87605663/160956219-de688f20-bffb-4e77-957d-5c6ea690bbdb.JPG",
  "https://user-images.githubusercontent.com/87605663/160956228-339d7ca1-7395-4896-9c76-e578583ae695.JPG",
  "https://user-images.githubusercontent.com/87605663/160956248-734d6fd4-7631-471e-b5b3-a66ca2e25143.JPG",
  "https://user-images.githubusercontent.com/87605663/160956405-c7f50f38-11ae-47d1-92e0-78b5b849ce51.JPG",
  "https://user-images.githubusercontent.com/87605663/160956471-8be1f9eb-0b77-4383-9d3f-6c29f11f646b.JPG",
  "https://user-images.githubusercontent.com/87605663/160956484-e1c09f32-b3bc-423a-bcd9-f007140e784e.JPG",
  "https://user-images.githubusercontent.com/87605663/160956534-f03f3fcd-8594-4c45-9782-cebfaddf6344.JPG",
  "https://user-images.githubusercontent.com/87605663/160956554-e19f1973-40c1-4d12-9388-c6c036e1806a.JPG",
  "https://user-images.githubusercontent.com/87605663/160956594-6176d933-7848-4cf1-8b9e-78a169d0207a.JPG",
  "https://user-images.githubusercontent.com/87605663/160956648-5d06eadf-5c8b-455a-8cf6-487965f372a8.JPG",
  "https://user-images.githubusercontent.com/87605663/160956567-4d0d64b2-5fcc-47a8-9c4f-80a1a5782ee1.JPG",
  "https://user-images.githubusercontent.com/87605663/160956196-a46a5607-91e7-4e56-ae0f-037d81f4c587.JPG",
  "https://user-images.githubusercontent.com/87605663/160956914-8c02bec4-f036-4ef1-9612-2eb30ca62a47.JPG",
  "https://user-images.githubusercontent.com/87605663/160956925-5af0a6b5-64c5-4702-9aba-2e888fd714af.JPG",
  "https://user-images.githubusercontent.com/87605663/160957040-c2fb577d-4c37-48d3-bd7e-8e8e57b2c1a5.JPG",
  "https://user-images.githubusercontent.com/87605663/160957176-b254d1d6-3c5c-483c-98ba-c072dccc0d89.JPG",
  "https://user-images.githubusercontent.com/87605663/160957215-574748e1-2693-4659-85b0-2816da24a856.JPG",
  "https://user-images.githubusercontent.com/87605663/160956995-8ae3e92d-15e3-4458-9930-0bc6c8e6ce48.JPG",
  "https://user-images.githubusercontent.com/87605663/160957103-149984eb-9043-4549-a894-b87e85009045.JPG",
  "https://user-images.githubusercontent.com/87605663/160957087-59cb6f14-933d-424e-b0b9-10da5213ace4.JPG",
  "https://user-images.githubusercontent.com/87605663/160956673-e0a3bad5-4472-430a-a1fd-ad753a70b582.JPG",
  "https://user-images.githubusercontent.com/87605663/160956721-1724c88c-2383-4f53-a9fb-2243c818356e.JPG",
  "https://user-images.githubusercontent.com/87605663/160956744-3dbc61f4-4993-480c-9d4b-60cbf8878a84.JPG",
  "https://user-images.githubusercontent.com/87605663/160956749-7dbd2485-95fe-490f-8d2c-169c906e529c.JPG",
  "https://user-images.githubusercontent.com/87605663/160956798-d0c64ff0-721c-49af-b5b7-09d68790b077.JPG",
  "https://user-images.githubusercontent.com/87605663/160956867-0df27355-0866-467b-a3e6-7ff5dfdc7d94.JPG",
  "https://user-images.githubusercontent.com/87605663/160956683-dde91b1c-0a07-4034-afe1-26888b93e957.JPG",
  "https://user-images.githubusercontent.com/87605663/160956734-d3d6c765-4c32-4690-8a1b-419c40ec1a5d.JPG",
];

const filmData = [
  "골드 200",
  "컬러플러스 200",
  "울트라맥스 400",
  "프로이미지 100",
  "엑타 100",
  "티맥스 400",
  "후지 C200",
  "후지 SUPERIA 400",
  "후지 PRO 400H",
  "APX 100",
  "APX 400",
  "Earl Grey B&W 100",
  "Lady Grey B&W 400",
  "메트로폴리스",
  "켄트미어 100",
  "XP2 400",
  "델타 100 프로페셔널",
  "델타 400 프로페셔널",
  "포트라 400",
  "RPX 25",
  "RPX 400",
  "슈퍼팬 200"
];

module.exports = {
  async up(queryInterface, Sequelize) {
    const insertData = [];
    const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

    for (let i = 0; i < imgData.length; i++) {
      let data = {
        user_id: random(1, 5),
        photo: imgData[i],
        filmtype: filmData[random(1, 23)],
        contents: "사진 이쁘죠?",
        views: random(1, 500),
        likesCount: random(2, 180),
        createdAt: new Date(random(2021, 2023), random(0, 12), random(1, 28)),
        updatedAt: new Date(),
      };
      insertData.push(data);
    }

    return queryInterface.bulkInsert("filmlogs", insertData);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("filmlogs", null, {});
  },
};
