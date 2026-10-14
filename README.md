# Jasmine-Paton-chess
Jasmine Paton Chess Club website
A responsive, kid-friendly website for in-person chess lessons and junior tournament enquiries. Built with plain HTML, CSS, and JavaScript so it can be hosted free with GitHub Pages.
Files
`index.html` — page content and booking form
`style.css` — responsive styling and visual design
`script.js` — mobile navigation and form submission behavior
1. Add the files to GitHub
Open your repository: `https://github.com/` and select jasmine-paton-chess.
Select Add file → Create new file.
Create `index.html`, paste in the full contents of the local `index.html`, and commit.
Repeat for `style.css`, `script.js`, and `README.md`.
Make sure all four files are at the top level of the repository (not inside another folder).
If you prefer, download the ZIP, extract it, then use Add file → Upload files to upload the four files together.
2. Connect the booking form to Formspree
The form is ready for Formspree, but you must add your own Formspree form ID:
Sign in or create an account at Formspree.
Create a new form using `Jasmineleahp@gmail.com` as the recipient.
Verify the recipient email if Formspree asks you to.
Copy the form endpoint. It looks like `https://formspree.io/f/abcdefgh`.
In `index.html`, find:
`https://formspree.io/f/YOUR_FORMSPREE_ID`
Replace only `YOUR_FORMSPREE_ID` with the ID from your endpoint. For example, an endpoint ending in `/f/abcdefgh` means the ID is `abcdefgh`.
Commit the change and submit a test request on the live site.
Until the real form ID is added, the form intentionally displays a setup message instead of pretending to send.
3. Publish with GitHub Pages
In the repository, open Settings.
Select Pages in the left sidebar.
Under Build and deployment, set Source to Deploy from a branch.
Choose branch main and folder /(root), then save.
Wait a few minutes and refresh the Pages settings to find the published website URL.
The URL will typically look like `https://YOUR-GITHUB-USERNAME.github.io/jasmine-paton-chess/`.
Before launch
Add the real Formspree form ID.
Confirm the lesson arrangements, location, pricing, and tournament dates with Jasmine before publishing those details. This first version intentionally does not invent prices, a venue, or event dates.
Test the booking form on a phone and desktop.
