const but = document.getElementById('genbut');
const question = document.getElementById('jokeq');
const answer = document.getElementById('jokea');


but.addEventListener('click', async (event) => {
  event.preventDefault();
  try {
    const joke = await axios.get("https://joke.deno.dev/");
    question.innerHTML = joke.data.setup;
    answer.innerHTML = joke.data.punchline;
  } catch {
    console.log("not working!!!")
  }
});
