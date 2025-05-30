const asyncHandler = require("express-async-handler")
const Form = require("./Form")
const { sendEmail } = require("./utils/email")



exports.formHandle = asyncHandler(async (req, res) => {
  const result = await Form.create(req.body)
  await sendEmail({
    from: `"Omkar Yeske" <${process.env.EMAIL}>`,
    to: result.email,
    subject: 'Thanks for contacting me!',
    message: `
<table width="100%" cellpadding="0" cellspacing="0" style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; padding: 30px; border-radius: 8px;">
        <tr>
          <td align="center" style="padding-bottom: 20px;">
            <h2 style="color: #333333;">Thank You for Reaching Out!</h2>
          </td>
        </tr>
        <tr>
          <td style="color: #555555; font-size: 16px; line-height: 1.6;">
            <p>Hi ${result.name},</p>
            <p>Thanks for getting in touch through my portfolio website. I’ve received your message and will respond as soon as possible.</p>
            <p>Feel free to connect with me in the meantime!</p>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 30px 0;">
            <a href="www.linkedin.com/in/omkar-yeske-a81698255" style="text-decoration: none; background-color: #0077b5; color: white; padding: 12px 24px; border-radius: 5px; font-weight: bold; display: inline-block; margin-right: 10px;">LinkedIn</a>
            <a href="https://github.com/OmkYes" style="text-decoration: none; background-color: #333; color: white; padding: 12px 24px; border-radius: 5px; font-weight: bold; display: inline-block;">GitHub</a>
          </td>
        </tr>
        <tr>
          <td align="center" style="padding: 10px 0;">
            <a href="https://www.linkedin.com/in/omkar-yeske" style="margin-right: 15px;">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" width="32" height="32" style="vertical-align: middle;">
            </a>
            <a href="https://github.com/OmkarYeske">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="32" height="32" style="vertical-align: middle;">
            </a>
          </td>
        </tr>
        <tr>
          <td style="color: #999999; font-size: 14px; text-align: center;">
            <p>— Omkar Yeske<br/>Full Stack Developer</p>
            <p style="font-size: 12px;">Chhatrapati Sambhajinagar, India</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
`
  })

  res.json({ message: "form submit success" })
})