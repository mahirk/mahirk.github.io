/**
 * Comprehensive Work Experience Module
 * Combines Angular.js functionality, timeline utilities, and legacy compatibility
 * Handles both work experience page and global data access
 */

(function() {
    'use strict';

    // ========================================
    // LEGACY COMPATIBILITY & GLOBAL DATA
    // ========================================
    
    /**
     * Global WorkData object for backward compatibility
     * Provides formatted date functions and data access
     */
    window.WorkData = {
        formatDate: function(dateStr) {
            if (dateStr === 'Present') {
                return 'Present';
            }
            const split = dateStr.split(',');
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
            return months[split[1] - 1] + " " + split[0];
        },
        
        // Data will be populated after definitions
        timeline: null,
        works: null
    };

    // ========================================
    // ANGULAR.JS MODULE CONFIGURATION
    // ========================================

    if (typeof angular !== 'undefined') {
        // Angular.js module for work store
        const app = angular.module('workStore', []);

        /**
         * Filter to trust HTML content
         */
        app.filter('unsafe', ['$sce', function($sce) {
            return function(val) {
                return $sce.trustAsHtml(val);
            };
        }]);

        /**
         * Filter to format dates from "YYYY,M,D" format
         */
        app.filter('dateSplit', function() {
            return function(val) {
                // Use DateUtils if available, otherwise use WorkData fallback
                if (typeof DateUtils !== 'undefined') {
                    return DateUtils.formatDate(val);
                }
                return window.WorkData.formatDate(val);
            };
        });

        /**
         * Main controller for experiences page (work + education)
         */
        app.controller('StoreController', ['$scope', function($scope) {
            // Use work details for comprehensive experience view
            var allExperiences = (typeof WORK_DETAILS !== 'undefined') ? WORK_DETAILS : 
                                (window.WorkData.works || []);
            
            // Sort chronologically (most recent first)
            var sortedExperiences = [...allExperiences].sort(function(a, b) {
                var dateA = new Date(a.startDate.replace(/,/g, '/'));
                var dateB = new Date(b.startDate.replace(/,/g, '/'));
                return dateB - dateA;
            });
            
            $scope.experiences = sortedExperiences;
            $scope.works = allExperiences; // Keep for backward compatibility
            
            // Set initial selected item
            $scope.selected = {
                item: $scope.experiences[0] || {}
            };

            /**
             * Method to select an experience item
             * @param {Object} experience - Experience object
             */
            $scope.selectExperience = function(experience) {
                $scope.selected.item = experience;
            };
            
            // Keep legacy method for backward compatibility
            $scope.selectWork = $scope.selectExperience;
        }]);
    } else {
        console.warn('Angular.js not loaded. Work experience page may not function properly.');
    }

    // ========================================
    // ENHANCED WORK TIMELINE CLASS
    // ========================================

    /**
     * Enhanced work timeline functionality
     * Provides filtering, sorting, and analysis of work experience data
     */
    class WorkTimeline {
        constructor() {
            this.works = (typeof WORK_DETAILS !== 'undefined') ? WORK_DETAILS : 
                        (window.WorkData.works || []);
        }

        /**
         * Get work experience by company
         * @param {string} company - Company name
         * @returns {Array} Array of work experiences at the company
         */
        getWorkByCompany(company) {
            return this.works.filter(work => work.headline === company);
        }

        /**
         * Get work experience by type (internship, full-time, etc.)
         * @param {string} type - Type of work experience
         * @returns {Array} Array of work experiences of the type
         */
        getWorkByType(type) {
            const typeKeywords = {
                'internship': ['intern'],
                'fulltime': ['engineer', 'staff', 'senior', 'sr'],
                'leadership': ['organizer', 'chair', 'president']
            };

            const keywords = typeKeywords[type.toLowerCase()] || [];
            return this.works.filter(work => {
                const title = work.title.toLowerCase();
                return keywords.some(keyword => title.includes(keyword));
            });
        }

        /**
         * Get chronologically sorted work experience
         * @returns {Array} Chronologically sorted work experiences
         */
        getChronological() {
            return [...this.works].sort((a, b) => {
                const dateA = new Date(a.startDate.replace(/,/g, '/'));
                const dateB = new Date(b.startDate.replace(/,/g, '/'));
                return dateB - dateA; // Most recent first
            });
        }

        /**
         * Get work experience within a date range
         * @param {string} startYear - Start year (YYYY)
         * @param {string} endYear - End year (YYYY)
         * @returns {Array} Work experiences within the date range
         */
        getWorkInRange(startYear, endYear) {
            return this.works.filter(work => {
                const workStartYear = parseInt(work.startDate.split(',')[0]);
                const workEndYear = work.endDate === 'Present' ? 
                    new Date().getFullYear() : 
                    parseInt(work.endDate.split(',')[0]);
                
                return workStartYear <= parseInt(endYear) && workEndYear >= parseInt(startYear);
            });
        }

        /**
         * Get summary statistics
         * @returns {Object} Statistics about work experience
         */
        getStats() {
            const companies = [...new Set(this.works.map(work => work.headline))];
            const internships = this.getWorkByType('internship');
            const fulltime = this.getWorkByType('fulltime');
            
            return {
                totalPositions: this.works.length,
                totalCompanies: companies.length,
                internships: internships.length,
                fulltimePositions: fulltime.length,
                companies: companies
            };
        }
    }

    // ========================================
    // INITIALIZATION
    // ========================================

    /**
     * Initialize work timeline functionality when DOM is ready
     */
    function initializeWorkTimeline() {
        // Check if we're using the modular data structure
        if (typeof WORK_DETAILS !== 'undefined') {
            // Populate WorkData for backward compatibility
            window.WorkData.works = WORK_DETAILS;
        }

        // Initialize WorkTimeline class
        if (typeof WORK_DETAILS !== 'undefined' || window.WorkData.works) {
            window.WorkTimeline = new WorkTimeline();
        }
    }

    // Initialize when DOM is ready
    if (typeof DOMUtils !== 'undefined' && DOMUtils.ready) {
        DOMUtils.ready(initializeWorkTimeline);
    } else {
        // Fallback initialization
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeWorkTimeline);
        } else {
            initializeWorkTimeline();
        }
    }

})();