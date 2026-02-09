/* global Office */

Office.onReady((info) => {
    if (info.host === Office.HostType.Outlook) {
        console.log('Outlook add-in loaded successfully');
        loadEmailInfo();
        checkFlagStatus();
    }
});

/**
 * Load email information into the UI
 */
function loadEmailInfo() {
    Office.context.mailbox.item.subject.getAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            document.getElementById('emailSubject').textContent = result.value || '(No Subject)';
        }
    });
    
    Office.context.mailbox.item.from.getAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            const from = result.value;
            document.getElementById('emailFrom').textContent = 
                from.displayName || from.emailAddress || 'Unknown';
        }
    });
}

/**
 * Check the current flag status of the email
 */
function checkFlagStatus() {
    // Get the item's custom properties to check flag status
    Office.context.mailbox.item.loadCustomPropertiesAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            const customProps = result.value;
            const flagStatus = customProps.get('followUpStatus');
            
            if (flagStatus === 'completed') {
                updateUIForCompleted();
            } else if (flagStatus === 'flagged') {
                updateUIForFlagged();
            } else {
                updateUIForNoFlag();
            }
        }
    });
}

/**
 * Mark the email as completed
 * This simulates the Outlook behavior where clicking "Mark as Completed" 
 * changes the flag to a green check
 */
function markAsCompleted() {
    showMessage('Processing...', 'info');
    
    Office.context.mailbox.item.loadCustomPropertiesAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            const customProps = result.value;
            
            // Set the follow-up status to completed
            customProps.set('followUpStatus', 'completed');
            customProps.set('completedDate', new Date().toISOString());
            
            // Save the custom properties
            customProps.saveAsync((saveResult) => {
                if (saveResult.status === Office.AsyncResultStatus.Succeeded) {
                    // Update categories to visually mark as completed
                    setCompletedCategory();
                    updateUIForCompleted();
                    showMessage('✓ Email marked as completed! The follow-up task has been removed from pending list.', 'success');
                } else {
                    showMessage('Error: Could not save completion status', 'error');
                }
            });
        }
    });
}

/**
 * Set a follow-up flag on the email
 */
function setFlag() {
    showMessage('Setting flag...', 'info');
    
    Office.context.mailbox.item.loadCustomPropertiesAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            const customProps = result.value;
            
            customProps.set('followUpStatus', 'flagged');
            customProps.set('flaggedDate', new Date().toISOString());
            
            customProps.saveAsync((saveResult) => {
                if (saveResult.status === Office.AsyncResultStatus.Succeeded) {
                    setFlaggedCategory();
                    updateUIForFlagged();
                    showMessage('✓ Follow-up flag set successfully', 'success');
                } else {
                    showMessage('Error: Could not set flag', 'error');
                }
            });
        }
    });
}

/**
 * Clear the follow-up flag
 */
function clearFlag() {
    showMessage('Clearing flag...', 'info');
    
    Office.context.mailbox.item.loadCustomPropertiesAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            const customProps = result.value;
            
            customProps.remove('followUpStatus');
            customProps.remove('flaggedDate');
            customProps.remove('completedDate');
            
            customProps.saveAsync((saveResult) => {
                if (saveResult.status === Office.AsyncResultStatus.Succeeded) {
                    clearCategories();
                    updateUIForNoFlag();
                    showMessage('✓ Flag cleared', 'success');
                } else {
                    showMessage('Error: Could not clear flag', 'error');
                }
            });
        }
    });
}

/**
 * Set category to indicate completed status
 */
function setCompletedCategory() {
    const item = Office.context.mailbox.item;
    item.categories.getAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            let categories = result.value || [];
            
            // Remove any existing follow-up categories
            categories = categories.filter(cat => 
                cat !== 'Follow Up' && cat !== 'Follow Up - Pending'
            );
            
            // Add completed category
            if (!categories.includes('Follow Up - Completed')) {
                categories.push('Follow Up - Completed');
            }
            
            item.categories.setAsync(categories, (setResult) => {
                if (setResult.status !== Office.AsyncResultStatus.Succeeded) {
                    console.error('Could not set category:', setResult.error);
                }
            });
        }
    });
}

