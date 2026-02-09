/* global Office */

Office.onReady(() => {
    console.log('Commands loaded');
});

/**
 * Mark the current email as completed from the ribbon button
 */
function markAsCompleted(event) {
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
                    setCompletedCategory(event);
                } else {
                    console.error('Error saving completion status');
                    event.completed();
                }
            });
        } else {
            console.error('Error loading custom properties');
            event.completed();
        }
    });
}

/**
 * Set category to indicate completed status
 */
function setCompletedCategory(event) {
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
                if (setResult.status === Office.AsyncResultStatus.Succeeded) {
                    // Show notification
                    Office.context.mailbox.item.notificationMessages.addAsync(
                        'completedNotification',
                        {
                            type: 'informationalMessage',
                            message: 'Email marked as completed!',
                            icon: 'icon1',
                            persistent: false
                        }
                    );
                }
                event.completed();
            });
        } else {
            event.completed();
        }
    });
}

// Make function available globally for Office
if (typeof Office !== 'undefined' && Office.actions) {
    Office.actions.markAsCompleted = markAsCompleted;
}
