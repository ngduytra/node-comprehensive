const nodemailer = require("nodemailer");
const mjml2html = require('mjml')
const pass ='tra1998765432119987654321tra-?';



const htmlOutput = mjml2html(`
<mjml>
    <mj-head>
        
        <mj-style inline="inline">
            .detail-box {
                border-radius: 10px;
            }
            .invite_wrapper {
                background-color: #2E2E2E;
                border-radius: 10px;
            }
            .user_info {
                width: 100%;
                color: #ffffff;
            }
            .user_info-no-name {
                width: 100%;
                color: #ffffff;
                margin-top: 4px;
            }
            .note_box {
                background-color: #2E2E2E;
                border-radius: 10px;
                color: #ffffff;
            }
            .bottom-txt {
                opacity: 0.87;
                font-weight:390;
            }
            .face-custom img {
                aspect-ratio: 1/2;
            }
            .hidden {
                display: none;
            }
            .img_mail_box {
                width: 28px;
                height: 28px;
            }
            .custom-body {
                margin: unset
            }
            .footers div {
                max-width: unset !important;
                margin: unset;
            }
            .table-height {
              height: 35px;
            }
            .width-section {
              width: 410px;
            }
        </mj-style>
    </mj-head>
    <mj-body background-color="#1E1E1E" width="410px" css-class="custom-body">
        <mj-section >
            <mj-column>
              <mj-raw>
                <span>&nbsp;</span>
              </mj-raw>
            </mj-column>
        </mj-section>
        <mj-section background-color="#212121" padding="22px 20px 0" >
            <mj-column vertical-align="middle">
                <mj-table align="center" width="110px" css-class="table-height">
                  <tr height="35" style="font-size: 13px;color:#ffffff; height:35px;">
                    <td height="35" style="text-align:center;height:35px; font-size: 35px; line-height: 35px">
                      <img width="20" height="31" src='https://res.cloudinary.com/timeless/image/upload/v1/app/feed/timeless_transbg.png' />
                    </td>
                    <td height="35" style="text-align:center; font-weight:390; opacity:0.87;height:35px; line-height: 35px; font-size:13px">
                      TIMELESS
                    </td>
                  </tr>
                </mj-table>
                <mj-divider border-width="1px" border-color="#2E2E2E" padding="7px 5px 10px"></mj-divider>
                <mj-text font-size="16px" color="#ffffff" align="center" padding-bottom="20px" font-weight="365" >Jane, you've received a meeting request</mj-text>
                <mj-text font-size="16px" color="#ffffff" align="center" padding-bottom="20px" font-weight="365" css-class="hidden">Jane, the meeting has been <span style="color: red">canceled</span></mj-text>
            </mj-column>
        </mj-section>
        <mj-section background-color="#212121" padding="0 20px" css-class="width-section" >
            <mj-column width="365px">
                <mj-table container-background-color="#2E2E2E" css-class="detail-box" padding="27px 23px 10px">
                    <tr style="color: #ffffff;">
                        <td style="font-weight:900; ">
                            <span style="font-size:18px;vertical-align: middle; ">AUG</span>
                            <span style="font-size:26px; vertical-align: middle;">&nbsp;27</span>
                        </td>
                        <td style="font-size:26px; font-weight:900; text-align:right">
                            FRI
                        </td>
                    </tr>
                    <tr >
                      <td colspan="3" style="padding-top:17px;">
                        <img width="321" height="200" style="width: 321px; height:200px; object-fit:cover" src="https://res.cloudinary.com/timeless/image/upload/v1/app/event_cards/Work/20-demo.jpg"/>
                      </td>
                    <tr/>
                    <tr style="color: #ffffff; text-align:center;">
                      <td colspan="3" style="padding-top:7px;">
                        <p style="font-size:16px; font-weight:365; margin:0px 0px">10:00 am - 10:45 am</p>
                      </td>
                    </tr>
                    <tr style="color:#ffffff; font-size:12px; font-weight:365;opacity:0.6;text-align:center">
                      <td colspan="3" style="text-align:center;">
                        <span style="width:12px; vertical-align:middle;"><img width="12" height="12" src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Globe.png' alt="" style="width:12px;height:12px;"/></span>
                        <span style="text-align: left;padding-left: 3px;">Eastern Daylight Time</span>
                      </td>
                    </tr>
                </mj-table>
                <mj-text css-class="invite_title" font-size="17px" color="#ffffff" padding="24px 10px 10px" font-weight="365">Invitees:</mj-text>
                <mj-table css-class="invite_wrapper" padding="17px 17px 13px 40px">
                  <tr style=" vertical-align: top;">
                      <td style="width: 22px">
                        <img width="19" height="19" style="width:19px; height:19px; align-self:flex-start; margin-right: 10px" src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Profile.png' />
                      </td>
                      <td style="color: #ffffff; word-break: break-word; padding-bottom: 12px">
                          <div style="font-size:15px; opacity: 0.87; font-weight:390; margin-bottom: 2px">This is Long Email To test for display features So Please get itwell It is good</div>
                          <a style="font-size: 13px; opacity: 0.6; margin-top:7px; font-weight:365; color: #ffffff; text-decoration:none;">ThisisLongEmailTotestfordisplayfeaturesSoPleasegetitwell@gmail.com</a>
                      </td>
                      <td style="height: 28px; width:28px">
                          <a href="mailto:email@gmail.com" targetW="_blank"><img src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Mail.png' alt="image" class="img_mail_box"/></a>
                      </td>
                  </tr>
                  <tr style="vertical-align: top;">
                      <td style="width: 22px">
                        <img width="19" height="19" style="width:19px; height:19px; align-self:flex-start; margin-right: 10px" src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Profile.png' />
                      </td>
                      <td style="color: #ffffff; word-break: break-word; padding-bottom: 12px">
                          <div style="font-size:15px; opacity: 0.87; font-weight:390; margin-bottom: 2px">gggggggggg@gmai.com</div>
                          <a style="font-size: 13px; opacity: 0.6; margin-top:7px; font-weight:365; color: #ffffff; text-decoration:none;">gggggggggg@gmai.com</a>
                      </td>
                      <td style="height: 28px; width:28px">
                          <a href="mailto:email@gmail.com" targetW="_blank"><img src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Mail.png' alt="image" class="img_mail_box"/></a>
                      </td>
                  </tr>
                  <tr style="vertical-align: top">
                    <td style="width: 22px;">
                      <img width="19" height="19" style=" width:19px; height:19px; margin-right: 10px; margin-top:4px" src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Profile.png' />
                    </td>
                    <td style="word-break: break-word;" >
                        <div class="user_info-no-name">
                            <a style="font-size:15px; opacity: 0.87; position:relative; margin-top: 2px; font-weight:390; color:#ffffff;text-decoration:none;">ThisisLongEmailTotestfordisplayfeaturesSoPleasegetitwell@gmail.com</a>
                        </div>
                    </td>
                    <td style="height: 28px; width:28px">
                    <a href="mailto:email@gmail.com" target="_blank"><img src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Mail.png' alt="image" class="img_mail_box"/></a>
                    </td>
                  </tr>
                </mj-table>

                <mj-text css-class="note_title" font-size="17px" color="#ffffff" padding="24px 10px 10px" font-weight="365">Notes:</mj-text>
                <mj-text css-class="note_box" padding="10px 17px">
                    <div style="margin-bottom: 23px; margin-top: 12px; color:#ffffff; opacity:0.6; font-size: 14px; line-height: 18px; font-weight: 365">
                        Good morning! Today: some advice on how to persuade people to get vaccinated.
                        Also: people in Afghanistan are racing to erase their online lives amid fear of
                        retribution by the Taliban.
                    </div>
                </mj-text>
            </mj-column>
        </mj-section>
        <mj-section background-color="#212121" padding="0 20px 22px">
            <mj-column>
                <mj-divider border-width="1px" border-color="#2E2E2E" padding="83px 0px 5px"></mj-divider>
                <mj-text font-size="13px" css-class="bottom-txt" align="center" font-weight="365">
                    <a href="https://timeless.space/app" target="_blank" style="text-decoration:unset; color:#8CB2F8">View event in Timeless app</a>
                </mj-text>
                <mj-social inner-padding="0px 8px" icon-size="17px" mode="horizontal">
                    <mj-social-element src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/insta.png' background-color="transparent" name="instagram" href="https://www.instagram.com/">
                    </mj-social-element>
                    <mj-social-element src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/twitter.png' name="twitter" background-color="transparent" href="https://mjml.io/">
                    </mj-social-element>
                    <mj-social-element src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/linkedin.png' name="linkedin" background-color="transparent" href="https://mjml.io/">
                    </mj-social-element>
                    <mj-social-element src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/facebook.png' name="facebook" icon-size="8.5px" css-class="face-custom" background-color="transparent" href="https://mjml.io/">
                    </mj-social-element>
                </mj-social>
            </mj-column>
        </mj-section>

        <mj-section padding="0px" full-width="full-width" css-class="footers" text-align="right">
            <mj-column background-color ="#323232" width="166px" padding="15px 20px" border-radius="24px 0px 0px 0px">
                <mj-text padding="0px" color="#ffffff">
                    <a href="https://timeless.space/app" target="_blank" style="text-decoration:unset; color: #ffffff;">
                        <div style="font-size:12px; font-weight:390; opacity: 0.7; margin-bottom:5px;">Shared from</div>
                        <div style="font-size:20px; font-weight: 700">TIMELESS<img src='https://res.cloudinary.com/timeless/image/upload/v1/app/web/Heart.png' alt="" style=" margin-left: 5px;" /></div>
                    </a>
                </mj-text>
            </mj-column>
        </mj-section>
    </mj-body>
</mjml>
`)

async function main() {
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: 'divergentpisces@gmail.com', 
            pass: pass
        },
    });
    // dtt.vinh@gmail.com, quan.nguyen@zien.vn

    let info = await transporter.sendMail({
      from: '"Minh day 👻" <ngduytra@gmail.com>', // sender address
      to: "divergentpisces@gmail.com,tra.nguyen@zien.vn, divergentwebagency@gmail.com, quan.nguyen@zien.vn, nguyenphuocquan2610@gmail.com, vu.nguyen@zien.vn, vinh.dang@zien.vn, dtt.vinh@hotmail.com, dtt.vinh@gmail.com,mailto:zien.auto.010@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: `${htmlOutput.html}`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);``

