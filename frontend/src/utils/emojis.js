const funEmojis = [
    "🎉", "🎊", "🎈", "🎁", "🎂", "🍰", "🍦", "🍭", "🍬", "🍩",
    "🍔", "🍕", "🍟", "🍿", "🥤", "🍹", "🍸", "🥂", "🍺", "🍻",
    "🎮", "🕹️", "🎲", "🎳", "🎯", "🎰", "🎵", "🎶", "🎤", "🎧",
    "🎸", "🎷", "🎺", "🎻", "🥁", "🎨", "🎭", "🎬", "🎥", "🎦"
  ];
  
  // Function to generate a random fun emoji
  export function getRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * funEmojis.length);
    return funEmojis[randomIndex];
  }