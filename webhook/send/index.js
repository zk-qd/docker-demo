const nodemailer = require('nodemailer')
// 分装对象
class Mailer {
  constructor({
    host = 'smtp.qq.com',
    port = 465,
    secure = true,
    user = '2605066922@qq.com',
    pass = 'dbsshlckrokleabd',
  } = {}) {
    // 实例属性
    this.user = user
    // 创建邮件传输对象
    this.transport = nodemailer.createTransport({
      host: host,
      port: port,
      secure: secure,
      auth: {
        user: this.user,
        pass: pass,
      },
    })
  }
  // 他有发送邮件方法
  send({ to = '2605066922@qq.com', subject, text } = {}) {
    // 发送邮件
    return this.transport
      .sendMail({
        from: `"发送测试" <${this.user}> `, // 格式固定 
        to: to,
        subject: subject,
        text: text,
      })
      .then((_) => {
        console.log('邮箱发送成功')
      })
      .catch((err) => {
        0
        console.log('邮件发送失败', err)
      })
  }
}

let mailer = new Mailer()
mailer.send({ subject: '这是标题', text: '这是邮件内容' })
