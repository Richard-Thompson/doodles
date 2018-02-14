import React, { Component } from 'react';
import AboutCard from './AboutCard';

class AboutPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [`I have 'doodled' since I was young. One day, I decided to see what I could accomplish with it and experimented with different inks, papers and styles. I have tried coloured inks in specialised calligraphy pens. I find stopping to refill and clean tiresome, but the effects are pretty good. I like best the different Gel pens that can be obtained, and I am always trying new ones out. .5, or .7 for heavier work, are the sizes I use. As well as Bristol paper, I also now use black and coloured paper. While not as smooth as Bristol paper, the colour combinations that are possible make up for this. I like using the .5 and .7 because they enable me to do detailed work, and give much greater control; using a brush I lose that. I'm not adverse to experimenting, and would like to try using pyrography on wood to see if I could work my designs into the wood. Since I work very fast, the process might be too slow from what I've observed. I have tried encaustic art, and the wax runs out too quickly for my way of working, though I shall experiment to see if I can bring my own effects to the medium.`, `This site is called Abstract Art because the artwork is basically abstract. At first I thought to call it doodling. Doodling has been described as Automatism. A form of free drawing and type of undirected expression similar to doodle. Whatever it is, no drawing can be repeated and each is unique and original. This type of art has also been called Brut art, Naive Art, Outsider Art, Intuitive Art and Raw Art amongst others.`, `This site shows a number of galleries containing either pure abstract art or abstract art pictures that are outlined and doodled. The paper used, in most cases, is Bristol paper as that is the smoothest paper and works well with gel ink based pens. The gel inks are either coloured, black, or with a glitter touch to them. This makes for some pretty eye-catching artwork when shown to effect in the light. (This is not something that can be captured in a photograph of the artwork.)`, `Though I have an 'O'level in Art I am not trained in art in any way and draw purely for pleasure. If I don't draw almost every day my hand start starts to 'itch', and I just HAVE to pick up a pen. I like to draw when I'm watching TV, as my subconscious sees patterns in what I'm watching and they are then incorporated into the picture. Also, I don't like to concentrate fully upon the picture, and the distraction of the TV usually brings out a better picture. I usually just start with a line on the paper and go from there. Sometimes, I try to direct the picture into a shape of something; most times they just evolve. Sometimes, I put them in my 'best not to be looked at folder' , because they just have not worked out.`, `The pictures are best viewed as Flame Art Pictures or Sky Art Pictures. I.E. You see your own interpretation of faces, animals or whatever within the clouds or flames. Similarly, that is what happens with the doodles. Everyone sees something different, and that is how they are meant to be viewed.`, `The largest picture I have ever done was 5ft by 3ft. This took me five weeks, working several hours every day, to complete. A5 size is not generally a size I go down to as the artwork is lost at that size. I will be looking into having my artwork made into cards as the printer can reduce the A4 size without losing definition.`, `Several years ago I completed 45 works of art and they were hung by Stockport Art Gallery in the viewing room of Marple Library for a month long exhibition. I have attended a couple of Craft fairs at New Mills and Marple Bridge where I exhibited my artwork for sale. I have received commissions for pieces of artwork, mainly with a new age theme, as my art lends itself very well to this genre. If you want to discuss the art work, please feel free to email me, or use the feedback form. Commissions are welcome.`, `Acknowledgements`,]
        }
    }
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        return (
            <section className='about-page-wrapper'>
                <div className='navbar-background'></div>
                <h1 className='about-title'>About Abstract Art Artist Tina Clarke</h1>
                {this.state.content.map((text, i) => {
                    return(
                        <AboutCard text={text} key={i} timing={i}/>
                    )
                })}
                <h2 className='acknowledgements'>Acknowledgements</h2>
                <p className='acknowledgements-text'>I would like to say thank you to the following people who helped me in various capacities with this site.<br /><br />Cheryl Wild<br /><br />Cricket Bailey</p>

            </section>
        )
    }
}

export default AboutPage;