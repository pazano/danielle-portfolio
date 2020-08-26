import Page from '../layout/Page';
import ImageContent from '../layout/components/ImageContent';
import ImageData from '../data/images';

const About = ( { seo, profileImage, content }) => (
  <Page seo={seo} >
    <div className="content width__medium">
      <ImageContent
        image={profileImage}
        content={content}
        imageSide="right"
        contentBackground={true}
        />
    </div>
  </Page>
);

About.getInitialProps = async () => {

  const seo = {
    title: 'About',
    description: '',
    keywords: '',
    url: 'https://www.ellerou.com/about'
  }

  const flattenPlacements = ImageData.about.reduce((reworkedObj, image) => {
    reworkedObj[image.placement] = image;
    return reworkedObj;
  }, {})

  const profileImage = flattenPlacements['profile'];

  const content = `
    <h1>About</h1>
    <p>Danielle Rouillard’s images are about connecting the natural beauty of the world with the uniqueness of oneself. With a mix of high-energy friendliness and low ego professionalism, Danielle is known for her ability to craft a story in a single image. Her bad puns and over the top miming skills remind those on set that our work is fun to do, and she likes to maintain a bit of playfulness in her creations. 	Danielle enjoys using interesting light and saturated palettes to convey movement, thoughtfulness, and joy in her work.</p>
    <p>A true old soul, Danielle has a passion for the decrepit old dusty things you may find in your grandpa’s garage. She loves shooting analog film and can often be found shooting a test roll in a random way as a route to inspiring new creative visions. </p>
    <p>Best described as an ambivert, Danielle is like a dog person in the streets and a cat lady in the deep dark pits of her editing office at home (Did you think we’d say “sheets”? Ew.)</p>
    <p>When not creating, she can often be found scouring the shelves of Goodwill, playing string time with her cat, on road trips camping in the back of her car, or nagging her husband to massage her feet.</p>
  `;

  return {
    seo,
    profileImage,
    content
  }
}

export default About;