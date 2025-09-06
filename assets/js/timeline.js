/**
 * Timeline functionality for main page
 * Handles rendering and interaction of the career timeline
 */

class TimelineRenderer {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.data = [];
    }

    /**
     * Set timeline data
     * @param {Array} data - Timeline data array
     */
    setData(data) {
        this.data = data;
        return this;
    }

    /**
     * Render the timeline
     */
    render() {
        if (!this.container) {
            console.error('Timeline container not found');
            return;
        }

        // Clear existing content
        this.container.innerHTML = '';

        // Render each timeline item
        this.data.forEach(item => {
            const timelineItem = this.createTimelineItem(item);
            this.container.appendChild(timelineItem);
        });
    }

    /**
     * Create a single timeline item
     * @param {Object} item - Timeline item data
     * @returns {HTMLElement} Timeline item element
     */
    createTimelineItem(item) {
        const timelineItem = DOMUtils.createElement('div', 'timeline-item');
        
        const dateRange = DateUtils.formatDateRange(item.startDate, item.endDate);
        const orgText = this.formatOrganizationText(item);
        
        timelineItem.innerHTML = `
            <div class="timeline-content-above">
                <div class="timeline-date">${dateRange}</div>
            </div>
            <div class="timeline-marker"></div>
            <div class="timeline-content-below">
                <div class="timeline-title">${item.title}</div>
                <div class="timeline-org">${orgText}</div>
            </div>
        `;
        
        return timelineItem;
    }

    /**
     * Format organization text with proper links
     * @param {Object} item - Timeline item data
     * @returns {string} Formatted HTML string
     */
    formatOrganizationText(item) {
        const location = item.location ? ', ' + item.location : '';
        
        // Organization-specific link formatting
        const orgLinks = {
            'Stripe': `<a href="https://stripe.com" target="_blank">Stripe</a>`,
            'HBO': `<a href="https://hbo.com" target="_blank">HBO</a>`,
            'Cornell Tech': `<a href="https://tech.cornell.edu/" target="_blank">Cornell Tech</a>`,
            'University of Washington': `<a href="https://uw.edu" target="_blank">University of Washington</a>`
        };

        if (orgLinks[item.headline]) {
            return orgLinks[item.headline] + location;
        }
        return item.headline + location;
    }
}

// Initialize timeline when DOM is ready
DOMUtils.ready(() => {
    const timeline = new TimelineRenderer('main-timeline');
    
    // Check if data is available
    if (typeof WORK_DETAILS !== 'undefined') {
        // Sort experiences chronologically (most recent first) and take top 3
        const sortedExperiences = [...WORK_DETAILS].sort((a, b) => {
            const dateA = new Date(a.startDate.replace(/,/g, '/'));
            const dateB = new Date(b.startDate.replace(/,/g, '/'));
            return dateB - dateA;
        });
        
        const recentExperiences = sortedExperiences.slice(0, 3);
        timeline.setData(recentExperiences).render();
    } else {
        console.warn('Work details data not found. Make sure data.js is loaded before timeline.js');
    }
});