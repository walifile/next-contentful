import Avatar from '../ui/Avatar'
import ContentfulImage from '../ui/ContentfulImage'
import DateComponent from '../ui/DateComponent'

const PostHeader = ({ post }) => {
  const { title, coverImage, author, date , image , price } = post.fields
  console.log(post.fields, "post.fields")

  return (
    <>
      <h2>{title}</h2>
      {/* <div className='hidden md:flex md:justify-between md:items-center md:mb-10'>
        <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-400' />
      </div> */}
      <div className='mb-8 md:mb-16 sm:mx-0'>
        <ContentfulImage
          alt={`Cover Image for ${title}`}
          src={image.fields.file.url}
          width={image.fields.file.details.image.width}
          height={image.fields.file.details.image.height}
        />
      </div>
      <div className='flex justify-between items-center font-bold mb-6'>

        Price : {price}
        {/* <Avatar name={author.fields.name} picture={author.fields.picture} />
        <DateComponent dateString={date} className='text-sm text-gray-400' /> */}
      </div>
    </>
  )
}

export default PostHeader
