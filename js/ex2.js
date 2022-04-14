const form = document.querySelector('#githubForm');

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const username = document.querySelector('#username').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(res => {
      if (res.message === 'Not Found') {
        return alert('Unknown user');
      } else {
        document.querySelector('#search').innerHTML = `
        <div>
            <p><img src="${res.avatar_url}" width="300" height="300"></p>
            <table>
                <tr>
                  <td>Name</td>
                  <td>${res.name ?? 'Unknown'}</td>
                </tr>
                <tr>
                  <td>Blog</td>
                  <td>${res.blog ?? 'Unknown'}</td>
                </tr>
                <tr>
                  <td>Created</td>
                  <td>${res.created_at ?? 'Unknown'}</td>
                </tr>
            </table>
        </div>
      `;
      }
    })
    .catch(err => {
      console.error(err.message);
    });
})