// Lightsaber functionality
const lightsaberBtn = document.getElementById("lightsaberBtn");
const lightsaber = document.getElementById("lightsaber");
if (lightsaberBtn && lightsaber) {
  let isLightsaberActive = false;

  lightsaberBtn.addEventListener("click", () => {
    isLightsaberActive = !isLightsaberActive;
    lightsaber.classList.toggle("active");
    lightsaberBtn.textContent = isLightsaberActive
      ? "Deactivate Lightsaber"
      : "Activate Lightsaber";
  });
}

// Force meter functionality
const chargeBtn = document.getElementById("chargeBtn");
const meterFill = document.querySelector(".meter-fill");
if (chargeBtn && meterFill) {
  let forceLevel = 0;

  chargeBtn.addEventListener("click", () => {
    if (forceLevel < 100) {
      forceLevel += 10;
      meterFill.style.width = `${forceLevel}%`;

      if (forceLevel === 100) {
        chargeBtn.textContent = "Force Fully Charged!";
        chargeBtn.disabled = true;
      }
    }
  });
}

// Quiz functionality
const quizOptions = document.querySelectorAll(".quiz-option");
if (quizOptions.length > 0) {
  const correctAnswer = quizOptions[0].closest("#character-quiz")
    ? "Darth Vader"
    : "Episode IV: A New Hope";

  quizOptions.forEach((option) => {
    option.addEventListener("click", () => {
      if (option.textContent === correctAnswer) {
        option.style.backgroundColor = "#4CAF50";
        alert(
          quizOptions[0].closest("#character-quiz")
            ? "Correct! Well done, young Padawan!"
            : "Correct! You know your Star Wars movies!"
        );
      } else {
        option.style.backgroundColor = "#f44336";
        alert(
          quizOptions[0].closest("#character-quiz")
            ? "Incorrect. The Force is not strong with this one."
            : "Incorrect. May the Force be with you next time!"
        );
      }

      // Disable all options after answering
      quizOptions.forEach((opt) => (opt.disabled = true));
    });
  });
}

// Fade-in animation for news cards
const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((element) => {
  observer.observe(element);
});

// Read more button functionality
document.querySelectorAll(".read-more").forEach((button) => {
  button.addEventListener("click", () => {
    alert(
      "This feature is coming soon! Stay tuned for more Star Wars content."
    );
  });
});

// Character Details Button
document.querySelectorAll(".character-details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const characterName = button.parentElement.querySelector("h3").textContent;
    alert(`Loading details for ${characterName}...`);
  });
});

// Random Character Button
const randomCharacterBtn = document.getElementById("randomCharacterBtn");
if (randomCharacterBtn) {
  const characters = [
    {
      name: "Luke Skywalker",
      description: "The last Jedi of the original trilogy.",
    },
    { name: "Darth Vader", description: "The dark lord of the Sith." },
    { name: "Princess Leia", description: "Leader of the Rebel Alliance." },
    { name: "Han Solo", description: "The galaxy's most famous smuggler." },
    { name: "Yoda", description: "The wise Jedi Master." },
  ];

  randomCharacterBtn.addEventListener("click", () => {
    const randomChar =
      characters[Math.floor(Math.random() * characters.length)];
    const spotlightCard = document.querySelector(".spotlight-card");
    if (spotlightCard) {
      spotlightCard.querySelector("img").alt = randomChar.name;
      spotlightCard.querySelector("h3").textContent = randomChar.name;
      spotlightCard.querySelector("p").textContent = randomChar.description;
    }
  });
}

// Character Stats
document.querySelectorAll(".update-stat-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const statBar = button.parentElement.querySelector(".stat-fill");
    if (statBar) {
      const currentStat = parseInt(statBar.dataset.stat);
      const newStat = Math.min(100, currentStat + 10);
      statBar.dataset.stat = newStat;
      statBar.style.width = `${newStat}%`;

      if (newStat === 100) {
        button.textContent = "Maximum Power!";
        button.disabled = true;
      }
    }
  });
});

// Movie Details Button
document.querySelectorAll(".movie-details-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const movieTitle = button.parentElement.querySelector("h4").textContent;
    alert(`Loading details for ${movieTitle}...`);
  });
});

// Random Movie Button
const randomMovieBtn = document.getElementById("randomMovieBtn");
if (randomMovieBtn) {
  const movies = [
    {
      title: "Episode IV: A New Hope",
      description: "The beginning of the epic saga.",
    },
    {
      title: "Episode V: The Empire Strikes Back",
      description: "The dark chapter of the trilogy.",
    },
    {
      title: "Episode VI: Return of the Jedi",
      description: "The epic conclusion of the original trilogy.",
    },
    {
      title: "Episode I: The Phantom Menace",
      description: "The beginning of Anakin's journey.",
    },
    {
      title: "Episode II: Attack of the Clones",
      description: "The rise of the Clone Army.",
    },
  ];

  randomMovieBtn.addEventListener("click", () => {
    const randomMovie = movies[Math.floor(Math.random() * movies.length)];
    const spotlightCard = document.querySelector(".spotlight-card");
    if (spotlightCard) {
      spotlightCard.querySelector("img").alt = randomMovie.title;
      spotlightCard.querySelector("h3").textContent = randomMovie.title;
      spotlightCard.querySelector("p").textContent = randomMovie.description;
    }
  });
}

// Star Rating System
const stars = document.querySelectorAll(".star");
if (stars.length > 0) {
  const ratingText = document.getElementById("rating-text");

  stars.forEach((star) => {
    star.addEventListener("mouseover", () => {
      const rating = parseInt(star.dataset.rating);
      stars.forEach((s) => {
        if (parseInt(s.dataset.rating) <= rating) {
          s.style.color = "#ffd700";
        } else {
          s.style.color = "#ccc";
        }
      });
    });

    star.addEventListener("click", () => {
      const rating = parseInt(star.dataset.rating);
      stars.forEach((s) => {
        if (parseInt(s.dataset.rating) <= rating) {
          s.style.color = "#ffd700";
        } else {
          s.style.color = "#ccc";
        }
      });
      if (ratingText) {
        ratingText.textContent = `You rated ${rating} stars!`;
      }
    });
  });
}
