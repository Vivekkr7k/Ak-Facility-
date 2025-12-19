/**
 * Google Apps Script for Contact Form Submission
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name the first sheet "Contact Form Submissions" (or update SHEET_NAME below)
 * 3. Add headers in Row 1: Timestamp, Name, Email, Phone, Service, Message
 * 4. Go to Extensions > Apps Script
 * 5. Delete the default code and paste this entire script
 * 6. Update the SHEET_NAME variable if you used a different sheet name
 * 7. Click Save (Ctrl+S or Cmd+S)
 * 8. Click Deploy > New deployment
 * 9. Select type: Web app
 * 10. Execute as: Me
 * 11. Who has access: Anyone (or Anyone with Google account if you want some security)
 * 12. Click Deploy
 * 13. Copy the Web App URL and use it in your Contact.tsx file
 * 14. Click Authorize access when prompted
 */

// Configuration - Update this if your sheet name is different
const SHEET_NAME = 'Contact Form Submissions';

/**
 * Main function to handle POST requests from the contact form
 */
function doPost(e) {
  try {
    // Get the active spreadsheet
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
    
    // If sheet doesn't exist, create it with headers
    if (!sheet) {
      const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
      newSheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Service', 'Message']);
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Sheet created. Please try submitting again.'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Parse the POST data - handle both JSON and form-encoded data
    let postData = {};
    
    if (e.postData && e.postData.contents) {
      // Try to parse as JSON first
      try {
        postData = JSON.parse(e.postData.contents);
      } catch (jsonError) {
        // If JSON parsing fails, try form-encoded data
        postData = e.parameter || {};
      }
    } else if (e.parameter) {
      // Handle form-encoded data
      postData = e.parameter;
    }
    
    // Extract form fields
    const timestamp = new Date();
    const name = (postData.name || '').toString().trim();
    const email = (postData.email || '').toString().trim();
    const phone = (postData.phone || '').toString().trim();
    const service = (postData.service || '').toString().trim();
    const message = (postData.message || '').toString().trim();
    
    // Validate required fields
    if (!name || !email || !phone || !service) {
      return ContentService.createTextOutput(JSON.stringify({
        success: false,
        message: 'Missing required fields'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Append the data to the sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      service,
      message
    ]);
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      success: true,
      message: 'Form submitted successfully'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    // Log error and return error response
    Logger.log('Error: ' + error.toString());
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      message: 'An error occurred: ' + error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Function to handle GET requests (for testing)
 */
function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    message: 'Contact Form API is running. Use POST to submit form data.'
  })).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Function to set up the sheet with headers (run this once manually)
 */
function setupSheet() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);
  
  if (!sheet) {
    const newSheet = SpreadsheetApp.getActiveSpreadsheet().insertSheet(SHEET_NAME);
    newSheet.getRange(1, 1, 1, 6).setValues([['Timestamp', 'Name', 'Email', 'Phone', 'Service', 'Message']]);
    newSheet.getRange(1, 1, 1, 6).setFontWeight('bold');
    newSheet.setFrozenRows(1);
    Logger.log('Sheet created and headers added');
  } else {
    Logger.log('Sheet already exists');
  }
}

