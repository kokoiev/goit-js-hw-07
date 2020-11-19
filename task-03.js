const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },]



const image = {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
}
  
const listGalleryRef = document.querySelector('#gallery');
listGalleryRef.classList.add('js-list')


const createImg = (image) => {
  const liRef = document.createElement('li');
  liRef.classList.add('js-li')
  const imgRef = document.createElement('img');
  imgRef.classList.add('js-image')
  imgRef.src = image.url
  imgRef.alt = image.alt
  liRef.appendChild(imgRef)

  
  return liRef

}

const createGallery = images.map(image => createImg(image))
listGalleryRef.append(...createGallery)