import './App.css';

function App() {

  var FRAMES = 150;
  var FPS = 30;
  var video = document.getElementById('video');

  window.addEventListener('scroll', function (e) {
    var time = (window.scrollY / 1000) * FRAMES / FPS;
    video.currentTime = time;
  });


  return (
    <div className="App">

      <section>
        <video id="video" width="998" height="560" playsinline poster="https://lqez.github.io/js/airpodsvf/video.jpg">
          <source src="https://lqez.github.io/js/airpodsvf/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div class="scroll-dummy">
          <h1>AirPods Pro page is TOO BIG</h1>
          <p>
            <a href="https://www.apple.com/kr/airpods-pro/">https://www.apple.com/kr/airpods-pro/</a> contains 1,500+ images and their size is over 60MiB.
          </p>
          <p>
            I encoded the first 148ea, 4.8MiB of AirPods Pro images into a single 1.1MiB x264 video file and put it as a background.
            The video file has total 148 i-frame frames by ffmpeg's <code>-intra</code> option. It makes much smoother frame changes.
          </p>
          <p>
            Image countesy of Apple, Inc.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
