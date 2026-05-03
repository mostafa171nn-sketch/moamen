import EventDetailsClient from './EventDetailsClient';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;
  return <EventDetailsClient />;
}

