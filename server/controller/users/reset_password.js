const nodemailer = require('nodemailer')
const { users } = require('../../models')
const transporter = nodemailer.createTransport({
  service: "gmail",  // 이메일
  auth: {
    user: process.env.MAIL_ID,  // 발송자 이메일
    pass: process.env.MAIL_PASSWORD,  // 발송자 비밀번호
  }
})

module.exports = {
  patch: async (req, res) => {
    const userEmail = await users.findOne({
      where: req.email
    })
    console.log('유저이메일#######>', userEmail)
    const password = userEmail.dataValues.password
    const nickname = userEmail.dataValues.nickname
    if (!userEmail) {
      res.send('존재하지 않는 이메일 입니다.')
    } else {
      try {
        //patch
        //랜덤 생성 함수
        //update
        const mailOptions = {
          from: process.env.MAIL_ID,
          to: req.body.email,
          subject: "이메일 인증",
          html: `<h1>이메일 인증</h1>
                            <div>
                              ${nickname}님의 현재 비밀번호는 ${password} 입니다.
                              <a href='${process.env.SERVER_DOMAIN}/users/signin'>이메일 인증하기</a>
                            </div>`,
          text: "인증메일입니다.",
        };
        const info = await transporter.sendMail(mailOptions);
        console.log(info);
        res.json({ data: info })
      } catch (err) {
        console.log(err);
        res.status(500).send({ message: "Internal Server Error" });
      }
    }
  }
}