import './style.css'

// Basic Syntax Highlighting for Rust code block
document.addEventListener('DOMContentLoaded', () => {
  const codeBlocks = document.querySelectorAll('code.language-rust');
  
  codeBlocks.forEach(block => {
    let html = block.innerHTML;
    
    // Keywords
    const keywords = ['pub', 'struct', 'fn', 'async', 'await', 'let', 'mut', 'use', 'match', 'if', 'else', 'return'];
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
    html = html.replace(keywordRegex, '<span class="keyword">$1</span>');
    
    // Types
    const types = ['String', 'i32', 'Result', 'Error', 'User', 'Orm', 'FromRow'];
    const typeRegex = new RegExp(`\\b(${types.join('|')})\\b`, 'g');
    html = html.replace(typeRegex, '<span class="type">$1</span>');
    
    // Functions/Macros
    html = html.replace(/([a-zA-Z_0-9!]+)(?=\()/g, '<span class="function">$1</span>');
    
    // Strings
    html = html.replace(/("[^"]*")/g, '<span class="string">$1</span>');
    
    // Comments
    html = html.replace(/(\/\/.*)/g, '<span class="comment">$1</span>');
    
    block.innerHTML = html;
  });
});
