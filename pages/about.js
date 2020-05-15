import Page from '../layout/Page';
import ImageContent from '../layout/components/ImageContent';

const seo = {
  title: 'About',
}


const profileImage = {
  url: 'self.jpg',
  alt: 'Danielle at the Pink Beach on Crete',
  orientation: 'portrait',
  aspectRatio: '2x3',
}

const content = `
<h1>About the Photographer</h1>
<h3>More than just clicking buttons</h3>
<p>Danielle is an editorial photographer from Southern California. After attending UCLA for Biology she ditched the lab life and began a path in content creation. Equal parts artist and logician, Danielle fell in love with photography for both the emotive art of crafting unique imagery and the technical knowledge it takes to do so consistently.</p>
<p>As a hybrid photographer of both film and digital, Danielle has a taste for the old days. She loves classic rock, scouring for vintage goods, taking self portraits, going on road trips, and hanging out with her husband, cat, tortoise, and wilting houseplants.</p>
`;


const About = () => (
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

export default About;