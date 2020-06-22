async function newFormHandler(event) {
    event.preventDefault();
    console.log('fired');
    //const title = document.getElementById('input[name="post-title"]').value;
    const title = document.querySelector('input[name="post-title"]').value;
    const blog_post = document.getElementById('#blog_post').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        blog_post
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);