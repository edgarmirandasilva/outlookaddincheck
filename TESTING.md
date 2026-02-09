# Testing Guide for Email Follow-Up Manager

## Manual Testing Checklist

### Prerequisites
- Microsoft Outlook (Desktop, Web, or Mac)
- Add-in sideloaded or installed
- Test email account configured (IMAP, POP, or Exchange)

### Test Case 1: Opening the Task Pane
1. Open any email in Outlook
2. Click on "Open Follow-Up" button in the ribbon
3. **Expected**: Task pane opens on the right side
4. **Expected**: Email subject and sender are displayed
5. **Expected**: Default state shows "No Follow-Up Flag" with 📭 icon

### Test Case 2: Setting a Follow-Up Flag
1. With task pane open and email having no flag
2. Click "Set Follow-Up Flag" button
3. **Expected**: Icon changes to 🚩 (red flag)
4. **Expected**: Status text changes to "Pending Follow-Up"
5. **Expected**: "Mark as Completed" and "Clear Flag" buttons appear
6. **Expected**: Success message displayed
7. **Expected**: Email gets "Follow Up" category

### Test Case 3: Marking Email as Completed
1. With a flagged email open (from Test Case 2)
2. Click "Mark as Completed" button
3. **Expected**: Icon changes to ✓ (green check)
4. **Expected**: Status text changes to "Task Completed"
5. **Expected**: Background color changes to green (#dff6dd)
6. **Expected**: Success message displayed
7. **Expected**: Email gets "Follow Up - Completed" category
8. **Expected**: Email remains in inbox
9. **Expected**: Task removed from pending list (verify in Tasks pane)

### Test Case 4: Using Ribbon Button
1. Open a flagged email
2. Click "Mark Completed" button directly from ribbon
3. **Expected**: Email marked as completed without opening task pane
4. **Expected**: Notification appears confirming completion

### Test Case 5: Clearing a Flag
1. With a flagged or completed email
2. Open task pane
3. Click "Clear Flag" button
4. **Expected**: Icon changes to 📭
5. **Expected**: Status shows "No Follow-Up Flag"
6. **Expected**: All follow-up categories removed
7. **Expected**: "Set Follow-Up Flag" button appears

### Test Case 6: State Persistence
1. Mark an email as completed
2. Close Outlook or switch to another email
3. Return to the completed email
4. **Expected**: Status still shows as completed (✓)
5. **Expected**: Categories and custom properties persisted

### Test Case 7: IMAP Account Compatibility
1. Test with an IMAP account
2. Perform all operations (set flag, mark completed, clear)
3. **Expected**: All features work correctly
4. **Expected**: State persists across sessions

## Expected Behavior Summary

### Visual Indicators
- **No Flag**: Gray background, 📭 icon
- **Pending**: Yellow/gold background (#fff4ce), 🚩 icon
- **Completed**: Green background (#dff6dd), ✓ icon

### Email Behavior
- Email **stays in inbox** after marking as completed
- Only the follow-up status changes
- Email is not moved or deleted
- Task appears/disappears from Tasks list based on status

### Categories Used
- "Follow Up" - For flagged emails
- "Follow Up - Completed" - For completed tasks
- Categories are mutually exclusive

### Custom Properties Stored
- `followUpStatus`: "flagged" | "completed" | undefined
- `flaggedDate`: ISO timestamp when flagged
- `completedDate`: ISO timestamp when completed

## Known Limitations

1. Icons are emoji-based (may vary by OS)
2. Requires Office.js API version 1.3+
3. Some features may be limited on mobile platforms
4. Development server requires HTTPS certificates

## Troubleshooting

### Add-in doesn't appear
- Check that manifest.xml is properly configured
- Verify add-in is sideloaded correctly
- Try restarting Outlook

### Changes don't persist
- Check custom properties are being saved
- Verify account type supports custom properties
- Check for any console errors

### Categories not showing
- Ensure Outlook has category support enabled
- Check account type compatibility
- Verify Office.js API version
