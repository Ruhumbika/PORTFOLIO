from pathlib import Path
from reportlab.platypus import SimpleDocTemplate,Paragraph,Spacer,PageBreak,HRFlowable,KeepTogether
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
import fitz
root=Path(__file__).resolve().parents[1]
for name,file in [('CV','DejaVuSans.ttf'),('CVBold','DejaVuSans-Bold.ttf')]:pdfmetrics.registerFont(TTFont(name,'/usr/share/fonts/truetype/dejavu/'+file))
pdfmetrics.registerFontFamily('CV',normal='CV',bold='CVBold')
styles={
'name':ParagraphStyle('name',fontName='CVBold',fontSize=22,leading=27,alignment=1,textColor=HexColor('#000000'),spaceAfter=4),
'role':ParagraphStyle('role',fontName='CV',fontSize=12,leading=18,alignment=1,textColor=HexColor('#000000'),spaceAfter=4),
'contact':ParagraphStyle('contact',fontName='CV',fontSize=10,leading=15,alignment=1,textColor=HexColor('#000000'),spaceAfter=1),
'section':ParagraphStyle('section',fontName='CVBold',fontSize=12.5,leading=18,textColor=HexColor('#000000'),spaceBefore=9,spaceAfter=4,keepWithNext=True),
'entry':ParagraphStyle('entry',fontName='CVBold',fontSize=12,leading=18,textColor=HexColor('#000000'),spaceBefore=6,spaceAfter=2,keepWithNext=True),
'meta':ParagraphStyle('meta',fontName='CV',fontSize=10.5,leading=15,textColor=HexColor('#000000'),spaceAfter=3,keepWithNext=True),
'body':ParagraphStyle('body',fontName='CV',fontSize=12,leading=18,textColor=HexColor('#000000'),spaceAfter=5),
'bullet':ParagraphStyle('bullet',fontName='CV',fontSize=12,leading=18,textColor=HexColor('#000000'),leftIndent=11,bulletIndent=0,spaceAfter=4),
}
story=[]
html=[]
def p(text,kind='body'):
 story.append(Paragraph(text,styles[kind],bulletText='•' if kind=='bullet' else None))
 html.append(f'<p class="{kind}">{text}</p>')
def section(text):
 p(text,'section');story.append(HRFlowable(width='100%',thickness=.5,color=HexColor('#000000'),spaceAfter=5))
def project(title,stack,body):
 html.extend([f'<p class="entry">{title}</p>',f'<p class="meta">{stack}</p>',f'<p>{body}</p>'])
 story.append(KeepTogether([Paragraph(title,styles['entry']),Paragraph(stack,styles['meta']),Paragraph(body,styles['body'])]))
p('Ruhumbika Mtumba John','name')
p('Software engineer · Full stack development and enterprise integration','role')
p('Dar es Salaam, Tanzania · <a href="tel:+255787550399">+255 787 550 399</a>','contact')
p('<a href="mailto:ruhumbikamtumbajohn@gmail.com">ruhumbikamtumbajohn@gmail.com</a>','contact')
p('<a href="https://johnportifolio.rjaybarber.shop/">johnportifolio.rjaybarber.shop</a> · <a href="https://github.com/Ruhumbika">github.com/Ruhumbika</a>','contact')
p('<a href="https://www.linkedin.com/in/ruhumbika-mtumba-john/">linkedin.com/in/ruhumbika-mtumba-john</a>','contact')
section('Professional profile')
p('Software engineer building web applications, APIs and enterprise integrations. Develops business platforms and automation workflows, with experience in database design, deployment and troubleshooting.')
section('Technical skills')
p('<b>Development:</b> PHP, JavaScript, Vue.js, Dart, MySQL, HTML, CSS and Python.')
p('<b>Integration and data:</b> REST APIs, webhooks, authentication and database design.')
p('<b>Servers and hosting:</b> Contabo VPS, cPanel, Linux/Ubuntu, Nginx, Docker, DNS, SSL certificates and application deployment.')
p('<b>Delivery:</b> Git, Postman, automated and manual testing, systemd service management and technical documentation.')
section('Professional experience')
p('Full stack developer','entry')
p('Ma Cargo Transporters and Forwarders, ABOOD Group of Companies<br/>August 2026 to present','meta')
p('Develop and support enterprise application features, REST APIs and operational workflows.','bullet')
p('Build integrations for ERP approvals, attendance data and radio advertising workflows.','bullet')
p('Investigate application and integration issues, validate changes and support deployment.','bullet')
p('ICT field practical training','entry')
p('Kilindi District Council · July to November 2024 and July to November 2025','meta')
p('Provided user support, software installation, device configuration and routine network troubleshooting.','bullet')
section('Education')
p('<b>Bachelor of Science in Business Information Technology</b><br/>University of Dar es Salaam, 2023 to 2026.')

