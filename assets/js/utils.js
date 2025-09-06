/**
 * Utility functions for date formatting and common operations
 */

const DateUtils = {
    /**
     * Format date string from "YYYY,M,D" format to readable format
     * @param {string} dateStr - Date in format "YYYY,M,D" or "Present"
     * @returns {string} Formatted date string
     */
    formatDate: function(dateStr) {
        if (dateStr === 'Present') {
            return 'Present';
        }
        
        const split = dateStr.split(',');
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "June", 
            "July", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        return months[split[1] - 1] + " " + split[0];
    },

    /**
     * Create a date range string
     * @param {string} startDate - Start date
     * @param {string} endDate - End date
     * @returns {string} Formatted date range
     */
    formatDateRange: function(startDate, endDate) {
        if (startDate === endDate) {
            return this.formatDate(startDate);
        }
        return this.formatDate(startDate) + " - " + this.formatDate(endDate);
    }
};

const DOMUtils = {
    /**
     * Create a DOM element with classes and content
     * @param {string} tag - HTML tag name
     * @param {string|string[]} className - CSS class name(s)
     * @param {string} innerHTML - Inner HTML content
     * @returns {HTMLElement} Created element
     */
    createElement: function(tag, className, innerHTML = '') {
        const element = document.createElement(tag);
        
        if (className) {
            if (Array.isArray(className)) {
                element.classList.add(...className);
            } else {
                element.className = className;
            }
        }
        
        if (innerHTML) {
            element.innerHTML = innerHTML;
        }
        
        return element;
    },

    /**
     * Wait for DOM to be ready
     * @param {Function} callback - Function to execute when DOM is ready
     */
    ready: function(callback) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', callback);
        } else {
            callback();
        }
    }
};

// Export for Node.js if available, otherwise attach to window
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DateUtils, DOMUtils };
} else if (typeof window !== 'undefined') {
    window.DateUtils = DateUtils;
    window.DOMUtils = DOMUtils;
}