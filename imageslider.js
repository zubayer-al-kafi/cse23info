const imgurl = [
        "./Memories/1.jpg",
        "./Memories/2.jpg",
        "./Memories/3.jpg",
        "./Memories/4.jpg",
      ];
      const slider = document.getElementById("slider");
      const totalSlides = imgurl.length;
      let index = 0;
      document.getElementById("image").src = imgurl[index];

      document.getElementById("next").addEventListener("click", () => {
        index = (index + 1) % imgurl.length;
        document.getElementById("image").src = imgurl[index];
      });

      document.getElementById("prev").addEventListener("click", () => {
        index = (index - 1 + totalSlides) % totalSlides;
        document.getElementById("image").src = imgurl[index];
      });
