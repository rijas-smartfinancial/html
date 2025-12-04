document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-bs-toggle="tab"]');
    
    function updateTabColors() {
        tabs.forEach(tab => {
            const svg = tab.querySelector('svg');
            if (!svg) return;
            
            const paths = svg.querySelectorAll('path');
            
            if (tab.classList.contains('active')) {
                paths.forEach(path => {
                    const stroke = path.getAttribute('stroke');
                    if (stroke === 'black') {
                        path.setAttribute('stroke', '#CAB9FF');
                    } else if (stroke === '#7047EF' || stroke === '#824FF8') {
                        path.setAttribute('stroke', 'white');
                    }
                });
            } else {
                paths.forEach(path => {
                    const stroke = path.getAttribute('stroke');
                    if (stroke === '#CAB9FF') {
                        path.setAttribute('stroke', 'black');
                    } else if (stroke === 'white') {
                        path.setAttribute('stroke', '#7047EF');
                    }
                });
            }
        });
    }
    
    tabs.forEach(tab => {
        tab.addEventListener('shown.bs.tab', updateTabColors);
    });
    
    updateTabColors();
});