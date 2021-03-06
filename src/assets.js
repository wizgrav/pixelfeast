import events from './events';

export const images = {
  drone: './static/drone.png',
  drone_enemy: './static/drone_enemy.png',
  grass: './static/grass.png',
  grass1: './static/grass-1.png',
  grass2: './static/grass-2.png',
  grass3: './static/grass-3.png',
  grass4: './static/grass-4.png',
  grass5: './static/grass-5.png',
  road1: './static/road1.png',
  road2: './static/road2.png',
  road3: './static/road3.png',
  house1: './static/house-1.png',
  house2: './static/house-2.png',
  house3: './static/house-3.png',
  house4: './static/house-4.png',
  house5: './static/house-5.png',
  house6: './static/house-6.png',
  house7: './static/house-7.png',
  house8: './static/house-8.png',
  house9: './static/house-9.png',
  house10: './static/house-10.png',
  explosion: './static/explosion.png',
  navigation: './static/navigation.png',
  healthhud_drone: './static/healthhud_drone.png',
  package: './static/package.png',
  rotor: './static/rotor.png',
};

export function loadImages() {
  return Promise.all(Object.keys(images).map(imageName => new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      images[imageName] = image;
      resolve();
    };
    image.onerror = reject;
    image.src = images[imageName];
  }))).then(() => {
    events.imagesLoaded.dispatch(images);
    return images;
  });
};