story.append(PageBreak())
p('Ruhumbika Mtumba John','contact')
section('Selected engineering work')
p('View completed projects and further details at <a href="https://johnportifolio.rjaybarber.shop/">johnportifolio.rjaybarber.shop</a>.','meta')
project('RJAY Barbershop booking and service platform','React, FastAPI, MongoDB · <a href="https://rjaybarber.shop/">rjaybarber.shop</a>','Developed a customer booking platform with service catalogues, appointment workflows and administrative availability controls. Supported deployment on a Linux VPS.')
project('Eagersky real estate platform','<a href="https://eagersky.com/">eagersky.com</a>','Contributed to a real estate platform for discovering accommodation, browsing property listings and submitting booking requests.')
project('WhatsApp ERP approval gateway','Python, REST APIs, webhooks, SQLite','Built a gateway connecting WhatsApp decisions with ERP approval workflows, approver identity, callbacks and audit records. Implemented background delivery and retry handling.')
project('Biometric attendance integration','Python, PostgreSQL, Docker, REST APIs','Built an integration forwarding biometric attendance records into HRM workflows, with transaction filtering, device identification, queues and batch processing.')
project('ABOOD Media radio advertising integration','Python, RadioBOSS API · <a href="https://appdemo.abooderp.com/">appdemo.abooderp.com</a>','Developing the studio integration for a system designed to track radio advertising sales. Connects ERP schedules with RadioBOSS playback and advertisement insertion.')
project('Student support AI assistant','Academic project · FastAPI, Ollama, Streamlit, retrieval augmented generation','Developed a locally hosted assistant that retrieves university FAQ information and uses a language model to provide relevant student support responses.')
section('Entrepreneurship and professional development')
p('Founder and operator of RJAY Digital Hub and RJAY Barbershop, applying software, digital branding and customer service to business operations.')
p('NMB Nuru Yangu Scholarship Mentorship Programme, 2026. National Service Training, JKT 822 KJ, 2023.','meta')
def footer(c,d):
 c.saveState();c.setStrokeColor(HexColor('#000000'));c.line(42,35,553,35);c.setFont('CV',8);c.setFillColor(HexColor('#000000'));c.drawString(42,22,'Ruhumbika Mtumba John · Software engineer');c.drawRightString(553,22,str(d.page));c.restoreState()
out=root/'public/cv/Ruhumbika_Mtumba_John_Curriculum_Vitae.pdf'
SimpleDocTemplate(str(out),pagesize=(595.276,841.89),leftMargin=42,rightMargin=42,topMargin=32,bottomMargin=48,title='Ruhumbika Mtumba John, software engineer',author='Ruhumbika Mtumba John').build(story,onFirstPage=footer,onLaterPages=footer)

import shutil
shutil.copyfile(out, root/'cv/Ruhumbika_Mtumba_John_Curriculum_Vitae.pdf')

(root/'cv/Ruhumbika_Mtumba_John_CV.html').write_text('<!doctype html><html lang="en"><meta charset="utf-8"><title>Ruhumbika Mtumba John CV</title><style>body{font:12pt/1.5 Arial;color:black;max-width:760px;margin:32px auto}p{margin:6px 0}.name{font-size:22pt;font-weight:bold;text-align:center}.role,.contact{text-align:center}.entry,.section{font-weight:bold}.section{border-bottom:1px solid black;margin-top:20px}.meta,.contact{font-size:10.5pt}a{color:black}</style><body>'+''.join(html)+'</body></html>')
