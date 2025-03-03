/********************************
 * LIGHT/DARK MODE TOGGLE
 ********************************/
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
  themeToggle.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode', themeToggle.checked);
    document.body.classList.toggle('light-mode', !themeToggle.checked);
  });
};

/********************************
 * ROW 1 => 3 images
 ********************************/
const row1Files = [
  'images/image1.jpg',
  'images/image2.jpg',
  'images/image3.jpg'
];

/********************************
 * ROW 2 => video, image, video
 ********************************/
const row2Files = [
  'images/video1.MP4',
  'images/image4.JPG',
  'images/video2.MP4'
];

/********************************
 * BUILD ROWS
 ********************************/
populateRow('row1', row1Files);
populateRow('row2', row2Files);

/********************************
 * CREATE ITEMS
 ********************************/
function populateRow(rowId, files) {
  const rowElement = document.getElementById(rowId);
  files.forEach(filePath => {
    rowElement.appendChild(createItem(filePath));
  });
}

function createItem(filePath) {
  const container = document.createElement('div');
  container.className = 'item';

  const ext = filePath.split('.').pop().toLowerCase();
  if (['mp4', 'webm', 'ogg'].includes(ext)) {
    // It's a video
    const video = document.createElement('video');
    video.src = filePath;
    video.controls = true;
    container.appendChild(video);
  } else {
    // It's an image
    const img = document.createElement('img');
    img.src = filePath;
    container.appendChild(img);
  }

  return container;
}
