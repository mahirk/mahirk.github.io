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

        // Create timeline line as DOM element
        this.createTimelineLine();

        // Render each timeline item
        this.data.forEach((item, index) => {
            const timelineItem = this.createTimelineItem(item);
            // Add most-recent class to the first item (most recent)
            if (index === 0) {
                timelineItem.classList.add('most-recent');
            }
            this.container.appendChild(timelineItem);
        });
    }

    /**
     * Create timeline line and markers as DOM elements
     */
    createTimelineLine() {
        const timelineLine = DOMUtils.createElement('div', 'timeline-line');
        const marker = DOMUtils.createElement('div', 'timeline-marker-dot');
        marker.classList.add('most-recent');
        timelineLine.appendChild(marker);
        // Create desktop arrow positioned absolutely within timeline
        const desktopArrow = DOMUtils.createElement('div', 'timeline-arrow');
        desktopArrow.innerHTML = `
            <a href="/work/" class="timeline-arrow-link">
                <i class="fa fa-arrow-right"></i>
            </a>
        `;

        timelineLine.appendChild(desktopArrow);

        this.container.appendChild(timelineLine);
    }

    /**
     * Create a single timeline item
     * @param {Object} item - Timeline item data
     * @returns {HTMLElement} Timeline item element
     */
    createTimelineItem(item) {
        const timelineItem = DOMUtils.createElement('div', 'timeline-item');
        
        // Add type-based CSS class for color highlighting
        if (item.type) {
            timelineItem.classList.add(item.type);
        } else {
            // Default to 'work' if no type specified
            timelineItem.classList.add('work');
        }
        
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

    /**
     * Add navigation elements (arrow for desktop, button for mobile)
     */
    addNavigationElements() {        
        // Create mobile button
        const mobileButton = DOMUtils.createElement('div', 'timeline-mobile-button');
        mobileButton.innerHTML = `
            <a href="/work/" class="timeline-button">
                View All Experiences
            </a>
        `;
        
        // Add arrow inside timeline container, button after timeline
        this.container.appendChild(desktopArrow);
        this.container.parentNode.appendChild(mobileButton);
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
        timeline.addNavigationElements();
    } else {
        console.warn('Work details data not found. Make sure data.js is loaded before timeline.js');
    }
});