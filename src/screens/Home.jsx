
import { useEffect, useState } from "react";
import DashboardLayout from '../components/DashboardLayout'
import FrontPage from '../assets/gifs/FrontPage.gif'
import { ProjectData } from '../utils/PersProjData'
import ContactForm from '../components/ContactForm'

import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import AOS from "aos"
import "aos/dist/aos.css";

const Home = () => {

useEffect(() => {
  AOS.init({ duration: 1200 });
  AOS.refresh();
}, []);
  
  return (
    <DashboardLayout>
    <div className="p-5 ">
      <img class="h-auto max-w-full mx-auto" src={FrontPage} alt="image description"/>
      
      
      {ProjectData.map((project) => (
  <div key={project.id} className="space-y-4 mt-15 max-w-5xl mx-auto">
    <h2 className="text-2xl font-bold tracking-wider  " data-aos="fade-up">{project.Title}</h2>
    <hr className="my-4 border-t border-gray-300" />

    {project.id === '01' && (
      <>
        <p style={{ fontFamily: "'PT Sans', sans-serif" }} className='text-justify'>
          A quick dive in to my medieval-fantasy story, 'The Bard I Write For Is A Vampire!'. It talks about Shiloh, our not-so-undercover-runaway-noble who <em>surprise surprise</em> is a vampire. She believed leaving her vampire-noble family will lead to her finding her true identity: being a <em>bard</em>. Together with her is her knight, who has sworn to never leave her side (and also because her parents asked him to stay with her - <em>for her sake</em>), and unexpectedly - write her songs.
        </p>
       <Zoom> {project.Image1 && <img src={project.Image1} className="w-full p-5 " data-aos="fadeup" />}</Zoom>
        <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-justify">
          Your favorite singing bard - <em>who's secretly a runaway vampire noble</em> -  but of course, no one knows about it, <em>unless?</em> Her career is a slow start not until she started singing the songs that her knight writes for her, it turns out she can't write to save her life! Join her as she tackles her newfound identity, while escaping her pasts and its enemies.
        </p>
       <Zoom> {project.Image2 && <img src={project.Image2} className="w-full p-5" data-aos="fadeup" />}</Zoom>
        <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-justify">
          Your silent knight - <em>of unknown origin</em> - is Shiloh's bodyguard that never left her side, even as she deserted her vampire noble family. Little does she know that her family tasked Aldo to stay by her side because you can never be too careful with her. So, while he fights to protect her from stray enemies here and there, he also writes her songs. Turns out he's got a knack for it. Let's watch both Shiloh and Aldo as they wander in new places, sing in unknown taverns, and possibly -  <em>fall in love in the midst of lyrical chaos and creatures of the night</em>.
        </p>
      </>
    )}

    {project.id === '02' && (
      <>
        <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-justify" >
          What happens when you - <em>an angsty teen</em> - tries to pick up your little sister's game console, which you threw on the road? Of course, you get ran over by Tricycle-kun! However, you don't get transported into heaven, or to hell, but to... Humans Walking! Totally not like An*mal Cr*ssing, because we wouldn't want to get sued. So live your life as someone who can't move on from her past life, but has to achieve quests as to not die! again!
        </p>
       <Zoom> {project.Image1 && <img src={project.Image1} className="w-full p-5" data-aos="fadeup"/>}</Zoom>
        <p style={{ fontFamily: "'PT Sans', sans-serif" }} className="text-justify">
          Aki's your typical angsty teen, who's sick of the world, then gets isekai-ed into a social simulation game, where she has to act accordingly, but how can she? Knowing how her life was, and the people she loved - does she take it for granted? How must she tackle life knowing all this? How can she conquer the game of life once more?
        </p>
      </>
    )}
  </div>
))}

    <div className=''>
      <ContactForm/>
    </div>
    </div>
    </DashboardLayout>
  )
}

export default Home