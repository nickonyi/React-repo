import { useState } from 'react';
import { initialTravelPlan } from '../data/places';

function PlaceTree({ place }) {
  const childPlaces = place.childPlaces;

  return (
    <li>
      {place.title}
      {childPlaces.length > 0 && (
        <ol>
          {childPlaces.map((place) => (
            <PlaceTree key={place.id} place={place} />
          ))}
        </ol>
      )}
    </li>
  );
}

export default function TravelItinary() {
  const [plan, setPlan] = useState(initialTravelPlan);
  const planets = plan.childPlaces;

  return (
    <>
      <h2>Places to visit</h2>
      <ol>
        {planets.map((place) => (
          <PlaceTree key={place.id} place={place} />
        ))}
      </ol>
    </>
  );
}
