async function search () {

    const formData = document.querySelector('#formData');
    formData.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#nameAdd').value;
          console.log(name)


      if (!(name)) {
        console.log('Digite o Nome como no Github');
        return;
    
      }
  
      const response = await fetch(`https://api.github.com/users/${name}`)
      const data = await response.json()

    console.log(data)
    document.getElementById('name').innerHTML = data?.name;
    document.getElementById('html_url').innerHTML = data?.html_url ;
    document.getElementById('bio').innerHTML = data?.bio;
    document.getElementById('location').innerHTML = data?.location;
    document.getElementById('avatar_url').src = data?.avatar_url; 
        console.log(data.avatar_url.value)
});
}
search()


