import Head from 'next/head';
import { getFeaturedEvents } from '../helpers/api-util';

import EventList from '../components/events/event-list';

export default function Home(props) {

  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="NextJS Events close by" />
      </Head>
      <EventList items={props.events} />
    </div>
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();
  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800
  };
}
