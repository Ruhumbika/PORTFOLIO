"""Build the public CV and its editable HTML source with ReportLab."""
from pathlib import Path
from html import escape
import shutil
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak, KeepTogether, Table, TableStyle, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
FONT = Path('/usr/share/fonts/truetype/dejavu')
pdfmetrics.registerFont(TTFont('CV', str(FONT / 'DejaVuSans.ttf')))
pdfmetrics.registerFont(TTFont('CVBold', str(FONT / 'DejaVuSans-Bold.ttf')))
pdfmetrics.registerFontFamily('CV', normal='CV', bold='CVBold')
NAVY = '#18313F'
TEAL = '#087D80'
styles = {
 'name': ParagraphStyle('name', fontName='CVBold', fontSize=23, leading=28, textColor=HexColor(NAVY), spaceAfter=6),
 'role': ParagraphStyle('role', fontName='CVBold', fontSize=12, leading=18, textColor=HexColor(TEAL), spaceAfter=6),
 'contact': ParagraphStyle('contact', fontName='CV', fontSize=10, leading=15, textColor=HexColor('#435663'), spaceAfter=2),
 'section': ParagraphStyle('section', fontName='CVBold', fontSize=12.5, leading=18, textColor=HexColor(TEAL), spaceBefore=12, spaceAfter=7, keepWithNext=True),
 'entry': ParagraphStyle('entry', fontName='CVBold', fontSize=12, leading=18, textColor=HexColor(NAVY), spaceBefore=8, spaceAfter=3, keepWithNext=True),
 'meta': ParagraphStyle('meta', fontName='CV', fontSize=10.5, leading=15, textColor=HexColor(TEAL), spaceAfter=4, keepWithNext=True),
 'bullet': ParagraphStyle('bullet', fontName='CV', fontSize=12, leading=18, leftIndent=12, firstLineIndent=0, bulletIndent=0, textColor=HexColor('#263842'), spaceAfter=5),
 'body': ParagraphStyle('body', fontName='CV', fontSize=12, leading=18, textColor=HexColor('#263842'), spaceAfter=7),
}
# All public copy is maintained here so the PDF and HTML stay consistent.
pages = [
 [
 ('name', 'Ruhumbika Mtumba John'),
 ('role', 'Software engineer'),
 ('contact', 'Dar es Salaam, Tanzania · Enterprise integration and automation'),
 ('contact', '<a href="mailto:ruhumbikamtumbajohn@gmail.com">ruhumbikamtumbajohn@gmail.com</a> · <a href="tel:+255787550399">+255 787 550 399</a>'),
 ('contact', '<a href="https://johnportifolio.rjaybarber.shop/">johnportifolio.rjaybarber.shop</a>'),
 ('contact', '<a href="https://www.linkedin.com/in/ruhumbika-mtumba-john/">linkedin.com/in/ruhumbika-mtumba-john</a> · <a href="https://github.com/Ruhumbika">github.com/Ruhumbika</a>'),
 ('section', 'Professional profile'),
 ('body', 'Business Information Technology graduate building web and mobile applications, enterprise integrations and automation. Combines software development, API testing and deployment with practical experience supporting business operations.'),
 ('section', 'Technical capabilities'),
 ('body', '<b>Development:</b> PHP, JavaScript, TypeScript, Python, Dart, SQL, HTML and CSS. Laravel, Next.js, Node.js, Express.js, FastAPI, Flutter and Streamlit.'),
 ('body', '<b>Systems and data:</b> REST APIs, webhooks, authorization, PostgreSQL, MySQL, SQLite, Docker, Linux and Git.'),
 ('body', '<b>Quality and delivery:</b> Postman, functional and regression testing, integration validation, UAT support, deployment troubleshooting and technical documentation.'),
 ('section', 'Professional experience'),
 ('entry', 'Full stack developer'),
 ('meta', 'Ma Cargo Transporters and Forwarders, ABOOD Group of Companies<br/>August 2026 to present'),
 ('bullet', 'Develop and support enterprise applications, APIs and operational workflows.'),
 ('bullet', 'Contribute to property management ERP functionality, approval workflows and attendance integration.'),
 ('entry', 'ICT field practical training'),
 ('meta', 'Kilindi District Council<br/>July to November 2024 and July to November 2025'),
 ('bullet', 'Provided user support, software installation and computer and printer configuration.'),
 ('bullet', 'Assisted with biometric devices and routine network troubleshooting.'),
 ],
 [
 ('section', 'Selected engineering work'),
 ('entry', 'WhatsApp approval gateway'),
 ('body', 'Developed and tested ERP approval workflows with identity verification, callbacks, audit records and background delivery.'),
 ('entry', 'Attendance integration'),
 ('body', 'Built and tested attendance forwarding with transaction filtering, device serial handling, queues and batch delivery.'),
 ('entry', 'Radio studio gateway'),
 ('body', 'Tested RadioBOSS playback control, track insertion and scheduling safeguards. ERP scheduling integration is in development.'),
 ('entry', 'Kilindi traders digital licence management system'),
 ('body', 'Built licensing, renewals, debt monitoring, SMS reminders, reports and audit logs. Validated imports and permissions and supported deployment.'),
 ('entry', 'Student support AI assistant'),
 ('body', 'Developed an academic assistant using FastAPI, Ollama and FAQ retrieval. Tested API integration and grounded responses.'),
 ('section', 'Education'),
 ('body', '<b>Bachelor of Science in Business Information Technology</b><br/>University of Dar es Salaam, 2023 to 2026.'),
 ('body', '<b>Advanced Certificate of Secondary Education</b><br/>Bunda High School, EGM, Division I, 2021 to 2023.'),
 ('body', '<b>Certificate of Secondary Education</b><br/>Iligamba Secondary School, Division I, 2020.'),
 ('section', 'Business and professional development'),
 ('body', 'Founder and operator of RJAY Digital Hub and RJAY Barbershop, supporting customer operations and digital branding.'),
 ('body', 'NMB Nuru Yangu Scholarship Mentorship Programme, 2026. National Service Training, JKT 822 KJ, 2023.'),
 ],
]

