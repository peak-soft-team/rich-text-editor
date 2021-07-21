import React from 'react'
import ImageGallery from 'react-image-gallery'
import './gallery.css'
import img1 from '../../assets/aza.png'
import img2 from '../../assets/oroz.png'
import img3 from '../../assets/aigerim.jpg'
import img4 from '../../assets/nargiz.png'
const images = [
	{
		original: img2,
		thumbnail: img2,
	},
	{
		original: img3,
		thumbnail: img3,
	},
	{
		original: img4,
		thumbnail: img4,
	},
	{
		original: img1,
		thumbnail: img1,
	},
]

export default class MyGallery extends React.Component {
	render() {
		return <ImageGallery items={images} />
	}
}
