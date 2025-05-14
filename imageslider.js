const imgurl = [
        "https://picsum.photos/800/400?random=1",
        "https://picsum.photos/800/400?random=2",
        "https://picsum.photos/800/400?random=3",
        "https://picsum.photos/800/400?random=4",
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