import Link from 'next/link';

import Carousel from './components/Carousel';
import Card from './components/Card';
import Quotes from './components/Quotes';

export default function Home() {
  return (
    <div className="">
   <div className="page-container-middle pt-16">
    <div className="card-container slogan-card-position">
      <h2 className="text-xl font-bold">Make your event sound better.</h2>
      <p className="">
        soundDr is a full-service audio production company based in the San
        Francisco Bay Area. We provide sound reinforcement, live recording,
        and audio post-production services for a wide range of events.
      </p>
    </div>
  </div>
    <div className="view-work-card">
  <div className="our-work-button">
    <a href="/services">View Our Work</a>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <Card
      imageSrc="/carousel/CD_LB-05.jpg"
      title="Beautiful Landscape"
    />
    <Card
      imageSrc="/carousel/CD_LB-10.jpg"
      title="Stunning Sunset"
    />
    <Card
      imageSrc="/carousel/CD_LB-13.jpg"
      title="Majestic Mountains"
    />
    <Card
      imageSrc="/carousel/CD_LB-15.jpg"
      title="Serene Lake"
    />
    <Card
      imageSrc="/carousel/CD_LB-15.jpg"
      title="Serene Lake"
    />
    <Card
      imageSrc="/carousel/CD_LB-15.jpg"
      title="Serene Lake"
    />
  </div>
</div>
<Quotes/>
    </div>
   

  )
}
