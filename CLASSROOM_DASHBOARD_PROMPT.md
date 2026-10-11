# AI Sovereignty classroom dashboard — reusable student prompt

Copy the prompt below into Codex, attach `AI_Sovereignty_35_Synthetic_Responses.xlsx`, and select your own GitHub repository. Replace the repository placeholder before submitting. This describes a similar layout and behaviour; generated results may vary.

---

Build a working, interactive web dashboard that turns the attached AI Sovereignty Excel spreadsheet into clear, useful visual insights. Implement the dashboard and verify it; do not stop at a design proposal.

## Purpose and audience

This is a classroom demonstration for Information Systems students with limited experience in data analysis. Show how a spreadsheet becomes a bespoke dashboard, how students can explore patterns, and how they can check the evidence behind an interpretation.

The website itself must teach students what they are looking at. Do not assume they know what a response, theme, category, percentage denominator or filter means. Explain these in plain language beside the relevant content. Do not rely on a separate README or chat explanation.

## Inspect the workbook before implementing

Read the attached workbook first. Identify its worksheets, actual question headers, response rows, administrative columns and missing answers. The survey asks:

1. How would you define AI sovereignty?
2. Which everyday student task would become most difficult if Australia banned foreign AI apps?
3. How concerned are you about which country or company owns your personal data?
4. Should Australia rely on foreign AI providers or invest in local AI technology?
5. Why might an Australian business care about using local or foreign AI?

Use the workbook's exact header wording when displaying the source question; the questions above describe the intended subjects, not necessarily the literal column headers.

The workbook also includes IDs, timestamps, names, email, points and feedback. Keep IDs for tracing responses, but exclude names, email, timestamps, points and feedback from the analysis and response table. Blank scoring fields are not zero scores.

The attached demonstration dataset contains 35 fictional responses. Clearly display **Synthetic classroom data** while it is loaded. Explain that these are made-up examples for teaching, not findings about real students. Calculate totals from the file; do not hardcode 35 or any chart counts.

## Excel upload and reading

- Use the attached workbook as the initial dataset and include a **Load demo** button.
- Support drag-and-drop and a visible **Upload workbook** file picker for `.xlsx` files.
- Read workbook contents dynamically. Match question columns by header wording, excluding points and feedback versions; do not depend solely on column positions.
- Let users choose the relevant worksheet when multiple sheets exist.
- Show the current filename, worksheet, total response count and missing answers.
- Give plain-language explanations for unsupported files, unreadable workbooks and missing required question columns.
- Process uploads in the browser. No accounts, database or upload server are needed.
- Include identified respondent rows with missing answers; show a blank question cell as **Missing answer**. Do not confuse it with an unmatched theme or an unanswered scoring field.

## Use this visual design and page order

Create an Apple-inspired, calm, minimalist interface with an off-white background, charcoal text and one muted sage-green accent. Use a system sans-serif font, generous whitespace, rounded white cards, thin pale borders and subtle shadows. Restrained translucent effects are acceptable only with strong text contrast. Avoid decorative gauges, excessive animation and clutter.

Design primarily for a classroom laptop. Use a centred content area about 1,250–1,400 pixels wide, with comfortable side padding. On laptops, put the four main chart cards in a two-column grid; stack them on smaller screens. Use readable labels, responsive controls, wrapped text and horizontal scrolling within the response table rather than across the whole page.

Use this order:

1. Slim header with **Classroom lens**, **Information Systems**, and **Browser-only analysis**.
2. Hero heading **Who holds the intelligence?**, a short teaching-oriented introduction, and the synthetic-data badge.
3. Section links: Overview, Privacy, AI investment, Everyday reliance, Business, Definitions, Responses.
4. Workbook upload panel showing filename, file picker, Load demo and worksheet selector.
5. Visible **What data am I looking at?** teaching card.
6. Privacy and AI preference filters, **Reset filters**, and active-filter status.
7. Overview totals and three evidence-linked observations.
8. Four chart cards: privacy, AI investment, everyday tasks, business considerations.
9. **How answers become themes**, with a worked example and editable rules.
10. Definitions from the spreadsheet.
11. Searchable response table.
12. Quiet footer and a fixed **↑ Back to top** control.

