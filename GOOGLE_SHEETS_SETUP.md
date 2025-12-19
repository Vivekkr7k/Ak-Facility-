# Google Sheets Integration Setup Guide

This guide will help you set up the contact form to save submissions to a Google Sheet.

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "A.K. Facility Services - Contact Form"
4. Name the first sheet "Contact Form Submissions" (or update the `SHEET_NAME` in the script)

## Step 2: Set Up Headers

In the first row (Row 1) of your sheet, add these headers:
- **A1**: Timestamp
- **B1**: Name
- **C1**: Email
- **D1**: Phone
- **E1**: Service
- **F1**: Message

## Step 3: Create the Apps Script

1. In your Google Sheet, go to **Extensions** > **Apps Script**
2. Delete any default code in the editor
3. Copy the entire contents of `google-apps-script.js` from this project
4. Paste it into the Apps Script editor
5. Click **Save** (Ctrl+S or Cmd+S)
6. Give your project a name (e.g., "Contact Form Handler")

## Step 4: Deploy as Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon (⚙️) next to "Select type"
3. Choose **Web app**
4. Configure the deployment:
   - **Description**: "Contact Form API" (optional)
   - **Execute as**: Me (your email)
   - **Who has access**: 
     - For testing: "Anyone" (less secure but easier)
     - For production: "Anyone with Google account" (more secure)
5. Click **Deploy**
6. **IMPORTANT**: Copy the **Web App URL** - you'll need this in the next step
7. Click **Authorize access** when prompted
   - Review permissions and click **Allow**

## Step 5: Update Your Contact Form

1. Open `src/pages/Contact.tsx`
2. Find this line near the top:
   ```typescript
   const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
   ```
3. Replace `'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'` with your Web App URL from Step 4
   ```typescript
   const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec'
   ```
4. Save the file

## Step 6: Test the Form

1. Run your development server: `npm run dev`
2. Navigate to the Contact page
3. Fill out and submit the form
4. Check your Google Sheet - you should see the submission appear!

## Troubleshooting

### Form submissions not appearing in the sheet?

1. **Check the sheet name**: Make sure the sheet name matches exactly (case-sensitive)
   - Default: "Contact Form Submissions"
   - Update in `google-apps-script.js` if different: `const SHEET_NAME = 'Your Sheet Name';`

2. **Check permissions**: 
   - Make sure you authorized the script
   - Try changing "Who has access" to "Anyone" temporarily

3. **Check the script URL**: 
   - Make sure the URL in `Contact.tsx` is correct
   - The URL should end with `/exec`

4. **Check browser console**: 
   - Open Developer Tools (F12)
   - Look for any error messages in the Console tab

5. **Test the script directly**:
   - In Apps Script, click the function dropdown
   - Select `doGet` and click Run
   - You should see a success message

### Need to update the script?

1. Make changes in Apps Script editor
2. Click **Save**
3. Click **Deploy** > **Manage deployments**
4. Click the pencil icon (✏️) next to your deployment
5. Click **New version**
6. Click **Deploy**
7. **Note**: The URL stays the same, no need to update your Contact.tsx

## Security Notes

- The current setup uses `no-cors` mode, which means you can't read the response from the server
- For production, consider adding:
  - Rate limiting
  - Input validation/sanitization
  - CAPTCHA to prevent spam
  - Email notifications when forms are submitted

## Optional: Email Notifications

To receive email notifications when forms are submitted, add this to the `doPost` function in your Apps Script (after the `sheet.appendRow` line):

```javascript
// Send email notification
const subject = 'New Contact Form Submission';
const body = `
New contact form submission received:

Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Message: ${message}
`;
MailApp.sendEmail('your-email@gmail.com', subject, body);
```

Replace `'your-email@gmail.com'` with your actual email address.

## Support

If you encounter any issues, check:
1. Google Apps Script execution logs (View > Execution log)
2. Browser console for JavaScript errors
3. Network tab in browser DevTools to see if the request is being sent

