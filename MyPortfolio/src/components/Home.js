import "./Home.css";

function Home() {
  return (
    <section className='intro'>
      <header class="flex flex-row justify-between">
        <a>JODEV</a>
        <div>
          <a>MY RESUME</a>
          <a>CONTACT ME</a>
        </div>
      </header>

      <div class="mx-auto w-[500px] flex flex-col items-center justify-center mt-20 bg-blue-500">
        <div class="text-white text-3xl font-bold mb-4">JOEL YANG</div>
        <div class="text-white mb-4">Graduate Software Engineer / Developer</div>
        <p class="text-white text-center">
          I am a software engineer who has a passion for
          project management, software development
          and data warehousing, currently looking for a
          graduate position to grow
        </p>
        <img src="src\images\Profile.png" alt="Profile picture"/>
        <img src="src\images\Programming languages.png" alt="Programming languages"/>
      </div>
    </section>
  )
}

export default Home;