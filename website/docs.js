import './style.css';
import { marked } from 'marked';

document.addEventListener('DOMContentLoaded', () => {
  const contentBody = document.getElementById('markdown-body');
  const links = document.querySelectorAll('#docs-nav a');
  
  // Custom marked renderer for syntax highlighting
  const renderer = new marked.Renderer();
  
  const applyHighlighting = (html) => {
    // Basic syntax highlighting for rust
    const keywords = ['pub', 'struct', 'fn', 'async', 'await', 'let', 'mut', 'use', 'match', 'if', 'else', 'return'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    html = html.replace(keywordRegex, '<span class="keyword">$1</span>');
    
    const types = ['String', 'i32', 'i64', 'bool', 'Option', 'Vec', 'Result', 'Error', 'User', 'Orm', 'FromRow', 'Schema', 'Box'];
    const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
    html = html.replace(typeRegex, '<span class="type">$1</span>');
    
    html = html.replace(/([a-zA-Z_0-9!]+)(?=\()/g, '<span class="function">$1</span>');
    html = html.replace(/("[^"]*")/g, '<span class="string">$1</span>');
    html = html.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
    
    return html;
  };

  renderer.code = function(code, language) {
    let highlighted = code;
    if (language === 'rust' || language === 'bash') {
       highlighted = applyHighlighting(code);
    }
    return `<pre><code class="language-${language}">${highlighted}</code></pre>`;
  };

  marked.setOptions({ renderer });

  // Load a markdown file
  const loadDoc = async (filename) => {
    contentBody.innerHTML = '<div class="loading">Loading documentation...</div>';
    
    try {
      const response = await fetch(`./docs/${filename}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const text = await response.text();
      contentBody.innerHTML = marked.parse(text);
      contentBody.classList.add('animate-fade-in');
      setTimeout(() => contentBody.classList.remove('animate-fade-in'), 800);
    } catch (error) {
      contentBody.innerHTML = `<div class="error">Failed to load documentation. Please try again later.</div>`;
      console.error('Error fetching docs:', error);
    }
  };

  // Setup click listeners
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      
      // Update active state
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      
      // Load content
      const file = link.getAttribute('data-file');
      loadDoc(file);
    });
  });

  // Load first doc by default
  if (links.length > 0) {
    links[0].click();
  }
});
