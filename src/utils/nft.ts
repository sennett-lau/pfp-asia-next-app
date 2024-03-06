import { INFTData } from '@/components/gallery/GalleryItems'

export const formatData = (data: any): INFTData => {
  const isIPFS = data.image.includes('ipfs')
  const image = isIPFS
    ? `https://ipfs.io/ipfs/${data.image.replace('ipfs://', '')}`
    : data.image
  const name = `No. ${data.name.split(' #')[1]}`
  const project = data.name.split(' #')[0]

  return {
    imageUrl: image,
    project,
    name,
  }
}
