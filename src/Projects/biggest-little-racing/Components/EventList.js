import React from 'react';

import Event from './Event';
import PeavineMap from '../Maps/Peavine.jpeg';

const EventList = () => {
  return (
    <div>
      <Event
        title={'Dirty R Enduro'}
        date={new Date('May 14, 2022')}
        description={[
          'We’re bringing grassroots racing to Reno!',
          'Inspired by the Tears Fears and Beers Enduro organized by our friends out in Ely, my goal with this series is to combine the energy of a race weekend with the laid back vibe of a big local group ride.  There will be camping, there will be racing, and there will be beer 🍺.',
          'To keep things simple, we will be using Strava to time the event, and we will be following the course map from the 2016 CES.While the group ride will take place on Saturday May 14th, I will count any and all racers who complete the 6 stages in one single ride anytime in the week leading up to the event.',
          'For camping, we plan to camp out on Friday May 13th on Peavine BLM land, you can find link for the location in this post.  Be sure to bring everything you’ll need to pack out all your trash so that we can leave area better than we found it.',
          'I’m still working out the details of the route, so stay tuned for updates.  I’d like to figure out a route where we can roll out from the campsite, but there is still some planning that needs to take place to figure that out.',
          'I hope to see you out there!',
        ]}
        img={'https://ep1.pinkbike.org/p5pb13495230/p5pb13495230.jpg'}
        links={[
          {
            link: 'https://www.strava.com/segments/7290236?filter=overall',
            stageName: 'N Trail',
          },
          {
            link: 'https://www.strava.com/segments/12083231?filter=overall',
            stageName: 'B Lite',
          },
          {
            link: 'https://www.strava.com/segments/7290199?filter=overall',
            stageName: 'Sagebrush',
          },
          {
            link: 'https://www.strava.com/segments/9420261?filter=overall',
            stageName: 'Stagecoach',
          },
          {
            link: 'https://www.strava.com/segments/12083948?filter=overall',
            stageName: 'Fisticuffs',
          },
          {
            link: 'https://www.strava.com/segments/12077700?filter=overall',
            stageName: 'UNR DH',
          },
        ]}
        eventType={'enduro'}
        courseMap={PeavineMap}
        camping={{
          link: 'https://www.google.com/maps/dir//39.584944,-119.903525/@39.5849481,-119.9057137,755m/data=!3m1!1e3!4m11!1m8!3m7!1s0x0:0x38a66cd0236952a4!2zMznCsDM1JzA1LjgiTiAxMTnCsDU0JzEyLjciVw!3b1!7e2!8m2!3d39.5849439!4d-119.9035249!4m1!3e1',
          latlng: {
            lat: 39.584944,
            lng: -119.903525,
          },
        }}
      />

      {/* <Event
        title={'Downieville Enduro'}
        date={new Date('July 15, 2022')}
        description={['Details to come']}
        img={
          'https://www.patagonia.com/blog/wp-content/uploads/2019/09/etzel_k_1459-1600x883.jpg'
        }
        links={[]}
        eventType={'enduro'}
      /> */}
    </div>
  );
};

export default EventList;