/**
 * Set category to indicate flagged status
 */
function setFlaggedCategory() {
    const item = Office.context.mailbox.item;
    item.categories.getAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            let categories = result.value || [];
            
            // Remove completed category if exists
            categories = categories.filter(cat => cat !== 'Follow Up - Completed');
            
            // Add flagged category
            if (!categories.includes('Follow Up')) {
                categories.push('Follow Up');
            }
            
            item.categories.setAsync(categories, (setResult) => {
                if (setResult.status !== Office.AsyncResultStatus.Succeeded) {
                    console.error('Could not set category:', setResult.error);
                }
            });
        }
    });
}

/**
 * Clear all follow-up categories
 */
function clearCategories() {
    const item = Office.context.mailbox.item;
    item.categories.getAsync((result) => {
        if (result.status === Office.AsyncResultStatus.Succeeded) {
            let categories = result.value || [];
            
            // Remove all follow-up related categories
            categories = categories.filter(cat => 
                cat !== 'Follow Up' && 
                cat !== 'Follow Up - Pending' && 
                cat !== 'Follow Up - Completed'
            );
            
            item.categories.setAsync(categories, (setResult) => {
                if (setResult.status !== Office.AsyncResultStatus.Succeeded) {
                    console.error('Could not clear categories:', setResult.error);
                }
            });
        }
    });
}

/**
 * Update UI to show completed state
 */
function updateUIForCompleted() {
    const flagStatus = document.getElementById('flagStatus');
    const flagIcon = document.getElementById('flagIcon');
    const statusText = document.getElementById('statusText');
    const markCompletedBtn = document.getElementById('markCompletedBtn');
    const clearFlagBtn = document.getElementById('clearFlagBtn');
    const setFlagBtn = document.getElementById('setFlagBtn');
    
    flagStatus.className = 'flag-status completed';
    flagIcon.textContent = '✓';
    statusText.textContent = 'Task Completed';
    
    markCompletedBtn.style.display = 'none';
    clearFlagBtn.style.display = 'inline-block';
    setFlagBtn.style.display = 'none';
}

/**
 * Update UI to show flagged state
 */
function updateUIForFlagged() {
    const flagStatus = document.getElementById('flagStatus');
    const flagIcon = document.getElementById('flagIcon');
    const statusText = document.getElementById('statusText');
    const markCompletedBtn = document.getElementById('markCompletedBtn');
    const clearFlagBtn = document.getElementById('clearFlagBtn');
    const setFlagBtn = document.getElementById('setFlagBtn');
    
    flagStatus.className = 'flag-status pending';
    flagIcon.textContent = '🚩';
    statusText.textContent = 'Pending Follow-Up';
    
    markCompletedBtn.style.display = 'inline-block';
    clearFlagBtn.style.display = 'inline-block';
    setFlagBtn.style.display = 'none';
}

/**
 * Update UI to show no flag state
 */
function updateUIForNoFlag() {
    const flagStatus = document.getElementById('flagStatus');
    const flagIcon = document.getElementById('flagIcon');
    const statusText = document.getElementById('statusText');
    const markCompletedBtn = document.getElementById('markCompletedBtn');
    const clearFlagBtn = document.getElementById('clearFlagBtn');
    const setFlagBtn = document.getElementById('setFlagBtn');
    
    flagStatus.className = 'flag-status';
    flagStatus.style.backgroundColor = '#f0f0f0';
    flagStatus.style.border = '2px solid #ccc';
    flagIcon.textContent = '📭';
    statusText.textContent = 'No Follow-Up Flag';
    
    markCompletedBtn.style.display = 'none';
    clearFlagBtn.style.display = 'none';
    setFlagBtn.style.display = 'inline-block';
}

/**
 * Show a message to the user
 */
function showMessage(text, type) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = text;
    messageDiv.className = `message ${type}`;
    messageDiv.style.display = 'block';
    
    if (type !== 'info') {
        setTimeout(() => {
            messageDiv.style.display = 'none';
        }, 5000);
    }
}
