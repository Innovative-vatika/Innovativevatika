document.getElementById('contentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const content = document.getElementById('content').value;
    if (content) {
        const postedContentDiv = document.getElementById('postedContent');
        const newContent = document.createElement('p');
        newContent.textContent = content;
        postedContentDiv.appendChild(newContent);
        
        document.getElementById('content').value = '';
    }
});