The Back to top control must remain available while scrolling, work with keyboard input, return to the top heading, and respect reduced-motion preferences. Include visible focus states on all interactive controls.

## Explain the source of the data throughout the page

The introductory teaching card must explain:

- The filename and selected worksheet being analysed.
- Each spreadsheet row represents one respondent; each question column contains that person's answer.
- The dashboard adds counts, percentages, shorter headings, category labels and themes. It does not invent or rewrite answers.
- Question columns are found from their headers. Administrative and scoring fields are excluded.
- A response means one person's row; an answer means one question cell. One response can therefore supply five answers.
- A practical first action: read a chart's question, click a bar, and check the matching original answers in the table.

In every chart card, visibly show:

- **Source · Survey Question [number]**.
- The full, exact question header from the currently loaded worksheet.
- Filename, worksheet and Excel column letter.
- Which answers are counted and how the dashboard transforms them into categories or themes.
- What the bar lengths, counts and percentages mean, including the denominator and missing-answer count.
- What clicking a bar does and how to reset the selection.

Keep these explanations accurate after a replacement upload, worksheet change, filter change or rule edit. Do not hardcode source column letters or original header text.

## Dashboard content

### Overview

Show response count in the current view alongside total responses in the worksheet, missing question answers, and a short dataset description. Explain that missing counts refer to the five answer columns, not blank scores.

Show three concise observations calculated from the current data, identifying their count or percentage and linking to the relevant chart. Handle ties clearly. Describe what is observed; do not claim causes or generalise beyond the dataset.

### Privacy concerns — Question 3

Use an ordered horizontal bar chart, from low to high concern, with uncertainty separate. Show counts and percentages. Preserve unrecognised and missing answers as separate categories.

Explain that privacy labels are categories created by the dashboard from answer wording, not extra spreadsheet columns. Document the actual phrase-matching rules and their order, including how uncertainty, missing answers and unfamiliar wording are handled.

### Local versus foreign AI — Question 4

Use a horizontal bar chart preserving distinct positions: use both, invest in some local capability while retaining foreign access, build local AI, rely on foreign AI, unsure, unrecognised and missing answers.

Explain that these are summaries of expressed positions, not rankings or correctness scores. Document the actual classification rules and make original answers inspectable.

### Everyday reliance on AI — Question 2

Group the open-text task answers into provisional themes, such as coding and technical tools, understanding course material, writing and communication, translation and language, study preparation, research and ideas, and limited reliance.

Show theme frequencies and exact original answer examples. Keep unmatched and missing answers distinguishable. Explain which answer was chosen as each example, and that examples are not a separate dataset or a substitute for reading all matching responses.

### Business considerations — Question 5

Use provisional themes such as privacy and data handling, security and confidentiality, legal obligations, supplier dependence, reliability and continuity, cost and performance, and local context or jobs.

Show frequencies and let students inspect matching original answers. Do not imply that local providers are automatically safe or that a keyword match confirms the respondent's position.

### How answers become themes

Do not use the unexplained heading “Open the black box”. Make the method understandable without opening the rule editor.

Explain step by step:

1. A theme is a topic label added by the dashboard. It is not a survey question or original spreadsheet column.
2. Theme grouping applies to the written answers to Question 2 and Question 5.
3. Each theme has editable keywords or phrases. An answer matches when it contains at least one phrase, ignoring capital letters. Explain whether matching also occurs within longer words.
4. Each answer counts once per matching theme, even if several keywords in that theme match.
5. The same answer can match several themes, so percentages may exceed 100%.
6. A theme percentage is its matching-answer count divided by all selected responses. State how missing answers are treated in that denominator.
7. An answered cell with no matching keyword is **Unmatched**. An empty cell is **Missing answer**.
8. Keyword matching does not understand meaning, context or negation. For example, “not secure” can match “secure”. These are provisional groups, not definitive qualitative analysis or correctness judgements.

