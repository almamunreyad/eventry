const EventSchemaScript = ({ event }) => {
  const eventName = encodeURIComponent(event?.name);
  const formattedData = {
    "@context": "https://schema.org",
    "@type": "EducationalEvent",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event?.location,
      address: {
        "@type": "PostalAddress",
        streetAddress: "100 West Snickerpark Dr",
        addressLocality: "Snickertown",
        postalCode: "19019",
        addressRegion: "PA",
        addressCountry: "US",
      },
    },
    image: [event?.imageUrl],
    description: event?.details,
    offers: {
      "@type": "Offer",
      url: "https://www.example.com/event_offer/12345_202403180430",
      price: 30,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      validFrom: "2024-05-21T12:00",
    },
    performer: {
      "@type": "PerformingGroup",
      name: "Kira and Morrison",
    },
    organizer: {
      "@type": "Organization",
      name: "Kira and Morrison Music",
      url: "https://kiraandmorrisonmusic.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
      />
    </>
  );
};

export default EventSchemaScript;
