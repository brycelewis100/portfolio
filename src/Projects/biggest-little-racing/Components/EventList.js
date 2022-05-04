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
          'We’re bringing free grassroots racing to Reno!',
          'Inspired by the Tears Fears and Beers Enduro organized by our friends out in Ely, my goal with this series is to get the community together to enjoy big days on the bike. In the future I’d like to organize events that incorporate camping and racing into one big weekend, but for this first event, we’ll just stick to racing.',
          'To keep things simple, I will be using Strava to time the event, and we will be following the course map from the 2016 CES. Anyone who completes all 6 stages before I calculate the results on the evening of Mach 15th will be counted in the final results.',
          'For those that want to roll out as a group, the main “event” will start at the softball fields on Saturday, May 15th at 9:30am. ',
          'I hope to see you out there!',
        ]}
        img={'https://ep1.pinkbike.org/p5pb13495230/p5pb13495230.jpg'}
        links={[
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
          {
            link: 'https://www.strava.com/segments/7290236?filter=overall',
            stageName: 'N Trail',
          },
        ]}
        eventType={'enduro'}
        courseMap={PeavineMap}
        // camping={{
        //   link: 'https://www.google.com/maps/dir//39.589005,-119.875771/@39.5890091,-119.8779597,1251m/data=!3m1!1e3!4m2!4m1!3e0',
        //   latlng: {
        //     lat: 39.589005,
        //     lng: -119.875771,
        //   },
        // }}
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