def footer(canvas, doc):
 canvas.saveState()
 canvas.setStrokeColor(HexColor('#D8E3E7'))
 canvas.line(42, 37, doc.pagesize[0] - 42, 37)
 canvas.setFont('CV', 8)
 canvas.setFillColor(HexColor('#526571'))
 canvas.drawString(42, 23, 'Ruhumbika Mtumba John · Curriculum vitae')
 canvas.drawRightString(doc.pagesize[0] - 42, 23, str(doc.page))
 canvas.restoreState()

out = ROOT / 'public/cv/Ruhumbika_Mtumba_John_Curriculum_Vitae.pdf'
story = []
for i, page in enumerate(pages):
 if i:
  story.append(PageBreak())
  story.append(Paragraph('Ruhumbika Mtumba John', styles['contact']))
  story.append(Spacer(1, 6))
 else:
  white_name = ParagraphStyle('white_name', parent=styles['name'], textColor=HexColor('#FFFFFF'))
  white_role = ParagraphStyle('white_role', parent=styles['role'], textColor=HexColor('#A5E4DB'))
  banner = Table([[Paragraph(page[0][1], white_name)], [Paragraph('Software engineer · Enterprise integration and automation', white_role)]], colWidths=[511.276])
  banner.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,-1),HexColor(NAVY)),('LEFTPADDING',(0,0),(-1,-1),15),('RIGHTPADDING',(0,0),(-1,-1),15),('TOPPADDING',(0,0),(-1,0),12),('BOTTOMPADDING',(0,-1),(-1,-1),10)]))
  story.extend([banner, Spacer(1, 10)])
 for j, (kind, text) in enumerate(page):
  if not i and j < 2: continue
  if not i and j == 2: text = 'Dar es Salaam, Tanzania'
  if kind == 'section':
   story.append(Paragraph(text, styles[kind]))
   story.append(HRFlowable(width='100%', thickness=.6, color=HexColor('#B9D5D6'), spaceAfter=6))
  else:
   story.append(Paragraph(text, styles[kind], bulletText='•' if kind == 'bullet' else None))
doc = SimpleDocTemplate(str(out), pagesize=(595.276, 841.89), rightMargin=42, leftMargin=42, topMargin=35, bottomMargin=49, title='Ruhumbika Mtumba John, curriculum vitae', author='Ruhumbika Mtumba John')
doc.build(story, onFirstPage=footer, onLaterPages=footer)
shutil.copyfile(out, ROOT / 'cv' / out.name)
html = ['<!doctype html><html lang="en"><meta charset="utf-8"><title>Ruhumbika Mtumba John, curriculum vitae</title><style>@page{size:A4;margin:14mm}body{font-family:Arial,sans-serif;color:#263842;font-size:12pt;line-height:1.5;margin:0}section{break-after:page}section:last-child{break-after:auto}p{margin:0 0 6pt}a{color:inherit;text-decoration:none}.name{font-size:23pt;font-weight:bold;color:#18313f}.role,.section{color:#087d80;font-weight:bold}.section{margin-top:13pt}.entry{font-weight:bold;margin-top:10pt}.bullet{padding-left:14pt}.bullet:before{content:"• ";color:#087d80}.section{border-bottom:1px solid #b9d5d6;padding-bottom:5pt}.name{background:#18313f;color:white;padding:14pt}.contact{font-size:10pt}.meta{color:#087d80;font-size:10.5pt}</style><body>']
for page in pages:
 html.append('<section>')
 html.extend(f'<p class="{kind}">{text}</p>' for kind, text in page)
 html.append('</section>')
html.append('</body></html>')
(ROOT / 'cv/Ruhumbika_Mtumba_John_CV.html').write_text('\n'.join(html))
print(out)