Include a worked example taken dynamically from a current response. Show its question number, response ID, Excel row, full quotation, matched keyword(s), assigned theme(s), and how it contributes to the bars. If filters leave no suitable example, say so plainly.

Provide **Inspect & adjust classification rules**, with labelled text boxes containing the current comma-separated keyword lists. Explain exactly how to add or remove phrases and use **Apply theme rules**. Explain that applying rules recalculates the charts and any active theme filter but does not change the original answers or Excel file. Provide **Restore defaults** and clearly state whether edits persist after a reload.

Also document the fixed privacy and AI preference rules separately, including their order and the first-match behaviour. These are distinct from the editable open-text theme lists.

### What does AI sovereignty mean? — Question 1

Show the exact source question and its workbook location. Explain that the quotation cards are original responses to Question 1, not official definitions written or endorsed by the website. In the demo, they are fictional examples.

Preserve different interpretations and uncertainty. Do not assign correctness scores without a supplied marking rubric.

If identical definitions are shown only once, explain that explicitly: one card per distinct answer, in worksheet order, with the first matching response ID and Excel row. Card counts do not indicate how common an interpretation is. Repeated answers must remain in the response table. Explain how filters affect the quotations and why blank answers have no quotation.

### Explore the responses

Explicitly explain where the five answer columns come from. They are the five original survey questions with shorter headings:

- Q1: AI sovereignty.
- Q2: Everyday reliance.
- Q3: Privacy concern.
- Q4: AI preference.
- Q5: Business considerations.

Provide a question-to-column guide showing each shortened heading, full current spreadsheet question and Excel column letter.

Each table row must keep one respondent's five original answers together. Show the workbook ID and original Excel row so students can find the corresponding cells in the selected worksheet. If no ID column exists, explain how dashboard IDs are assigned.

Use wrapped text and expandable long answers. Explain that an ellipsis shortens the preview; **Read full answer** reveals the whole answer. Show blank question cells as **Missing answer**.

Include a search field for answer text or response ID. Explain that search ignores capital letters and applies to the entire dashboard, not only the table. Names, emails, timestamps, scores and feedback remain excluded.

## Consistent interaction

Privacy and AI preference filters, clicked chart categories and search must combine consistently. Update every chart, count, quotation, example, denominator, observation and table from the same selected rows. Clearly show active filters and selected response count.

Clicking a category must select its matching respondents and jump to the response table. **Reset filters** clears dropdowns, chart selections and search, but does not silently undo theme edits. Handle empty views without crashes or misleading interpretations.

Quote answers accurately. Distinguish observations from possible explanations and avoid unsupported causal claims.

## Complete, test and publish

Choose a straightforward implementation suited to the environment, such as Vite with browser-side Excel parsing and no backend.

Verify the actual workbook, totals, missing answers, theme overlap, unmatched responses, replacement uploads, reordered columns, multiple worksheets, filters, search, category clicks, rule edits, empty results, keyboard access, mobile layout and Back to top. Confirm source question text, column letters and Excel row numbers are accurate and update with the loaded data.

Run the relevant tests and production build. Test the built website under a repository URL path, not only the development server.

Upload the source, attached demonstration workbook and prebuilt site to my selected GitHub repository: **[REPLACE WITH YOUR OWNER/REPOSITORY]**. This upload is authorised. Prepare GitHub Pages hosting, using a committed `docs/` build with relative asset and workbook paths. Ensure serving either the repository root or `/docs` opens the working dashboard; do not publish an unbuilt development entry page that produces a blank screen. Do not overwrite unrelated existing work.

If tools permit, enable Pages and verify the live deployment. Otherwise, finish the upload and give the exact repository-specific Pages settings link and necessary setting choices. Do not claim it is live before verification. Do not send students looking for unspecified Codex environment settings or require local downloads or Node.js installation to view the hosted website.

Finish with the website address, a concise explanation of how to upload and explore data, test results, and any precise remaining hosting action.
