import './PostContent.scss';

const PostContent = ({ html }) => {
  return (
    <div className={'content width__medium'} dangerouslySetInnerHTML={{ __html: html }} />
  )
}

export default PostContent;